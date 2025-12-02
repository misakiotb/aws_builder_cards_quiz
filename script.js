document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const reloadBtn = document.getElementById('reload-btn');

    // Overlay Elements
    const overlay = document.getElementById('overlay');
    const closeOverlayBtn = document.getElementById('close-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDesc = document.getElementById('overlay-desc');
    const overlayIcon = document.getElementById('overlay-icon');

    // Check if CARD_DATA exists
    if (typeof CARD_DATA === 'undefined') {
        cardContainer.innerHTML = '<div class="error">データファイル (data.js) が読み込まれていません。</div>';
        return;
    }

    function displayRandomCards() {
        // Create a weighted deck
        let deck = [];
        CARD_DATA.forEach(card => {
            // Add card 'count' times to the deck
            for (let i = 0; i < card.count; i++) {
                deck.push(card);
            }
        });

        if (deck.length === 0) {
            cardContainer.innerHTML = '<div class="error">カードデータが空です。</div>';
            return;
        }

        // Shuffle and pick 5 unique cards (based on serviceName)
        // To ensure uniqueness while respecting probability, we can shuffle the deck
        // and then iterate, picking unique items until we have 5.
        const shuffledDeck = deck.sort(() => 0.5 - Math.random());
        const selectedCards = [];
        const selectedNames = new Set();

        for (const card of shuffledDeck) {
            if (!selectedNames.has(card.serviceName)) {
                selectedCards.push(card);
                selectedNames.add(card.serviceName);
            }
            if (selectedCards.length >= 5) break;
        }

        renderCards(selectedCards);
    }

    function renderCards(cards) {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';

            // State: 0 (Default), 1 (Hint)
            // Description is shown in overlay
            let state = 0;

            const iconPath = `assets/icons/${card.icon}`;
            // Fallback for missing icon handled by CSS or onerror event

            cardEl.innerHTML = `
                <div class="card-header">
                    <div class="card-type">${card.type}</div>
                </div>
                <div class="card-body">
                    <img src="${iconPath}" alt="${card.serviceName}" class="service-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="service-icon-placeholder" style="display:none; width:64px; height:64px; background:#eee; border-radius:8px; align-items:center; justify-content:center; margin-bottom:15px;">No Icon</div>
                    
                    <div class="service-name">${card.serviceName}</div>
                    <div class="service-type">${card.serviceType}</div>
                    
                    <div class="hint-area">
                        <strong>ヒント:</strong><br>
                        ${card.hint}
                    </div>
                </div>
            `;

            // Click Interaction
            cardEl.addEventListener('click', () => {
                if (state === 0) {
                    // Show Hint
                    cardEl.classList.add('show-hint');
                    state = 1;
                } else {
                    // Show Description Overlay
                    showOverlay(card);
                }
            });

            cardContainer.appendChild(cardEl);
        });
    }

    function showOverlay(card) {
        overlayTitle.textContent = card.serviceName;
        overlayDesc.textContent = card.description;
        overlayIcon.src = `assets/icons/${card.icon}`;
        overlayIcon.onerror = () => { overlayIcon.style.display = 'none'; };
        overlayIcon.onload = () => { overlayIcon.style.display = 'block'; };

        overlay.classList.remove('hidden');
    }

    function hideOverlay() {
        overlay.classList.add('hidden');
    }

    // Event Listeners
    reloadBtn.addEventListener('click', displayRandomCards);
    closeOverlayBtn.addEventListener('click', hideOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideOverlay();
        }
    });

    // Initial load
    displayRandomCards();
});
