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
  telegramUrl?: string;
  demoUrl?: string;
  additionalLinks?: { label: string; url: string }[];
  screenshots?: { url: string; caption: string; fit?: string }[];
  videos?: { url: string; caption: string }[];
}

export const projects: Project[] = [
  {
    id: '8',
    title: 'AI Tools Finder',
    slug: 'ai-tools-finder',
    category: 'automation',
    technologies: [
      'React','Stripe', "RAG", "Supabase", 'TypeScript', 'shadcn/ui', 'Tailwind CSS', 'Framer Motion', 
       'PostgreSQL', 'Edge Functions', 'Deno',  'RAG', 'LLM', 'n8n'
    ],
    description: `
      Discover the perfect AI tool for your needs with this full-stack application. Built with a modern stack (React, TypeScript, Supabase), it features a curated repository, an intelligent recommendation system (potentially using RAG for chat-based suggestions), and secure user authentication.
      Key Components:
      - **Frontend:** React (Vite), TypeScript, shadcn/ui, Tailwind, Framer Motion for a smooth, type-safe UI.
      - **Backend:** Supabase platform handling PostgreSQL database, authentication, and serverless Edge Functions (TypeScript/Deno) for tasks like Stripe integration, external API calls, and RAG logic.
      - **Payments:** Stripe integration for handling subscriptions, one-time payments, and checkout processes.
      - **Automation:** n8n workflows streamline new tool ingestion by scraping data, using LLMs for descriptions/tags, and feeding it into Supabase.
      - **Type Safety:** End-to-end type safety ensured by auto-generated types from the DB schema.

      This project showcases a clean architecture focused on user experience, leveraging Supabase for a robust backend and n8n for efficient automation, making AI tool discovery effortless.
    `,
    shortDescription: 'A full-stack AI tool discovery platform using React, Supabase, Stripe, and n8n, featuring a curated list and smart recommendations.',
    imageUrl: '/images/projects/ai-tools-finder/screenshot.png',
    featured: true,
    date: '2025-04-09',
  },
  {
    id: '4',
    title: 'Instagram Post Automation System',
    slug: 'instagram-post-automation',
    category: 'automation',
    technologies: ['Python', 'TypeScript', 'Node.js', 'ChatGPT API', 'Instagram API', 'Cloudinary', 'Notion API', 'Twilio'],
    description: `
      Managing multiple Instagram accounts was driving me crazy - constantly hunting for content, editing images, writing captions, and posting at the right times. So I built this system to do it all automatically.

      The project started as a simple script but evolved into a complete workflow solution that handles everything from finding content to scheduling and posting it with minimal human input.

      It's made up of two main parts:

      1. Post-Matic Bot (Python):
      - Grabs videos and images from popular platforms like TikTok and Reddit
      - Transforms them to look great on Instagram (adds overlays, fixes aspect ratios, etc.)
      - Uses ChatGPT to write engaging captions that match your brand's voice
      - Uploads everything to Cloudinary so it's ready for posting

      2. Post Scheduler (TypeScript/Node.js):
      - Uses Notion as an easy-to-manage posting calendar
      - Automatically posts to Instagram at the times you've scheduled
      - Sends you a text message when posts go live
      - Provides a simple API for checking status and making adjustments

      The best part is you can control everything through configuration files, so you don't need to touch code when managing multiple accounts or changing content sources. I've designed it to be modular, so adding support for other platforms like TikTok or Twitter would be straightforward.
    `,
    shortDescription: 'End-to-end automation system that scrapes, transforms, and schedules content from multiple platforms to Instagram with AI-enhanced captions and branding.',
    imageUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920',
    additionalLinks: [
      { label: 'Instagram Automation Demo', url: 'https://www.instagram.com/meme.chronicles_/' },
    ],
    screenshots: [
      { 
        url: '/images/projects/instagram-automation/screenshot-1.jpg', 
        caption: 'Post-Matic Bot dashboard showing content sources and processing queue' 
      },
      { 
        url: '/images/projects/instagram-automation/screenshot-2.jpg', 
        caption: 'Notion scheduling interface with post calendar and analytics' 
      },
      { 
        url: '/images/projects/instagram-automation/screenshot-3.jpg', 
        caption: 'Before/after example of content transformation with branded overlays' 
      }
    ],
    featured: false,
    date: '2024-03-01'
  },

  {
    id: '6',
    title: 'Airtable Social Media Analyzer',
    slug: 'airtable-analyzer',
    category: 'automation',
    technologies: ['Node.js', 'TypeScript', 'Fastify', 'Airtable', 'Social Media APIs', 'Docker'],
    description: `
      The Airtable Analyzer is a specialized backend service I developed for collecting and analyzing social media data from Instagram and TikTok accounts. It helps identify trending content and viral videos within specific niches.

      Key features include:
      - Automated data collection from Instagram and TikTok every 24 hours
      - Integration with Airtable for structured data storage
      - Tracking of key metrics like views, likes, comments, and their growth over time
      - API endpoints for updating posts and adding new accounts to track
      - Calculation of engagement scores to identify high-performing content

      Technical Implementation:
      - Built with Node.js and TypeScript for type safety and maintainability
      - Airtable integration to fetch and store account configurations:
        - Stores analyzed metrics and engagement data
      - Proxy server to bypass rate limits and access private content
      - Instagram Private API integration:
        - Authenticates with stored account credentials
        - Private API to fetch reels
        - Extracts engagement metrics and reach data
      - TikTok API integration:
        - Uses unofficial API to fetch video analytics
        - Tracks view counts, shares, and engagement rates
      - Automated data collection pipeline runs every 24 hours:
        - Fetches new content from both platforms
        - Updates metrics for existing content
        - Stores results in Airtable
    `,
    shortDescription: 'Social media analytics dashboard that tracks engagement metrics from Instagram and TikTok to identify viral content trends.',
    imageUrl: '/images/projects/airtable-analyzer/dashboard.png',
    featured: true,
    date: '2024-06-01',
    screenshots: [
      { 
        url: '/images/projects/airtable-analyzer/analytics.png', 
        caption: 'Analytics dashboard showing engagement metrics' 
      },
      { 
        url: '/images/projects/airtable-analyzer/dashboard.png', 
        caption: 'Account tracking interface' 
      },
      { 
        url: '/images/projects/airtable-analyzer/comparison.png', 
        caption: 'Content performance comparison' 
      },
    ]
  },
 
  
  {
    id: '5',
    title: 'Maskify - Re-uploading viral videos across multiple side accounts',
    slug: 'maskify',
    category: 'automation',
    technologies: ['Python', 'FFmpeg', 'React', 'Node.js', 'Video Processing', 'Social Media APIs', 'Audio Manipulation'],
    description: `
      I developed Maskify to solve a specific problem for a social media agency client. They were re-uploading viral videos across multiple side accounts but noticed limited reach due to Instagram's algorithm detecting duplicate content.

      The challenge was to create a system that could take any social media video and transform it in a way that would make it appear unique to content detection algorithms while preserving the original appeal of the content.

      What Maskify does:
      - Accepts URLs from any major platform (Instagram, TikTok, YouTube, Facebook)
      - Downloads the original video content securely
      - Allows users to specify how many unique variations they need
      - Applies sophisticated audio transformations (pitch shifting, tempo changes, frequency masking)
      - Subtly alters video metadata and encoding parameters
      - Makes micro-adjustments to visual elements that are imperceptible to humans but significant to algorithms
      - Delivers ready-to-upload files that bypass duplicate content detection
      - Provides a simple web interface for non-technical users

      The system has been a game-changer for the agency, allowing them to maintain engagement across multiple accounts without triggering algorithm penalties. It's particularly effective for agencies managing multiple client accounts in the same niche where content themes often overlap.
    `,
    shortDescription: 'Content transformation platform that helps social media agencies reuse viral videos across multiple accounts by altering audio and metadata to bypass algorithm detection.',
    imageUrl: '/images/projects/maskify/ui.png',
    featured: true,
    date: '2024-01-20',
    screenshots: [
      { 
        url: '/images/projects/maskify/ui.png', 
        caption: 'Maskify web interface for video processing and transformation' 
      }
    ]
  },
  {
    id: '7',
    title: 'Event Mobile App',
    slug: 'event-mobile-app',
    category: 'performance',
    technologies: ['Flutter', 'Node.js', 'Fastify', 'Ory', 'PostgreSQL', 'Gorse ML', 'Machine Learning'],
    description: `
      I'm developing a party event mobile app with a focus on simplicity and ease of use, targeting the German market initially with plans for international expansion. The app addresses a common frustration with existing event discovery platforms in Germany, which are often unnecessarily complex and always require registration.

      Key Features:
      - User-friendly interface for discovering and joining local party events
      - No mandatory registration required to browse events
      - Smart recommendation system powered by Gorse ML that learns user preferences
      - Real-time event updates and notifications
      - Location-based event discovery
      - Integration with popular payment systems
      - Multi-language support (starting with German, expandable to other languages)

      Technical Architecture:
      - Flutter for cross-platform mobile frontend development
      - Node.js with Fastify framework for a high-performance backend
      - Ory for secure and flexible authorization management
      - Gorse Machine Learning recommendation system for personalized event suggestions
      - PostgreSQL database ensuring scalability and efficient data management
      - RESTful API design for seamless communication between components
      - Containerized deployment setup for easy scaling and maintenance

      The app fills a gap in the German event discovery market by providing a streamlined, intuitive experience that respects user privacy and doesn't force account creation for basic functionality. The recommendation engine becomes more powerful as it learns from user interactions, creating increasingly personalized event suggestions over time.
    `,
    shortDescription: 'A streamlined party event discovery app for the German market built with Flutter, Node.js, and ML-powered recommendations, designed to eliminate unnecessary complexity and registration barriers.',
    imageUrl: '/images/projects/event-app/splash_logo.png',
    featured: true,
    date: '2024-03-15',
    screenshots: [

      { 
        url: '/images/projects/event-app/main.png', 
        caption: 'Login screen with simple authentication options',
        fit: 'contain'
      },
      { 
        url: '/images/projects/event-app/party_detail.png', 
        caption: 'Detailed event view with information and join options',
        fit: 'contain'
      },
      { 
        url: '/images/projects/event-app/map.png', 
        caption: 'Map view showing event locations',
        fit: 'contain'
      }
    ],
  },
  {
    id: '1',
    title: 'Rustbitrage Bot',
    slug: 'rustbitrage-bot',
    category: 'web3',
    technologies: ['Rust', 'Solidity', 'Ethereum', 'DeFi', 'Smart Contracts', 'Flashloans'],
    description: `
      I built this high-performance crypto arbitrage bot in Rust to detect and execute profitable trading opportunities across decentralized exchanges. The core architecture leverages Rust's zero-cost abstractions and memory safety guarantees to achieve the ultra-low latency required for MEV competition.

      The system implements a modified Bellman-Ford algorithm optimized for detecting negative cycles in a weighted directed graph representing exchange rates. Each vertex represents a token and each edge represents an exchange rate between two tokens on a specific DEX. By finding negative cycles in this graph, we can identify arbitrage opportunities across multiple trading pairs and exchanges.

      Technical implementation details:
      - Custom async runtime built on tokio in rust for concurrent monitoring of multiple DEX contracts
      - Modified Bellman-Ford with parallel path exploration
      - Smart contract interactions via alloy-rs

      The architecture consists of several key components:
      - Market data ingestion engine processing real-time events from DEX contracts
      - Graph maintenance module updating exchange rate edges as prices change
      - Arbitrage detection engine running modified Bellman-Ford analysis
      - Smart contract interaction layer managing flashloans and trade execution
      - Risk management system enforcing position limits and slippage thresholds

      This design allows for microsecond-level response times while maintaining the reliability needed for automated trading.
    `,
    shortDescription: 'High-performance Web3 arbitrage bot written in Rust that capitalizes on price differences across decentralized exchanges.',
    imageUrl: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9',
    githubUrl: 'https://github.com/0xPatryk/rustbitrage-bot',
    featured: true,
    date: '2023-12-15'
  },
  {
    id: '2',
    title: 'Insider Wallet Scraper',
    slug: 'insider-wallet-scraper',
    category: 'automation',
    technologies: ['Python', 'Web Scraping', 'Data Analysis', 'Blockchain', 'Crypto Trading', 'DexScreener API', 'GMGN.ai'],
    description: `
      Ever wanted to know what successful crypto traders are actually buying? That's exactly why I created this tool. It tracks the blockchain activity of profitable traders and helps identify patterns in their strategies.

      The project came from my own frustration trying to separate signal from noise in crypto trading. Instead of following random Twitter advice, I built a system to find wallets with consistent success and learn from their moves.

      What it does:
      - Finds interesting new tokens across different blockchains based on specific criteria like age and market cap
      - Identifies consistently profitable traders by analyzing their transaction history
      - Integrates with DexScreener to discover top-performing tokens and emerging market opportunities
      - Automatically scrapes and analyzes top trader wallets from high-performing token pairs
      - Uses GMGN.ai to deep dive into trader performance metrics:
        * Detailed PnL analysis across different timeframes
        * Risk management patterns and position sizing
        * Win/loss ratios and average trade durations
        * Portfolio composition and diversification strategies
      - Digs into successful portfolios to understand their allocation strategies
      - Works across multiple chains including Solana, Ethereum, Base, Tron, and Blast
      - Runs automatically at strategic times to catch the latest moves
      - Exports everything to CSV so you can do your own deeper analysis

      The complete workflow:
      1. Scrapes DexScreener for top-performing tokens based on volume and price action
      2. Identifies wallets that were early into these successful trades
      3. Analyzes these wallets through GMGN.ai to verify their long-term performance
      4. Tracks successful traders' new positions and portfolio changes
      5. Generates detailed reports combining on-chain data with GMGN.ai insights
    `,
    shortDescription: 'Advanced crypto wallet tracking tool that identifies successful traders through multi-platform analysis of their trading activities and performance, integrating DexScreener and GMGN.ai for comprehensive insights.',
    imageUrl: 'https://images.unsplash.com/photo-1660062993887-4938423dce59?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/0xPatryk/insider-wallets-scraper',
    featured: false,
    date: '2024-02-10'
  },
  {
    id: '3',
    title: 'Telegram Trading Bot',
    slug: 'telegram-trading-bot',
    category: 'web3',
    technologies: ['Telegram API', 'AI', 'Hyperliquid', 'Trading Bot', 'Crypto Trading', 'HyperEVM'],
    description: `
      Trading on Hyperliquid used to require jumping between different interfaces and websites. I wanted something simpler, so I built HyperSpartan - a Telegram bot that lets you trade directly from your chat window using plain English commands.

      The idea came after I missed several good trading opportunities because I couldn't access my laptop quickly enough. Now I can manage my positions from my phone with simple text messages.

      What makes it special:
      - Trade using natural language - just type what you want to do
      - Open positions on Hyperliquid's perpetual markets with precise control
      - Track your positions and profits in real-time right in Telegram
      - Set up automatic sniping for new token launches (great for catching those early gems)
      - Seamless integration with Hypurr.Fun for expanded trading options
      - Adjust your risk level by changing leverage with simple commands
      - Get AI-powered insights about market conditions before you trade
      - Easily move funds between spot and perpetual markets

      Technical Implementation:
      - Built entirely in Rust for maximum performance and reliability
      - Uses PostgreSQL for persistent storage of user data and trading history
      - Implements Redis caching
      - Handles high concurrent user load efficiently through Rust's async runtime
    `,
    shortDescription: 'AI-powered Telegram bot for Hyperliquid traders providing natural language trading, automated strategies, and real-time position management.',
    imageUrl: '/images/projects/hyperspartan/telegram.jpg',
    liveUrl: 'https://www.hyperspartan.xyz/',
    telegramUrl: 'https://t.me/HyperSpartan_Bot',
    additionalLinks: [
      { label: 'Website', url: 'https://hyperspartan.xyz' },
      { label: 'Whitepaper', url: 'https://hyperspartan.xyz/whitepaper' },
    ],
    screenshots: [
      { 
        url: '/images/projects/hyperspartan/telegram.jpg', 
        caption: 'Telegram bot interface allowing natural language trading commands' 
      },
     
    ],
    videos: [
      {
        url: '/images/projects/hyperspartan/ai-command.mp4',
        caption: 'Natural language AI command processing in action'
      },
      {
        url: '/images/projects/hyperspartan/liquidlaunch.mp4',
        caption: 'Liquid Launch feature demonstration'
      }
    ],
    featured: false,
    date: '2024-04-15'
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
    items: ['Rust', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS', 'Solidity']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'FastAPI', 'Express', 'TailwindCSS', 'Web3.js', 'Ethers.js', 'Telegram API', 'Instagram API', 'Notion API']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Linux', 'Telegram', 'Instagram', 'Cloudinary', 'Twilio', 'ChatGPT']
  },
  {
    category: 'Specialties',
    items: ['Web Scraping', 'Performance Optimization', 'Blockchain Development', 'System Architecture', 'API Design', 'DeFi', 'MEV', 'Data Analysis', 'Trading Bots', 'AI Integration', 'Content Automation', 'Social Media']
  }
];
