export interface CaseStudy {
  slug: string;
  categoryNumber: string;
  categoryTitle: string;
  brand: string;
  tagline: string;
  year: string;
  role: string;
  challengeParagraph: string;
  projectGoal: string;
  designDecision: string;
  accentColor?: string;
  heroImage: {
    jpg: string;
    webp: string;
    alt: string;
  };
  supportingImages: Array<{
    id: string;
    title: string;
    format: string;
    jpg: string;
    webp: string;
    alt: string;
    isRestricted?: boolean;
    authorship?: string;
  }>;
  stats: {
    deliverables: number;
    campaigns: number;
    timeline: string;
  };
}

export const AUTHORITATIVE_PROFILE = {
  name: "Kashish",
  fullName: "Kashish",
  roleLine: "( Graphic Designer — Digital, Brand & Motion )",
  introEyebrow: "Portfolio 2024–2026 · Agency Archive",
  introHeadline:
    "Creating visual communication across digital campaigns, social media, motion, print, and luxury real estate marketing.",
  aboutParagraphs: [
    "I'm a Graphic Designer with agency experience across digital campaigns, social media, motion graphics, direct-response marketing, and large-format print.",
    "During my time at Propacity from June to September 2024, I worked across creative campaigns for more than 14 commercial and residential real estate brands, producing work across social posts, mobile EDMs, panoramic grids, motion graphics, digital banners, and physical marketing collateral.",
    "My work spans both high-volume digital communication and more considered campaign pieces, from luxury real estate marketing and celebrity-led brand campaigns to large-format print, corporate communication, and tactile stationery.",
  ],
  education: {
    institution: "Institute of Innovation in Technology and Management",
    degree: "Bachelor of Computer Applications (BCA)",
    batch: "2023–2026",
    graduation: "2026",
  },
  experience: {
    company: "Propacity Proptech Pvt. Ltd.",
    role: "Graphic Designer Intern",
    duration: "4 months",
    dates: "June–September 2024",
  },
  tools: [
    { name: "Adobe Photoshop", category: "Image Editing & Composting", level: "Expert" },
    { name: "Adobe Illustrator", category: "Vector Graphics & Branding", level: "Expert" },
    { name: "Adobe InDesign", category: "Editorial & Multi-Page Layout", level: "Proficient" },
    { name: "Adobe After Effects", category: "Motion Design & Kinetic Typography", level: "Proficient" },
    { name: "Canva", category: "Rapid Prototyping & Marketing Templates", level: "Proficient" },
  ],
  additionalToolsFlag: "Also proficient in Figma (Intermediate) and CorelDRAW for specialized interface prototyping and vector print workflows.",
  collaboratorsFactLine: "Worked alongside the Propacity creative and marketing team, June–September 2024",
  collaborators: [
    { name: "Shivam Patodia", role: "CEO", company: "Propacity" },
    { name: "Shrawni Sas", role: "Performance Manager", company: "Propacity" },
    { name: "Kaab Ansari", role: "Creative Lead & Social Media Manager", company: "Propacity" },
  ],
  contact: {
    email: "ksr2004it@gmail.com",
    linkedin: "https://www.linkedin.com/in/kashish-rajawat-48a344294",
    location: "New Delhi, India",
    availability: "Available for Graphic Design & Creative Direction roles",
  },
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  kreeva: {
    slug: "kreeva",
    categoryNumber: "01",
    categoryTitle: "Luxury & Bespoke",
    brand: "Kreeva",
    tagline: "Artisanal Luxury Narrative & Tactile Print Collateral",
    year: "2024",
    role: "Visual Identity, Editorial Typography, Tactile Stationery & EDMs",
    accentColor: "#8B1E2B",
    challengeParagraph:
      "Kreeva's work called for a more restrained and tactile luxury language — a multi-part Friendship Day narrative combined with corporate stationery and collateral, requiring the same visual character to work across vertical digital storytelling and physical print. The challenge was communicating an idea around enduring connection through minimal composition, rich texture, editorial typography, and carefully constructed physical details.",
    projectGoal:
      "Establish an understated, tactile luxury language for an artisanal brand narrative spanning digital social storytelling and physical stationery.",
    designDecision:
      "Utilized textured crimson paper surfaces, gold foil geometric rules, and classical editorial serif type. For physical envelopes and cards, engineered precise folding geometry and embossed brand marks.",
    heroImage: {
      jpg: "/work/kreeva/kreeva_hero_01.jpg",
      webp: "/work/kreeva/kreeva_hero_01.webp",
      alt: "Kreeva Luxury Narrative Cover with Crimson and Gold Editorial Framing",
    },
    supportingImages: [
      {
        id: "kreeva_swaranaya_01",
        title: "Swaranaya Static EDM Suite",
        format: "EDM / Direct Response",
        jpg: "/work/kreeva/kreeva_swaranaya_01.jpg",
        webp: "/work/kreeva/kreeva_swaranaya_01.webp",
        alt: "Kreeva Swaranaya Static EDM designed by Kashish",
        authorship: "Designed by Kashish",
      },
      {
        id: "kreeva_envelope_01",
        title: "Corporate Stationery Envelope Mockup",
        format: "Print & Stationery",
        jpg: "/work/kreeva/kreeva_envelope_01.jpg",
        webp: "/work/kreeva/kreeva_envelope_01.webp",
        alt: "Kreeva Corporate Stationery Envelope with Gold Foil Emboss",
        authorship: "Designed by Kashish",
      },
      {
        id: "kreeva_card_01",
        title: "Tactile Invitation Card (Front)",
        format: "Print & Stationery",
        jpg: "/work/kreeva/kreeva_card_01.jpg",
        webp: "/work/kreeva/kreeva_card_01.webp",
        alt: "Kreeva Foil-Stamped Invitation Card Front Design",
      },
      {
        id: "kreeva_card_02",
        title: "Tactile Invitation Card (Reverse)",
        format: "Print & Stationery",
        jpg: "/work/kreeva/kreeva_card_02.jpg",
        webp: "/work/kreeva/kreeva_card_02.webp",
        alt: "Kreeva Invitation Card Reverse Typography Layout",
      },
      {
        id: "kreeva_support_01",
        title: "Friendship Day Narrative — Chapter 3",
        format: "Editorial Social Story",
        jpg: "/work/kreeva/kreeva_support_01.jpg",
        webp: "/work/kreeva/kreeva_support_01.webp",
        alt: "Kreeva Friendship Day Editorial Social Story",
      },
      {
        id: "kreeva_support_02",
        title: "Friendship Day Narrative — Chapter 4",
        format: "Editorial Social Story",
        jpg: "/work/kreeva/kreeva_support_02.jpg",
        webp: "/work/kreeva/kreeva_support_02.webp",
        alt: "Kreeva Friendship Day Story Finale Layout",
      },
    ],
    stats: {
      deliverables: 184,
      campaigns: 4,
      timeline: "July–August 2024",
    },
  },

  trevoc: {
    slug: "trevoc",
    categoryNumber: "02",
    categoryTitle: "Ultra-Luxury Real Estate",
    brand: "Trevoc",
    tagline: "Sector-56 Gurugram · OTT-Inspired Teaser Velocity & Panoramic Grids",
    year: "2024",
    role: "Campaign Systems, SVS Grids, EDMs & Teaser Creative Direction",
    challengeParagraph:
      "Trevoc's campaign needed to communicate an ultra-luxury real estate proposition through a digital presence that felt more distinctive than conventional property advertising — spanning celebrity-led communication, digital headers, panoramic social grids, and an OTT-inspired teaser series. The challenge was maintaining one consistent luxury identity while adapting across very different digital formats and moments of communication.",
    projectGoal:
      "Differentiate Sector-56 Gurugram residence from standard builder ads by using streaming-platform entertainment cues and quiet architectural luxury.",
    designDecision:
      "Employed an 'Art of Stillness' motif with widescreen 2.4:1 ratio grids, rich monochrome transitions, high-contrast serif typography, and an OTT headline trope ('Brochures Are Retiring').",
    heroImage: {
      jpg: "/work/trevoc/trevoc_hero_01.jpg",
      webp: "/work/trevoc/trevoc_hero_01.webp",
      alt: "Trevoc Sector 56 Gurugram Art of Stillness Panoramic Luxury Grid",
    },
    supportingImages: [
      {
        id: "trevoc_support_01",
        title: "OTT Teaser: 'Brochures Are Retiring'",
        format: "Campaign Teaser",
        jpg: "/work/trevoc/trevoc_support_01.jpg",
        webp: "/work/trevoc/trevoc_support_01.webp",
        alt: "Trevoc OTT Teaser Brochures Are Retiring in Dark Architectural Framing",
      },
      {
        id: "trevoc_support_02",
        title: "OTT Teaser: 'Walkthroughs Are Retiring'",
        format: "Campaign Teaser",
        jpg: "/work/trevoc/trevoc_support_02.jpg",
        webp: "/work/trevoc/trevoc_support_02.webp",
        alt: "Trevoc OTT Teaser Walkthroughs Are Retiring Widescreen Layout",
      },
      {
        id: "trevoc_support_03",
        title: "OTT Teaser: 'Print Ads Are Retiring'",
        format: "Campaign Teaser",
        jpg: "/work/trevoc/trevoc_support_03.jpg",
        webp: "/work/trevoc/trevoc_support_03.webp",
        alt: "Trevoc OTT Teaser Print Ads Are Retiring",
      },
      {
        id: "trevoc_celebrity_banner",
        title: "Celebrity Brand Ambassador Campaign",
        format: "Digital Banner / High-Stakes Commercial",
        jpg: "/work/trevoc/trevoc_celebrity_banner.jpg",
        webp: "/work/trevoc/trevoc_celebrity_banner.webp",
        alt: "Trevoc Celebrity Brand Campaign (Private — permission pending)",
        isRestricted: true,
      },
      {
        id: "trevoc_hr_01",
        title: "Internal Corporate & Team Communication",
        format: "Corporate / HR",
        jpg: "/work/trevoc/trevoc_hr_01.jpg",
        webp: "/work/trevoc/trevoc_hr_01.webp",
        alt: "Trevoc Internal HR Communication (Private — permission pending)",
        isRestricted: true,
      },
    ],
    stats: {
      deliverables: 590,
      campaigns: 8,
      timeline: "June–September 2024",
    },
  },

  "indus-valley": {
    slug: "indus-valley",
    categoryNumber: "03",
    categoryTitle: "Real Estate Campaigns",
    brand: "Indus Valley",
    tagline: "Himalayan Hill Cottages & Infrastructure Investment Communications",
    year: "2024",
    role: "Market-News EDMs, Investment Infographics & Multi-Tile Grids",
    challengeParagraph:
      "Indus Valley's campaign required a consistent visual system for communicating its Himalayan real estate offering across frequent investment-focused marketing communications — market-news and investment EDMs, motion graphics, Himalayan villa and cottage campaigns, and Instagram grid covers. The challenge was keeping a recognisable visual language across a high volume of mobile-first and social formats while communicating property and investment information clearly.",
    projectGoal:
      "Communicate dual propositions: the aspirational escape of Himalayan cottage living and the institutional investment fundamentals of regional growth corridors.",
    designDecision:
      "Created an editorial news format for WhatsApp and email with route maps, infrastructure bulletins, and clear statistical callouts balanced against serene mountain photography.",
    heroImage: {
      jpg: "/work/indus-valley/indus-valley_hero_01.jpg",
      webp: "/work/indus-valley/indus-valley_hero_01.webp",
      alt: "Indus Valley Himalayan Hill Cottages Panoramic Grid",
    },
    supportingImages: [
      {
        id: "indus_support_01",
        title: "Dholera SIR Infrastructure Intelligence EDM",
        format: "EDM / Direct Response",
        jpg: "/work/indus-valley/indus-valley_support_01.jpg",
        webp: "/work/indus-valley/indus-valley_support_01.webp",
        alt: "Indus Valley Dholera SIR Investment EDM with Economic Charts",
      },
      {
        id: "indus_support_02",
        title: "Expressway & High-Speed Transit Route Map",
        format: "Infographic / Market News",
        jpg: "/work/indus-valley/indus-valley_support_02.jpg",
        webp: "/work/indus-valley/indus-valley_support_02.webp",
        alt: "Indus Valley Regional Infrastructure Route Map",
      },
      {
        id: "indus_support_03",
        title: "Himalayan Villa Lifestyle Showcase",
        format: "Static Social Tile",
        jpg: "/work/indus-valley/indus-valley_support_03.jpg",
        webp: "/work/indus-valley/indus-valley_support_03.webp",
        alt: "Indus Valley Himalayan Architectural Lifestyle",
      },
    ],
    stats: {
      deliverables: 303,
      campaigns: 6,
      timeline: "June–August 2024",
    },
  },

  "elevate-vanya": {
    slug: "elevate-vanya",
    categoryNumber: "03",
    categoryTitle: "Real Estate Campaigns",
    brand: "Elevate Vanya",
    tagline: "Omnichannel Launch · Highway Hoardings & On-Site Roll-up Standees",
    year: "2024",
    role: "Large-Format Print Collateral, Vector Masters, Social Systems",
    challengeParagraph:
      "Elevate Vanya required the same campaign to work across physical and digital marketing environments — a 24×12-foot highway hoarding, on-site roll-up standees, social content, blog graphics, and motion reels. The challenge was translating the residential campaign into formats with very different viewing conditions, from large-scale outdoor communication to detailed mobile content.",
    projectGoal:
      "Ensure seamless campaign continuity between high-speed highway billboard viewing, physical on-site sales exhibitions, and handheld mobile feeds.",
    designDecision:
      "Engineered vector print assets at full production scale (402 MB vector standee master) with high-contrast hierarchical typography that remains legible at both 50 meters and 50 centimeters.",
    heroImage: {
      jpg: "/work/elevate-vanya/elevate-vanya_hero_01.jpg",
      webp: "/work/elevate-vanya/elevate-vanya_hero_01.webp",
      alt: "Elevate Vanya On-Site Roll-Up Standee Master by Kashish",
    },
    supportingImages: [
      {
        id: "elevate_standee_02",
        title: "2:1 Exhibition Roll-up Standee S-2",
        format: "Print / Exhibition Collateral",
        jpg: "/work/elevate-vanya/elevate-vanya_standee_02.jpg",
        webp: "/work/elevate-vanya/elevate-vanya_standee_02.webp",
        alt: "Elevate Vanya 2:1 Ratio Exhibition Standee",
        authorship: "Designed by Kashish",
      },
      {
        id: "elevate_support_02",
        title: "Golden Hour Architecture & Greenery",
        format: "Multi-Tile Social Grid",
        jpg: "/work/elevate-vanya/elevate-vanya_support_02.jpg",
        webp: "/work/elevate-vanya/elevate-vanya_support_02.webp",
        alt: "Elevate Vanya Golden Hour Architectural Rendering",
      },
      {
        id: "elevate_blog_01",
        title: "Editorial Blog & Thought Leadership Banner",
        format: "Digital Editorial",
        jpg: "/work/elevate-vanya/elevate-vanya_blog_01.jpg",
        webp: "/work/elevate-vanya/elevate-vanya_blog_01.webp",
        alt: "Elevate Vanya Editorial Blog Banner",
      },
    ],
    stats: {
      deliverables: 142,
      campaigns: 4,
      timeline: "July–September 2024",
    },
  },

  soul: {
    slug: "soul",
    categoryNumber: "03",
    categoryTitle: "Real Estate Campaigns",
    brand: "Soul / Vankriti",
    tagline: "Biophilic Forest Living & Channel Partner B2B Acquisition",
    year: "2024",
    role: "12K Panoramic Grid, Direct Nurture EDMs, CP Acquisition",
    challengeParagraph:
      "Soul/Vankriti's campaign required an immersive biophilic visual identity for an eco-luxury forest living development — spanning a 12K panoramic multi-tile Instagram grid, seven direct client nurture EDMs, channel partner acquisition collateral, and motion walkthrough reels. The challenge was translating the tranquil, natural atmosphere of the forest setting into mobile-first formats and high-volume direct-response communications while maintaining refined editorial restraint.",
    projectGoal:
      "Engage both institutional channel partner brokers and high-net-worth nature enthusiasts through botanical tranquility and clear commission structures.",
    designDecision:
      "Built a seamless 12,960×5,400 panoramic Instagram grid as the visual centerpiece, complemented by structured WhatsApp EDMs using deep forest greens, subtle champagne rules, and video walkthroughs.",
    heroImage: {
      jpg: "/work/soul/soul_hero_01.jpg",
      webp: "/work/soul/soul_hero_01.webp",
      alt: "Soul / Vankriti 12K Panoramic Eco-Luxury Forest Living Grid",
    },
    supportingImages: [
      {
        id: "soul_edm_01",
        title: "August Nurture EDM 01 — Forest Escape",
        format: "EDM / Direct Response",
        jpg: "/work/soul/soul_edm_01.jpg",
        webp: "/work/soul/soul_edm_01.webp",
        alt: "Soul Vankriti August Client Nurture EDM 01",
      },
      {
        id: "soul_cp_01",
        title: "Channel Partner B2B Acquisition Creative",
        format: "B2B Marketing Collateral",
        jpg: "/work/soul/soul_cp_01.jpg",
        webp: "/work/soul/soul_cp_01.webp",
        alt: "Soul Channel Partner B2B Network Growth Creative",
      },
      {
        id: "soul_festive_01",
        title: "Cultural & Topical Brand Identity",
        format: "Festive Social Post",
        jpg: "/work/soul/soul_festive_01.jpg",
        webp: "/work/soul/soul_festive_01.webp",
        alt: "Soul Vankriti Cultural Celebration Graphic",
      },
      {
        id: "soul_grid_02",
        title: "Botanical Canopy & Architecture Grid",
        format: "Multi-Tile Social Grid",
        jpg: "/work/soul/soul_grid_02.jpg",
        webp: "/work/soul/soul_grid_02.webp",
        alt: "Soul Canopy Architectural Grid Detail",
      },
    ],
    stats: {
      deliverables: 275,
      campaigns: 4,
      timeline: "July–August 2024",
    },
  },
};

