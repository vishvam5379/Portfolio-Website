export interface Project {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export interface Achievement {
  id: string;
  firm: string;
  title: string;
  badge: string;
  date: string;
  details: string[];
  payouts?: { amount: string; date: string }[];
  capital?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  projectLink?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status: string;
  score: string;
  board?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; tag?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "VISHVAM SUKHADIYA",
    title: "Computer Science Engineering Student | Full-Stack Developer | Forex & Prop Trader",
    headline: "BUILDING SOFTWARE. ANALYZING MARKETS. MANAGING RISK.",
    summary: "Computer Science & Engineering student with hands-on experience in Python/Django full-stack development and around 3 years of independent Forex, commodity, and cryptocurrency trading experience.",
    phone: "9313858614",
    email: "sukhadiyavishvam22@gmail.com",
    location: "Dahegam, Gandhinagar, Gujarat",
    github: "https://github.com/vishvam5379",
    githubUsername: "vishvam5379",
  },
  
  aboutCards: [
    {
      id: "software",
      title: "SOFTWARE ENGINEERING",
      subtitle: "Python, Django, Full-Stack Development",
      description: "Designing robust web applications, structured API architectures, and scalable full-stack software with clean code practices.",
      icon: "Code2",
    },
    {
      id: "trading",
      title: "TRADING",
      subtitle: "Forex, Commodities, Cryptocurrency",
      description: "Executing disciplined technical analysis across Forex pairs, gold/commodities, and digital assets using price action and market structure.",
      icon: "TrendingUp",
    },
    {
      id: "analytics",
      title: "ANALYTICS",
      subtitle: "Trade Journaling, P&L, Win Rate, Equity Analysis",
      description: "Leveraging empirical trade logs, equity curves, statistical metrics, and emotional tracking to continually refine strategic edge.",
      icon: "BarChart3",
    },
    {
      id: "risk",
      title: "RISK MANAGEMENT",
      subtitle: "Position Sizing, Drawdown Control, Risk-Reward",
      description: "Strict risk allocation per execution, automated drawdown limits, position size calculation, and psychological emotional control.",
      icon: "ShieldAlert",
    },
  ],

  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "New L.J. Institute of Engineering and Technology, GTU",
      period: "2023 – 2027",
      status: "7th Semester",
      score: "CGPA: 7.0",
      board: "GTU",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Shri Swaminarayan Gurukul, Gandhinagar",
      period: "2023",
      status: "Completed",
      score: "80 Percentile",
      board: "GSEB",
    },
    {
      degree: "Secondary School (10th Standard)",
      institution: "Shri Swaminarayan Gurukul, Gandhinagar",
      period: "2021",
      status: "Completed",
      score: "92%",
      board: "GSEB",
    },
  ] as EducationItem[],

  skills: [
    {
      title: "PROGRAMMING",
      skills: [
        { name: "Python", tag: "Primary" },
        { name: "Java", tag: "Core" },
        { name: "C", tag: "Foundational" },
        { name: "PHP", tag: "Web" },
      ],
    },
    {
      title: "WEB & BACKEND",
      skills: [
        { name: "Django", tag: "Backend Framework" },
        { name: "Python Full-Stack", tag: "Architecture" },
        { name: "HTML5", tag: "Frontend" },
        { name: "CSS3 / Modern CSS", tag: "Styling" },
        { name: "JavaScript (ES6+)", tag: "Scripting" },
      ],
    },
    {
      title: "DATABASE & DATA",
      skills: [
        { name: "DBMS", tag: "Theory & Design" },
        { name: "MySQL", tag: "Relational DB" },
        { name: "SQL", tag: "Queries & Indexing" },
        { name: "JSON APIs", tag: "Data Exchange" },
      ],
    },
    {
      title: "TOOLS & WORKFLOW",
      skills: [
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "Collaboration" },
        { name: "Antigravity", tag: "Agentic IDE" },
        { name: "Claude AI", tag: "AI Development" },
        { name: "AI-Assisted Dev", tag: "Productivity" },
      ],
    },
  ] as SkillCategory[],

  tradingDetails: {
    heading: "3 YEARS. ONE DISCIPLINE.",
    subtitle: "Independent Forex & Proprietary Trader",
    markets: ["Forex Currency Pairs", "Commodity Markets (Gold / XAUUSD)", "Cryptocurrency Markets"],
    coreCompetencies: [
      "Market Structure & Liquidity Analysis",
      "Price Action & Technical Analysis",
      "Strict Risk Management & Position Sizing",
      "Stop-Loss Discipline & Risk-to-Reward Planning",
      "Drawdown Control & Capital Preservation",
      "Trading Psychology & Emotional Regulation",
      "Detailed Trade Journaling & Statistical Analytics",
    ],
    framework: [
      {
        step: "01",
        title: "MARKET STRUCTURE",
        subtitle: "Trend & Liquidity Identification",
        description: "Mapping higher timeframe structure, key supply/demand zones, liquidity sweeps, and overall market trend bias before considering entries.",
      },
      {
        step: "02",
        title: "SETUP",
        subtitle: "Pattern & Trigger Confirmation",
        description: "Identifying high-probability technical confluence signals, candlestick patterns, and volume triggers aligned with the macro direction.",
      },
      {
        step: "03",
        title: "RISK ASSESSMENT",
        subtitle: "Risk-Reward & Drawdown Calculation",
        description: "Evaluating risk parameters, position sizing, invalidation points (stop-loss discipline), and target risk-to-reward ratio before placing orders.",
      },
      {
        step: "04",
        title: "POSITION SIZE",
        subtitle: "Dynamic Capital Allocation",
        description: "Calculating exact lot sizes based on precise account equity percentage, volatility, and fixed fractional risk rules.",
      },
      {
        step: "05",
        title: "EXECUTION",
        subtitle: "Disciplined Entry & Order Placement",
        description: "Executing trade entry with pre-set stop-loss and take-profit targets, eliminating emotional manual intervention during active trades.",
      },
      {
        step: "06",
        title: "JOURNAL",
        subtitle: "Psychological & Data Logging",
        description: "Logging trade execution metrics, screenshots, pre-trade mindset, post-trade emotions, and adherence to trading rules.",
      },
      {
        step: "07",
        title: "REVIEW",
        subtitle: "Performance & Strategy Refinement",
        description: "Weekly and monthly audit of win rate, average risk-to-reward, equity curve, discipline score, and emotional impact analysis.",
      },
    ],
  },

  propTradingStats: {
    maxCapitalReached: "$50,000",
    capitalSubtitle: "Allocated funded-account capital reached across various proprietary trading evaluations",
    disclaimer: "Note: Capital allocation figures reflect peak funded evaluation accounts reached during evaluation phases across multiple prop firms. This site does not claim current active management of $50k capital or guaranteed financial returns.",
    firms: ["FundingPips", "Goat Funded Trader", "Alpha Capital Group", "The5ers"],
    achievements: [
      {
        id: "fundingpips",
        firm: "FundingPips",
        title: "Bronze Certificate",
        badge: "$5,000 Funded Account",
        date: "December 2025",
        details: [
          "Awarded FundingPips Bronze Certificate of Achievement",
          "Successfully passed 2-Step Standard Evaluation",
          "Achieved $353.10 in total all-time performance rewards",
        ],
        payouts: [
          { amount: "$158.99", date: "December 12, 2025" },
          { amount: "$194.11", date: "December 17, 2025" },
        ],
        capital: "$5,000",
      },
      {
        id: "alphacapital",
        firm: "Alpha Capital Group",
        title: "Phase 1 Certificate of Achievement",
        badge: "Phase 1 Completed",
        date: "16 December 2025",
        details: [
          "Successfully completed Phase 1 Evaluation requirements",
          "Demonstrated strict risk management and profit target achievement",
          "Zero drawdown rule violations",
        ],
      },
      {
        id: "goatfunded",
        firm: "Goat Funded Trader",
        title: "Phase 1 Completed — 15K Challenge",
        badge: "15K Challenge",
        date: "17 February 2026",
        details: [
          "Successfully passed Phase 1 of the 15K Challenge",
          "Maintained controlled position sizing and disciplined trade management",
          "Validated consistency across volatile market conditions",
        ],
        capital: "$15,000",
      },
    ] as Achievement[],
  },

  projects: [
    {
      id: "tradesphere",
      title: "TRADESPHERE",
      tagline: "Trading Journal & Analytics Platform",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Analytics", "Data Visualization"],
      description: "A comprehensive trading journal web application engineered to log trades, monitor psychological data, and quantify performance metrics to build institutional trading discipline.",
      features: [
        "Interactive P&L & Equity Growth Dashboard",
        "Win Rate & Average Risk-to-Reward Analytics",
        "Pre-Trade & Post-Trade Psychological Tracking",
        "Discipline Score & Rule Adherence Matrix",
        "Win/Loss Distribution Breakdown",
        "P&L Analysis by Day & Symbol",
        "Emotional Impact Assessment Module",
      ],
      liveUrl: "https://trade-sphere-topaz.vercel.app",
      githubUrl: "https://github.com/vishvam5379/TradeSphere",
      category: "Fintech / Trading Software",
    },
    {
      id: "sparkzone",
      title: "SPARKZONE",
      tagline: "Gaming Station Booking System",
      tech: ["Python", "Django", "MySQL / Database", "JSON APIs", "REST Architecture"],
      description: "A full-stack web application designed for real-time gaming-station availability tracking, customer bookings management, and seamless backend API data exchange.",
      features: [
        "Real-Time Gaming Station Availability Grid",
        "Customer Booking & Time Slot Management",
        "Django MVC Architecture (Models, Views, URLs)",
        "Database-Backed Persistence & Query Optimization",
        "JSON Data Structures & REST API Integration",
        "Asynchronous Frontend / Backend Data Exchange",
      ],
      liveUrl: "https://sparkzone-lb8f.vercel.app",
      githubUrl: "https://github.com/vishvam5379/SparkZone",
      category: "Full-Stack Web App",
    },
  ] as Project[],

  internship: {
    company: "InfoLabz IT Services Pvt. Ltd.",
    location: "Navrangpura, Ahmedabad",
    role: "Summer Engineering Intern",
    period: "03 July 2026 – 17 July 2026",
    type: "Summer Internship",
    highlights: [
      "Developed Python & Django backend solutions for web services.",
      "Engineered the SparkZone Gaming Station Booking System.",
      "Implemented Django MVC architecture, models, views, and URL routing.",
      "Constructed JSON data structures and optimized API fetching mechanisms.",
      "Facilitated structured asynchronous data exchange between frontend and backend.",
    ],
  } as ExperienceItem,

  certifications: [
    {
      title: "Bronze Certificate",
      issuer: "FundingPips Proprietary Trading",
      date: "December 2025",
      type: "Funded Trader Certificate",
      description: "Awarded for passing the 2-Step Standard Evaluation and earning performance payouts on live funded accounts.",
    },
    {
      title: "Phase 1 Certificate of Achievement",
      issuer: "Alpha Capital Group",
      date: "16 December 2025",
      type: "Evaluation Milestone",
      description: "Awarded for successful completion of Phase 1 evaluation with disciplined risk parameters.",
    },
    {
      title: "Phase 1 Completed (15K Challenge)",
      issuer: "Goat Funded Trader",
      date: "17 February 2026",
      type: "Evaluation Milestone",
      description: "Awarded for passing Phase 1 of the 15K Funded Challenge with zero risk breaches.",
    },
  ],

  strengths: [
    { name: "Analytical Thinking", icon: "BrainCircuit", desc: "Deconstructing complex datasets and market structures into actionable strategy." },
    { name: "Disciplined Execution", icon: "Target", desc: "Rigid adherence to defined rules and risk protocols without emotional compromise." },
    { name: "Risk Awareness", icon: "ShieldCheck", desc: "Capital preservation mindset prioritizing drawdown control before profit targeting." },
    { name: "Problem Solving", icon: "Wrench", desc: "Methodical debugging and software architecture design under constraints." },
    { name: "Quick Learning", icon: "Zap", desc: "Rapid absorption of new frameworks, trading models, and software tools." },
    { name: "Adaptability", icon: "RefreshCw", desc: "Quick adjustment to shifting market volatility and evolving tech requirements." },
    { name: "Team Collaboration", icon: "Users", desc: "Effective communication and peer collaboration in engineering projects." },
  ],

  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
  ],
};
