document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const reloadBtn = document.getElementById('reload-btn');
    // Embedded CSV data to avoid CORS issues when running locally without a server
    const CSV_DATA = `カード種別,サービス種別,サービス名
AWSome credit,compute,Amazon EC2 Autoscaling
AWSome credit,developer tools,AWS CDK
AWSome credit,management & governance,AWS CloudFormation
AWSome credit,cloud financial management,AWS Cost Management
AWSome credit,management & governance,AWS Systems Manager
AWSome credit,management & governance,AWS Well-Architected Tool
TCO credit,application integration,Amazon API Gateway
TCO credit,analytics,Amazon Athena
TCO credit,database,Amazon Aurora
TCO credit,networking & content delivery,Amazon CloudFront
TCO credit,management & governance,Amazon CloudTrail
TCO credit,management & governance,Amazon CloudWatch
TCO credit,database,Amazon DynamoDB
TCO credit,compute,Amazon EC2
TCO credit,containers,Amazon ECS
TCO credit,storage,Amazon EFS
TCO credit,containers,Amazon EKS
TCO credit,database,Amazon ElastiCache
TCO credit,application integration,Amazon EventBridge
TCO credit,analytics,Amazon Kinesis Data Firehose
TCO credit,analytics,Amazon Kinesis Data Streams
TCO credit,analytics,Amazon OpenSearch Service
TCO credit,database,Amazon RDS
TCO credit,analytics,Amazon RedShift
TCO credit,networking & content delivery,Amazon Route53
TCO credit,storage,Amazon S3
TCO credit,application integration,Amazon SNS
TCO credit,application integration,Amazon SQS
TCO credit,application integration,Amazon Step Functions
TCO credit,networking & content delivery,Amazon VPC
TCO credit,containers,AWS Fargate
TCO credit,"security, identity & compliance",AWS IAM
TCO credit,compute,AWS Lambda
TCO credit,networking & content delivery,Elastic Load Balancing`;

    // CSV Parsing Function (Simple implementation for the given format)
    function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());

        const data = [];

        for (let i = 1; i < lines.length; i++) {
            // Handle simple comma separation, respecting quotes if necessary
            // For this specific CSV, we can use a regex or simple split if no commas in values
            // But line 33 has "security, identity & compliance", so we need to handle quotes.

            const row = [];
            let currentVal = '';
            let inQuotes = false;

            for (let char of lines[i]) {
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    row.push(currentVal.trim());
                    currentVal = '';
                } else {
                    currentVal += char;
                }
            }
            row.push(currentVal.trim()); // Push last value

            if (row.length === headers.length) {
                const card = {};
                headers.forEach((header, index) => {
                    card[header] = row[index].replace(/^"|"$/g, ''); // Remove surrounding quotes if any
                });
                data.push(card);
            }
        }
        return data;
    }

    function loadCards() {
        try {
            // Use embedded data instead of fetch
            allCards = parseCSV(CSV_DATA);
            displayRandomCards();
        } catch (error) {
            console.error('Error parsing CSV:', error);
            cardContainer.innerHTML = `<div class="error">カードデータの読み込みに失敗しました。<br>${error.message}</div>`;
        }
    }

    function displayRandomCards() {
        // Filter for "TCO credit"
        // Note: CSV header might be "カード種別"
        const tcoCards = allCards.filter(card => card['カード種別'] === 'TCO credit');

        if (tcoCards.length === 0) {
            cardContainer.innerHTML = '<div class="error">TCO credit カードが見つかりませんでした。</div>';
            return;
        }

        // Shuffle and pick 5
        const shuffled = tcoCards.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);

        renderCards(selected);
    }

    function renderCards(cards) {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';

            // Map CSV columns to display
            const serviceName = card['サービス名'] || 'Unknown Service';
            const serviceType = card['サービス種別'] || 'Unknown Type';
            const cardType = card['カード種別'] || 'Unknown';

            cardEl.innerHTML = `
                <div class="card-header">
                    <div class="card-type">${cardType}</div>
                </div>
                <div class="card-body">
                    <div class="service-name">${serviceName}</div>
                    <div class="service-type">${serviceType}</div>
                </div>
            `;
            cardContainer.appendChild(cardEl);
        });
    }

    reloadBtn.addEventListener('click', displayRandomCards);

    // Initial load
    loadCards();
});