export const DISCIPLINES = [
  {
    name: "SOCIAL",
    count: "694",
    description: "Single feeds, multi-tile carousels, 4:5 compositions, and topical brand campaigns.",
    image: "/work/trevoc/trevoc_hero_01.webp",
  },
  {
    name: "EDM",
    count: "674",
    description: "Direct-response mobile email and WhatsApp marketing sequences for high-net-worth investors.",
    image: "/work/kreeva/kreeva_swaranaya_01.webp",
  },
  {
    name: "MOTION",
    count: "389",
    description: "Reels, architectural walkthrough keyframes, kinetic typography, and animated teasers.",
    image: "/work/soul/soul_grid_02.webp",
  },
  {
    name: "PRINT",
    count: "79",
    description: "24×12 ft highway hoardings, on-site exhibition roll-up standees, and foil-stamped stationery.",
    image: "/work/elevate-vanya/elevate-vanya_hero_01.webp",
  },
  {
    name: "BRAND",
    count: "15",
    description: "Identity frameworks, editorial type systems, luxury collateral, and style guides.",
    image: "/work/kreeva/kreeva_envelope_01.webp",
  },
  {
    name: "DIGITAL",
    count: "46",
    description: "Multi-device web banners, digital headers, and landing page visual systems.",
    image: "/work/trevoc/trevoc_support_01.webp",
  },
];
