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
  screenshots?: { url: string; caption: string }[];
}

export const projects: Project[] = [
 
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
    imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2674&auto=format&fit=crop',
    featured: true,
    date: '2024-01-20',
    screenshots: [
      { 
        url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2674&auto=format&fit=crop', 
        caption: 'Maskify web interface for video processing and transformation' 
      }
    ]
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
      { label: 'Demo Video', url: 'https://example.com/instagram-automation-demo' },
      { label: 'Case Study', url: 'https://example.com/instagram-automation-case-study' }
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

      The system helps content creators and marketers identify what types of content are trending in their niche, allowing them to make data-driven decisions for their content strategy.

      Technical implementation uses Node.js with TypeScript and the Fastify framework, with Docker for easy deployment.
    `,
    shortDescription: 'Social media analytics dashboard that tracks engagement metrics from Instagram and TikTok to identify viral content trends.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2660&auto=format&fit=crop',
    featured: true,
    date: '2024-06-01',
    screenshots: [
      { 
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113', 
        caption: 'Analytics dashboard showing engagement metrics' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb', 
        caption: 'Account tracking interface with growth trends' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', 
        caption: 'Content performance comparison across platforms' 
      }
    ]
  },
  {
    id: '1',
    title: 'Rustbitrage Bot',
    slug: 'rustbitrage-bot',
    category: 'web3',
    technologies: ['Rust', 'Solidity', 'Ethereum', 'DeFi', 'Smart Contracts', 'Flashloans'],
    description: `
      I built this crypto arbitrage bot in Rust to spot and capitalize on price differences between decentralized exchanges in real-time. The main challenge was creating something fast enough to compete in the MEV space, where milliseconds matter.

      What makes this project special is how it uses flashloans to execute trades without needing upfront capital. This lets the bot take advantage of arbitrage opportunities regardless of wallet size.

      Some cool features I implemented:
      - Live monitoring across multiple exchanges like Uniswap and Sushiswap
      - Smart algorithms that quickly spot profitable trading opportunities
      - Custom smart contracts that execute trades automatically
      - Flashloan integration that removes the capital barrier to entry
      - Gas optimization techniques to maximize profits on each trade
      - MEV bundle submission to get transactions included efficiently
      - Risk management systems to protect against unexpected market moves
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
    title: 'HyperSpartan',
    slug: 'hyperspartan',
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
    `,
    shortDescription: 'AI-powered Telegram bot for Hyperliquid traders providing natural language trading, automated strategies, and real-time position management.',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c',
    liveUrl: 'https://www.hyperspartan.xyz/',
    telegramUrl: 'https://t.me/HyperSpartanBot',
    demoUrl: 'https://www.hyperspartan.xyz/demo',
    additionalLinks: [
      { label: 'Documentation', url: 'https://docs.hyperspartan.xyz' },
      { label: 'Buy $HYSP Token', url: 'https://www.hyperspartan.xyz/token' }
    ],
    screenshots: [
      { 
        url: 'https://images.unsplash.com/photo-1605792657660-596af9009e82', 
        caption: 'Trading interface showing real-time position management' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28', 
        caption: 'Natural language order execution in Telegram' 
      },
      { 
        url: 'https://images.unsplash.com/photo-1618044733300-9472054094ee', 
        caption: 'Performance analytics dashboard with PnL tracking' 
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
