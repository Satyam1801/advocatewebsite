export type NavItem = {
  label: string;
  href: string;
};

export type PracticeAreaCard = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon?: string | null;
  displayOrder: number;
};

export type StoryCard = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  publishedAt?: Date | null;
  category?: { name: string; slug: string } | null;
  tags?: { name: string }[];
};

export type SiteSettings = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  officeHours?: string;
  heroHeading?: string;
  heroParagraph?: string;
  aboutContent?: string;
};
