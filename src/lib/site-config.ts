export const SITE_CONFIG = {
  name: "Nikhil Shukla",
  title: "Advocate Nikhil Shukla — Criminal & Matrimonial Law",
  description: "Advocate Nikhil Shukla represents individuals in criminal defense, bail applications, cybercrime, divorce, maintenance, domestic violence, and child custody matters before the Supreme Court, Court, and District Courts of Delhi.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nikhilshuklaadvocate.in",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 XXXXX XXXXX",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+91XXXXXXXXXX",
  email: process.env.NEXT_PUBLIC_EMAIL || "office@nikhilshuklaadvocate.in",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Delhi, India",
  officeHours: process.env.NEXT_PUBLIC_OFFICE_HOURS || "Mon - Sat, 10:00 AM - 6:00 PM",
  ogImage: "/og-image.jpg",
};

export interface PracticeAreaData {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  displayOrder: number;
}

export const PRACTICE_AREAS_DATA: PracticeAreaData[] = [
  { slug: "criminal-defense", title: "Criminal Defense", shortDescription: "Dedicated legal representation in criminal matters, from FIR registration through trial and appeal.", icon: "Shield", displayOrder: 1 },
  { slug: "bail-applications", title: "Bail Applications", shortDescription: "Timely regular bail, anticipatory bail, and interim bail applications before appropriate courts.", icon: "Scale", displayOrder: 2 },
  { slug: "cybercrime-cyber-fraud", title: "Cybercrime & Cyber Fraud", shortDescription: "Legal defense in cybercrime, IT Act matters, online fraud, hacking, and digital fraud cases.", icon: "Monitor", displayOrder: 3 },
  { slug: "matrimonial-family-matters", title: "Matrimonial & Family Matters", shortDescription: "Comprehensive legal support across all matrimonial and family law issues.", icon: "Heart", displayOrder: 4 },
  { slug: "divorce", title: "Divorce", shortDescription: "Professional guidance and representation in divorce proceedings under applicable personal laws.", icon: "FileText", displayOrder: 5 },
  { slug: "maintenance", title: "Maintenance", shortDescription: "Legal assistance in maintenance claims under Section 125 CrPC and relevant provisions of personal laws.", icon: "IndianRupee", displayOrder: 6 },
  { slug: "domestic-violence", title: "Domestic Violence", shortDescription: "Legal protection and remedies under the Protection of Women from Domestic Violence Act, 2005.", icon: "Home", displayOrder: 7 },
  { slug: "child-custody", title: "Child Custody", shortDescription: "Representation in custody, guardianship, and visitation disputes with the welfare of the child paramount.", icon: "Users", displayOrder: 8 },
  { slug: "other-legal-assistance", title: "Other Legal Assistance", shortDescription: "General legal advice and representation in various other matters before competent courts.", icon: "Gavel", displayOrder: 9 },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];