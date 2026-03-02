// data/resume.ts

export const resume = {
  basics: {
    name: "Alane Feutseu Kenmogne",
    headline: "Marketing Student | Brand & Digital Strategy | Interactive Marketer",
    location: "Toronto, ON",
    // Tip: for a public website, email + LinkedIn are usually enough.
    email: "feutseualane286@icloud.com",
    linkedinUrl: "https://linkedin.com/in/alane-feutseu-kenmogne-2198312b3",
    // phone: "647-679-4464", // uncomment if you want it public
    resumePdfUrl: "/files/Alane-Resume.pdf", // TODO: add your PDF to /public/files/
  },

  summary:
    "Bilingual (French/English) Business Administration – Marketing student with hands-on experience in retail sales, visual merchandising, inventory flow, and customer service (discount retail + banking). Strong in Excel/Google Sheets, presentations, and research—building skills in brand and digital strategy through real-world store audits and campaign projects.",

  skillGroups: [
    {
      title: "Brand & Digital",
      skills: [
        "Brand & campaign analysis (IMC)",
        "Digital strategy thinking (positioning, messaging, funnel basics)",
        "Presentation design & storytelling (PowerPoint)",
      ],
    },
    {
      title: "Research & Analytics",
      skills: [
        "Store-check research (primary observation + evidence capture)",
        "Excel / Google Sheets (pivot tables, formulas, charts)",
        "Data accuracy, reporting support, insight synthesis",
      ],
    },
    {
      title: "Retail Execution",
      skills: [
        "Visual merchandising / floor sets / planogram execution",
        "Inventory flow, replenishment & backroom organization",
        "POS transactions, returns & exchanges; recovery to standards",
      ],
    },
    {
      title: "Customer Experience",
      skills: [
        "Bilingual customer support (French/English)",
        "Issue resolution & cross-team coordination",
        "Clear communication and service mindset",
      ],
    },
  ],

  experience: [
    {
      company: "TJX Canada (Winners/Marshalls)",
      role: "Store Associate",
      location: "Toronto, ON",
      start: "2024-09",
      end: "Present",
      bullets: [
        "Executed monthly merchandising maps and department moves; relocated Dept. 72 accessories (caps, sunglasses/eyewear, small accessories) from Apparel to Toys while maintaining clean placement and shoppability.",
        "Partnered with coordinator and store management on a toy-section reset, including shelf-profile changes and implementing a new shelving index to improve capacity and visibility.",
        "Supported fixture/backroom changes (rack moves, hook transfers) to enable floor resets and keep warehouse flow organized and safe.",
        "Assisted customers with product selection and inquiries; processed sales, returns, and exchanges accurately; completed price checks and recovery to company standards.",
      ],
    },
    {
      company: "UBA Bank",
      role: "Customer Service Representative",
      location: "Yaoundé, Cameroon",
      start: "2023-01",
      end: "2024-01",
      bullets: [
        "Researched and verified customer information to resolve account issues accurately and efficiently.",
        "Guided customers through digital banking tools (ATMs and online platforms) to increase adoption and reduce in-branch friction.",
        "Collaborated across departments to ensure data accuracy and timely issue resolution; provided bilingual (French/English) support.",
      ],
    },
    {
      company: "Source Du Pays S.A.",
      role: "Sales Associate",
      location: "Cameroon",
      start: "2022-11",
      end: "2023-02",
      bullets: [
        "Processed customer transactions with precision and maintained accurate records.",
        "Tracked sales performance and marketplace trends to inform merchandising and selling approach.",
        "Demonstrated product features and communicated benefits tailored to customer needs.",
      ],
    },
    {
      company: "Dovv Distribution SARL",
      role: "Sales Associate",
      location: "Cameroon",
      start: "2022-01",
      end: "2022-10",
      bullets: [
        "Delivered high-touch customer service, handled cash transactions, and resolved concerns promptly.",
        "Proposed merchandising improvements adopted by management, contributing to a 40% sales increase.",
        "Used digital tools to manage inquiries and transactions while maintaining accuracy across multiple systems.",
      ],
    },
  ],

  education: [
    {
      school: "Seneca Polytechnic",
      program: "Advanced Diploma, Business Administration – Marketing",
      location: "North York (Toronto), ON",
      end: "Expected Dec 2026",
    },
    {
      school: "Yaoundé International Business School",
      program: "Undergraduate Diploma, Marketing, Trade and Sales",
      location: "Yaoundé, Cameroon",
      end: "Dec 2023",
    },
  ],

  certifications: [
    { title: "Digital Marketing Foundations" },
    { title: "Zendesk Customer Service Professional Certificate" },
  ],

  // Use this for your homepage "Featured" section
  featuredProjects: [
    "rexall-valentine-candles-storecheck-2026",
    "ikea-imc-extension",
    "balzacs-strategic-plan",
  ],

  projects: [
    // --- Retail Audit / Store-check (Featured case study) ---
    {
      id: "rexall-valentine-candles-storecheck-2026",
      type: "Retail Audit / Store-check",
      title: "Rexall Valentine Merchandising Review (Candles)",
      date: "2026-02-09",
      location: "3555 Don Mills Rd., North York (Willowdale), ON",
      tags: ["Store-check", "Merchandising", "Retail audit", "Valentine", "Category visibility"],
      oneLiner:
        "Audited Valentine merchandising and identified a visibility gap for candles; proposed an execution-ready secondary display concept to capture seasonal traffic.",
      outcomes: [
        "Mapped where the category lives and how it’s merchandised vs. Valentine impulse zones.",
        "Built a practical, in-store solution (4-sided stand) with placement, SKU mix, shelf logic, and KPIs.",
      ],
      tools: ["In-store observation", "Promo/signage review", "Merchandising logic", "KPI planning"],
      links: [
        { label: "Add photos (placeholder)", href: "/projects/rexall-valentine-candles-storecheck" },
      ],
      media: [
        // TODO: add photos to /public/images/ and update paths
        // { src: "/images/rexall-01.jpg", alt: "Rexall Valentine seasonal stand near checkout" },
      ],

      // Full case study (render on /projects/[slug])
      slug: "rexall-valentine-candles-storecheck",
      caseStudy: {
        goal:
          "Identify merchandising opportunities to better support Valentine’s “Gift Buyer / Buy-For-Other” behaviour for candles/candle sets.",
        snapshot: {
          banner: "Rexall",
          date: "2026-02-09",
          time: "1:02 pm",
          address: "3555 Don Mills Rd., Willowdale, ON, M2H 3N3",
          category: "Candles / candle sets",
        },
        observations: [
          {
            label: "Where candles live",
            detail:
              "Candles were merchandised as a face-out back-wall section near Aisle 7 (coffee/tea/grocery area) — organized, but easy to miss unless shoppers walk to the back.",
          },
          {
            label: "Assortment depth (example facings + pricing tiers)",
            detail:
              "Strong depth across brands and price tiers (e.g., Rugged & Refined ~14 facings; Candle-lite ~31; Essential Elements ~28) with visible entry-to-premium pricing.",
          },
          {
            label: "No giftable secondary display for candles",
            detail:
              "No candle end-caps/feature stands near the seasonal/checkout Valentine zone; candles were concentrated in the back-wall section only.",
          },
          {
            label: "Seasonal impulse mechanic exists at POS",
            detail:
              "Near checkout, Rexall used a 4-sided seasonal confection stand with clear promo pricing and end dates (a proven seasonal impulse format).",
          },
          {
            label: "Execution risk noted",
            detail:
              "Some promo signs appeared expired while still displayed—flagging the need for tighter signage removal/compliance checks.",
          },
        ],
        insight:
          "Rexall is driving Valentine impulse at/near POS with seasonal promo mechanics, but candles aren’t positioned as a Valentine gift add-on—despite being highly giftable and already supported by strong assortment in-store.",
        recommendation: {
          title: "Bring candles into the Valentine traffic zone (secondary display)",
          concept:
            "Create a temporary 4-sided candle/candle-set floor stand that mirrors the seasonal impulse format used at POS.",
          placement:
            "Front action alley/main path to checkout, positioned ~3–6 metres before the Valentine seasonal confection stand to make candles part of the Valentine zone.",
          buildSpecs: [
            'Footprint ~24"×24", height ~60", shelf depth ~8–10"',
            "4 sides, 16 shelves total (4 per side), shelf lips/guards",
            "Weighted base for safety + simple header card (one message)",
          ],
          merchandisingPlan: [
            "Eye level: gift sets (fast grab-and-go gifting)",
            "Middle: best sellers/popular scents (volume drivers)",
            "Bottom: entry singles (easy add-on)",
            "Target capacity: ~48–70 facings across entry/mid/premium price tiers",
          ],
        },
        successMetrics: [
          "Attach rate: % of Valentine baskets adding a candle/candle set",
          "Units/week for candles during the 2 weeks before Feb 14 vs. baseline",
          "Sell-through by price tier (entry vs. mid vs. premium)",
          "Execution checks: signage accuracy + promo end-date compliance",
        ],
        deliverables: [
          "Store-check observation notes",
          "Display concept + build specs + SKU mix + shelf logic",
          "KPI plan for post-implementation evaluation",
        ],
      },
    },

    // --- Academic / Group Projects (Cards) ---
    {
      id: "ikea-imc-extension",
      type: "Academic Project (Group)",
      title: "IKEA IMC Campaign Analysis + Extension",
      date: "2025",
      location: "Seneca Polytechnic",
      tags: ["IMC", "Campaign analysis", "Creative extension", "Digital banner", "Video/TV script"],
      oneLiner:
        "Evaluated an IKEA campaign and developed an extension concept with a TV/video ad script plus a digital banner mockup.",
      outcomes: ["Campaign evaluation → insight → extension concept + deliverables."],
      links: [{ label: "Add deck/video (placeholder)", href: "/projects/ikea-imc-extension" }],
      slug: "ikea-imc-extension",
    },
    {
      id: "balzacs-strategic-plan",
      type: "Academic Project (Group)",
      title: "Balzac’s Coffee Roasters Strategic Marketing Plan (Canada)",
      date: "2025",
      location: "Seneca Polytechnic",
      tags: ["Consumer analysis", "Competitor analysis", "Brand strategy", "2026 planning"],
      oneLiner:
        "Contributed to consumer/brand/competitor analysis and 2026 planning recommendations for Balzac’s Coffee Roasters.",
      links: [{ label: "Add plan/deck (placeholder)", href: "/projects/balzacs-strategic-plan" }],
      slug: "balzacs-strategic-plan",
    },
    {
      id: "canadian-tire-expansion",
      type: "Academic Project (Group)",
      title: "Canadian Tire International Expansion Assessment",
      date: "2025",
      location: "Seneca Polytechnic",
      tags: ["International marketing", "4Ps", "Cultural frameworks", "Market entry"],
      oneLiner:
        "Assessed international expansion opportunities and adapted the 4Ps using cultural frameworks (e.g., Hofstede).",
      links: [{ label: "Add report (placeholder)", href: "/projects/canadian-tire-expansion" }],
      slug: "canadian-tire-expansion",
    },
    {
      id: "kfc-fry-funeral-brief",
      type: "Academic Project (Group)",
      title: "KFC “Fry Funeral” Client Brief",
      date: "2025",
      location: "Seneca Polytechnic",
      tags: ["Client brief", "Insights", "Brand fit", "Recommendations"],
      oneLiner:
        "Developed a campaign brief and recommendations using consumer insights and brand fit for KFC’s “Fry Funeral” concept.",
      links: [{ label: "Add brief (placeholder)", href: "/projects/kfc-fry-funeral-brief" }],
      slug: "kfc-fry-funeral-brief",
    },
    {
      id: "clearly-canadian-packaging-study",
      type: "Academic Project (Group)",
      title: "Clearly Canadian Packaging / Brand Recognition Study",
      date: "2025",
      location: "Seneca Polytechnic",
      tags: ["Market research", "Packaging", "Brand recognition", "Research design"],
      oneLiner:
        "Contributed to a market research proposal focused on packaging/brand recognition, including research design and analysis plan.",
      links: [{ label: "Add proposal (placeholder)", href: "/projects/clearly-canadian-packaging-study" }],
      slug: "clearly-canadian-packaging-study",
    },
  ],
} as const;

export type ResumeData = typeof resume;
