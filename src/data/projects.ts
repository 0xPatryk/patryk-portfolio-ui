
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web3' | 'automation' | 'performance' | 'all';
  technologies: string[];
  description: string;
  shortDescription: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'DeFi Analytics Dashboard',
    slug: 'defi-analytics-dashboard',
    category: 'web3',
    technologies: ['React', 'TypeScript', 'Web3.js', 'TailwindCSS'],
    description: `
      A comprehensive analytics dashboard for decentralized finance applications. This project features real-time data visualization, wallet integration, and transaction monitoring across multiple blockchain networks.
      
      I developed a custom API integration layer that normalized data from different DeFi protocols, allowing users to track their positions, yields, and potential opportunities in one unified interface. The performance optimizations included virtualized lists for handling large datasets and efficient state management to minimize unnecessary re-renders.
      
      The dashboard includes features like:
      - Cross-chain portfolio tracking
      - APY comparison tools
      - Historical yield visualization
      - Gas fee optimization suggestions
      - Risk assessment metrics
    `,
    shortDescription: 'Real-time DeFi monitoring dashboard with cross-chain analytics and portfolio tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
    liveUrl: 'https://example.com/defi-dashboard',
    githubUrl: 'https://github.com/example/defi-dashboard',
    featured: true,
    date: '2023-10-15'
  },
  {
    id: '2',
    title: 'Social Media Trend Analyzer',
    slug: 'social-media-trend-analyzer',
    category: 'automation',
    technologies: ['Python', 'FastAPI', 'BeautifulSoup', 'PostgreSQL', 'Docker'],
    description: `
      An automated trend analysis tool that scrapes, processes, and visualizes trending topics across multiple social media platforms. This application helps marketing professionals identify emerging trends and optimize their content strategy.
      
      I built a distributed scraping system with rotating proxies and browser fingerprinting to reliably gather data from various platforms while respecting rate limits. The backend leverages FastAPI for efficient API endpoints and Celery for scheduled tasks and data processing jobs.
      
      Key features include:
      - Multi-platform data collection (Twitter, Reddit, Instagram, TikTok)
      - Sentiment analysis of trending topics
      - Automated report generation
      - Competitor analysis tools
      - Content opportunity identification
    `,
    shortDescription: 'Automated trend discovery tool that analyzes patterns across social media platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    liveUrl: 'https://example.com/trend-analyzer',
    githubUrl: 'https://github.com/example/trend-analyzer',
    featured: true,
    date: '2023-07-22'
  },
  {
    id: '3',
    title: 'High-Performance Data Pipeline',
    slug: 'high-performance-data-pipeline',
    category: 'performance',
    technologies: ['Rust', 'Apache Kafka', 'ClickHouse', 'gRPC', 'Kubernetes'],
    description: `
      A high-throughput data processing pipeline built for a fintech company that handles millions of transactions per minute. This project demonstrates advanced performance optimization techniques and efficient resource utilization.
      
      I reimplemented critical components of an existing Python-based pipeline in Rust, achieving a 50x performance improvement while reducing infrastructure costs by 70%. The architecture uses a combination of parallel processing, efficient memory management, and optimized algorithms.
      
      The system includes:
      - Custom binary serialization format
      - Lock-free concurrent processing
      - Adaptive batching strategies
      - Real-time monitoring and alerting
      - Automatic scaling based on throughput demands
    `,
    shortDescription: 'High-throughput financial data processing system with 50x performance improvement over previous solution.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    githubUrl: 'https://github.com/example/data-pipeline',
    featured: true,
    date: '2023-12-05'
  },
  {
    id: '4',
    title: 'Automated Content Distribution System',
    slug: 'automated-content-distribution',
    category: 'automation',
    technologies: ['TypeScript', 'Node.js', 'AWS Lambda', 'Puppeteer'],
    description: `
      A content automation platform that helps creators schedule, publish, and analyze content across multiple channels. The system optimizes posting times based on audience activity patterns and engagement metrics.
      
      I designed a serverless architecture that scales efficiently based on demand, with costs scaling linearly with usage. The solution includes sophisticated retry mechanisms and error handling to ensure reliability even when third-party APIs experience issues.
      
      Major components include:
      - Channel-specific content formatting
      - A/B testing for post variations
      - Engagement analytics and reporting
      - Audience growth tracking
      - Content calendar management
    `,
    shortDescription: 'Multi-channel content scheduling and distribution system with optimization for engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868',
    liveUrl: 'https://example.com/content-distributor',
    featured: false,
    date: '2023-05-18'
  },
  {
    id: '5',
    title: 'NFT Marketplace Analytics',
    slug: 'nft-marketplace-analytics',
    category: 'web3',
    technologies: ['React', 'Ethers.js', 'GraphQL', 'Next.js'],
    description: `
      A comprehensive analytics platform for NFT marketplaces that provides insights into collection performance, pricing trends, and market sentiment. This tool helps collectors and investors make data-driven decisions.
      
      I developed custom indexing solutions to efficiently process on-chain events and aggregate data from multiple marketplaces. The frontend features interactive visualizations and real-time updates for price movements and sales activity.
      
      The platform includes:
      - Collection value estimation
      - Rarity analysis and trait exploration
      - Historical price charts
      - Whale wallet tracking
      - Market manipulation detection
    `,
    shortDescription: 'NFT analytics platform with rarity scoring, price tracking, and collection performance metrics.',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    liveUrl: 'https://example.com/nft-analytics',
    githubUrl: 'https://github.com/example/nft-analytics',
    featured: false,
    date: '2023-09-12'
  },
  {
    id: '6',
    title: 'System Optimization Toolkit',
    slug: 'system-optimization-toolkit',
    category: 'performance',
    technologies: ['Rust', 'Python', 'C++', 'WebAssembly'],
    description: `
      A suite of performance optimization tools for identifying and resolving bottlenecks in various systems. This toolkit includes profiling utilities, memory analyzers, and automated optimization suggestions.
      
      I created a hybrid approach that combines low-level analysis in Rust with a Python interface for ease of use. The toolkit can be integrated into CI/CD pipelines to catch performance regressions before they reach production.
      
      Key components include:
      - Memory leak detection
      - CPU and IO profiling
      - Hot path identification
      - Automated benchmark generation
      - Optimization recommendation engine
    `,
    shortDescription: 'Performance analysis and optimization toolkit for identifying system bottlenecks.',
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
    githubUrl: 'https://github.com/example/optimization-toolkit',
    featured: false,
    date: '2023-11-30'
  }
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web3', label: 'Web3 & Blockchain' },
  { value: 'automation', label: 'Automation & Scraping' },
  { value: 'performance', label: 'Performance Engineering' }
];

export const skills = [
  {
    category: 'Languages',
    items: ['Rust', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'FastAPI', 'Express', 'TailwindCSS', 'Web3.js', 'Ethers.js']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Linux']
  },
  {
    category: 'Specialties',
    items: ['Web Scraping', 'Performance Optimization', 'Blockchain Development', 'System Architecture', 'API Design']
  }
];
