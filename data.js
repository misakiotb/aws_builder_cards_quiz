// AWS BuilderCards Data
// グローバル変数として定義することで、他のスクリプトからアクセス可能にします。
const CARD_DATA = [
    {
        "type": "AWSome credit",
        "serviceType": "compute",
        "serviceName": "Amazon EC2 Autoscaling",
        "count": 2,
        "hint": "自動スケーリング",
        "description": "EC2インスタンスの数を需要に応じて自動的に調整し、アプリケーションの可用性を維持しながらコストを最適化するサービスです。",
        "icon": "EC2-Auto-Scaling.png"
    },
    {
        "type": "AWSome credit",
        "serviceType": "developer tools",
        "serviceName": "AWS CDK",
        "count": 2,
        "hint": "Infrastructure as Code",
        "description": "プログラミング言語を使用してクラウドインフラストラクチャをコードとして定義・プロビジョニングできる開発フレームワークです。",
        "icon": "Cloud-Development-Kit.png"
    },
    {
        "type": "AWSome credit",
        "serviceType": "management & governance",
        "serviceName": "AWS CloudFormation",
        "count": 2,
        "hint": "テンプレートでインフラ構築",
        "description": "JSONまたはYAML形式のテンプレートを使用して、AWSリソースを自動的にモデル化・プロビジョニングするサービスです。",
        "icon": "CloudFormation.png"
    },
    {
        "type": "AWSome credit",
        "serviceType": "cloud financial management",
        "serviceName": "AWS Cost Management",
        "count": 2,
        "hint": "コスト可視化",
        "description": "AWSの利用コストを追跡・分析し、予算管理やコスト最適化を支援する一連のツールとサービスです。",
        "icon": "Cost-Explorer.png"
    },
    {
        "type": "AWSome credit",
        "serviceType": "management & governance",
        "serviceName": "AWS Systems Manager",
        "count": 2,
        "hint": "運用管理の統合",
        "description": "AWSリソースの運用タスクを自動化し、システムの可視性と制御を提供する統合管理サービスです。",
        "icon": "Systems-Manager.png"
    },
    {
        "type": "AWSome credit",
        "serviceType": "management & governance",
        "serviceName": "AWS Well-Architected Tool",
        "count": 2,
        "hint": "アーキテクチャ評価",
        "description": "AWSのベストプラクティスに基づいて、ワークロードのアーキテクチャをレビュー・改善するためのツールです。",
        "icon": "Well-Architected-Tool.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "application integration",
        "serviceName": "Amazon API Gateway",
        "count": 3,
        "hint": "API管理サービス",
        "description": "あらゆる規模のAPIを作成・公開・管理・監視・保護できるフルマネージド型サービスです。",
        "icon": "API-Gateway.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "analytics",
        "serviceName": "Amazon Athena",
        "count": 2,
        "hint": "S3をSQLで分析",
        "description": "標準SQLを使用してAmazon S3内のデータを直接分析できるインタラクティブなクエリサービスです。",
        "icon": "Athena.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "database",
        "serviceName": "Amazon Aurora",
        "count": 2,
        "hint": "高性能RDB",
        "description": "MySQL・PostgreSQL互換で、商用データベース並みのパフォーマンスとオープンソースの経済性を兼ね備えたリレーショナルデータベースです。",
        "icon": "Aurora.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "networking & content delivery",
        "serviceName": "Amazon CloudFront",
        "count": 2,
        "hint": "コンテンツ配信網",
        "description": "低レイテンシーと高速転送でデータ・動画・アプリケーションをグローバルに配信するコンテンツ配信ネットワーク（CDN）サービスです。",
        "icon": "CloudFront.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "management & governance",
        "serviceName": "Amazon CloudTrail",
        "count": 2,
        "hint": "操作ログ記録",
        "description": "AWSアカウント内のユーザーアクティビティとAPI呼び出しを記録・監視するガバナンス・コンプライアンスサービスです。",
        "icon": "CloudTrail.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "management & governance",
        "serviceName": "Amazon CloudWatch",
        "count": 2,
        "hint": "監視サービス",
        "description": "AWSリソースとアプリケーションをリアルタイムで監視し、メトリクス収集・ログ管理・アラーム設定ができるサービスです。",
        "icon": "CloudWatch.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "database",
        "serviceName": "Amazon DynamoDB",
        "count": 3,
        "hint": "NoSQLデータベース",
        "description": "高速で柔軟性のあるフルマネージド型NoSQLデータベースサービスで、あらゆる規模で一貫した1桁ミリ秒のレイテンシーを実現します。",
        "icon": "DynamoDB.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "compute",
        "serviceName": "Amazon EC2",
        "count": 8,
        "hint": "仮想サーバー",
        "description": "安全でサイズ変更可能なコンピューティング性能をクラウド内で提供するウェブサービスです。",
        "icon": "EC2.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "containers",
        "serviceName": "Amazon ECS",
        "count": 2,
        "hint": "コンテナオーケストレーション",
        "description": "Dockerコンテナを簡単に実行・停止・管理できる、拡張性とパフォーマンスに優れたコンテナオーケストレーションサービスです。",
        "icon": "ECS-Anywhere.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "storage",
        "serviceName": "Amazon EFS",
        "count": 2,
        "hint": "共有ファイルストレージ",
        "description": "複数のEC2インスタンスから同時アクセス可能な、スケーラブルで弾力性のあるクラウドネイティブなファイルシステムです。",
        "icon": "EFS.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "containers",
        "serviceName": "Amazon EKS",
        "count": 2,
        "hint": "Kubernetes管理",
        "description": "AWS上でKubernetesを簡単に実行できるフルマネージド型のKubernetesサービスです。",
        "icon": "EKS-Cloud.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "database",
        "serviceName": "Amazon ElastiCache",
        "count": 2,
        "hint": "インメモリキャッシュ",
        "description": "RedisまたはMemcachedと互換性のある、高速なインメモリデータストアサービスで、アプリケーションの性能を向上させます。",
        "icon": "ElastiCache.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "application integration",
        "serviceName": "Amazon EventBridge",
        "count": 2,
        "hint": "イベント駆動",
        "description": "アプリケーション間のイベントデータを接続するサーバーレスなイベントバスサービスで、イベント駆動型アーキテクチャを構築できます。",
        "icon": "EventBridge.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "analytics",
        "serviceName": "Amazon Kinesis Data Firehose",
        "count": 2,
        "hint": "ストリーム配信",
        "description": "ストリーミングデータをS3・Redshift・OpenSearchなどのAWSサービスに確実に配信するフルマネージド型サービスです。",
        "icon": "Data-Firehose.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "analytics",
        "serviceName": "Amazon Kinesis Data Streams",
        "count": 2,
        "hint": "リアルタイムストリーム",
        "description": "大規模なストリーミングデータをリアルタイムで収集・処理できるスケーラブルなデータストリーミングサービスです。",
        "icon": "Kinesis-Data-Streams.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "analytics",
        "serviceName": "Amazon OpenSearch Service",
        "count": 2,
        "hint": "検索・分析エンジン",
        "description": "ログ分析・全文検索・アプリケーション監視などを行うための、フルマネージド型の検索・分析エンジンサービスです。",
        "icon": "OpenSearch-Service.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "database",
        "serviceName": "Amazon RDS",
        "count": 2,
        "hint": "マネージドRDB",
        "description": "クラウド内でリレーショナルデータベースを簡単にセットアップ・運用・スケールできるマネージド型データベースサービスです。",
        "icon": "RDS.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "analytics",
        "serviceName": "Amazon RedShift",
        "count": 2,
        "hint": "データウェアハウス",
        "description": "ペタバイト規模のデータを高速に分析できるフルマネージド型のデータウェアハウスサービスです。",
        "icon": "Redshift.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "networking & content delivery",
        "serviceName": "Amazon Route53",
        "count": 2,
        "hint": "DNSサービス",
        "description": "高可用性でスケーラブルなクラウドDNSウェブサービスで、ドメイン登録とルーティング機能を提供します。",
        "icon": "Route-53.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "storage",
        "serviceName": "Amazon S3",
        "count": 4,
        "hint": "オブジェクトストレージ",
        "description": "業界をリードする拡張性・データ可用性・セキュリティを備えた、あらゆる量のデータを保存・取得できるオブジェクトストレージサービスです。",
        "icon": "Simple-Storage-Service.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "application integration",
        "serviceName": "Amazon SNS",
        "count": 3,
        "hint": "Pub/Sub通知",
        "description": "アプリケーション間またはアプリケーションとユーザー間のメッセージ配信を行う、フルマネージド型のPub/Subメッセージングサービスです。",
        "icon": "Simple-Notification-Service.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "application integration",
        "serviceName": "Amazon SQS",
        "count": 3,
        "hint": "メッセージキュー",
        "description": "マイクロサービス・分散システム・サーバーレスアプリケーション間でメッセージを送受信できるフルマネージド型メッセージキューイングサービスです。",
        "icon": "Simple-Queue-Service.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "application integration",
        "serviceName": "Amazon Step Functions",
        "count": 2,
        "hint": "ワークフロー調整",
        "description": "AWSサービスを視覚的なワークフローに組み合わせて、分散アプリケーションを構築できるサーバーレスなオーケストレーションサービスです。",
        "icon": "Step-Functions.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "networking & content delivery",
        "serviceName": "Amazon VPC",
        "count": 2,
        "hint": "仮想ネットワーク",
        "description": "AWS上に論理的に分離されたプライベートな仮想ネットワーク環境を構築し、ネットワーク構成を完全に制御できるサービスです。",
        "icon": "Virtual-Private-Cloud.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "containers",
        "serviceName": "AWS Fargate",
        "count": 2,
        "hint": "サーバーレスコンテナ",
        "description": "サーバーやクラスターの管理なしでコンテナを実行できる、ECS・EKS向けのサーバーレスコンピューティングエンジンです。",
        "icon": "Fargate.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "security, identity & compliance",
        "serviceName": "AWS IAM",
        "count": 3,
        "hint": "アクセス管理",
        "description": "AWSサービスとリソースへのアクセスを安全に管理し、ユーザー・グループ・ロールに対する認証と認可を提供するサービスです。",
        "icon": "Identity-and-Access-Management.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "compute",
        "serviceName": "AWS Lambda",
        "count": 6,
        "hint": "サーバーレス実行環境",
        "description": "サーバーのプロビジョニングや管理なしでコードを実行できるサーバーレスコンピューティングサービスで、イベント駆動で自動的にスケールします。",
        "icon": "Lambda.png"
    },
    {
        "type": "TCO credit",
        "serviceType": "networking & content delivery",
        "serviceName": "Elastic Load Balancing",
        "count": 2,
        "hint": "負荷分散",
        "description": "複数のターゲット間でアプリケーショントラフィックを自動的に分散し、アプリケーションの可用性と耐障害性を向上させるサービスです。",
        "icon": "Elastic-Load-Balancing.png"
    }
];
