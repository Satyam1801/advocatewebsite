import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-this-immediately";
  const hashedPw = await hash(adminPassword, 12);

  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, password: hashedPw, name: "Admin", role: "ADMIN" },
  });
  console.log("Admin user:", admin.email);

  // Practice areas
  const practiceAreas = [
    { title: "Criminal Defense", slug: "criminal-defense", shortDescription: "Dedicated legal representation in criminal matters before courts.", description: "Comprehensive criminal defense services including bail applications, trial representation, and legal strategy tailored to each client's matter.", displayOrder: 1 },
    { title: "Bail Applications", slug: "bail-applications", shortDescription: "Expert assistance in regular bail, anticipatory bail, and interim bail.", description: "Timely and well-prepared bail applications before the appropriate courts, with focused arguments based on the specific facts of each matter.", displayOrder: 2 },
    { title: "Cybercrime & Cyber Fraud", slug: "cybercrime-cyber-fraud", shortDescription: "Legal defense and advisory in cybercrime, IT Act matters, and digital fraud.", description: "Legal representation in cybercrime cases including online fraud, hacking, identity theft, and other IT Act matters before the competent courts.", displayOrder: 3 },
    { title: "Matrimonial & Family Matters", slug: "matrimonial-family-matters", shortDescription: "Comprehensive legal support for all matrimonial and family law issues.", description: "Complete legal assistance in matrimonial and family matters including divorce, maintenance, domestic violence, and child custody.", displayOrder: 4 },
    { title: "Divorce", slug: "divorce", shortDescription: "Guidance and representation in divorce proceedings under applicable personal laws.", description: "Legal representation in divorce proceedings under various personal laws, with a sensitive and professional approach.", displayOrder: 5 },
    { title: "Maintenance", slug: "maintenance", shortDescription: "Assistance in maintenance claims under various statutory provisions.", description: "Legal assistance in maintenance matters under relevant provisions of Indian law.", displayOrder: 6 },
    { title: "Domestic Violence", slug: "domestic-violence", shortDescription: "Legal protection and remedies under the Protection of Women from Domestic Violence Act.", description: "Assistance in domestic violence matters including protection orders, residence orders, and monetary relief under applicable law.", displayOrder: 7 },
    { title: "Child Custody", slug: "child-custody", shortDescription: "Representation in custody, guardianship, and visitation matters.", description: "Legal representation in child custody, guardianship, and visitation disputes, prioritising the welfare of the child.", displayOrder: 8 },
    { title: "Other Legal Assistance", slug: "other-legal-assistance", shortDescription: "General legal advice and representation in various other matters.", description: "General legal advice and representation in matters beyond the primary practice areas listed above.", displayOrder: 9 },
  ];

  for (const area of practiceAreas) {
    await prisma.practiceArea.upsert({
      where: { slug: area.slug },
      update: {},
      create: { ...area, isPublished: true },
    });
  }
  console.log("Practice areas seeded.");

  // Story categories
  const categories = [
    { name: "Criminal Law", slug: "criminal-law" },
    { name: "Bail & Arrest", slug: "bail-arrest" },
    { name: "Cybercrime", slug: "cybercrime" },
    { name: "Matrimonial Law", slug: "matrimonial-law" },
    { name: "Legal Awareness", slug: "legal-awareness" },
  ];

  for (const cat of categories) {
    await prisma.storyCategory.upsert({ where: { slug: cat.slug }, update: {}, create: cat });
  }
  console.log("Story categories seeded.");

  // Sample story (clearly marked as demo)
  const criminalCat = await prisma.storyCategory.findUnique({ where: { slug: "legal-awareness" } });
  await prisma.story.upsert({
    where: { slug: "understanding-bail-in-india" },
    update: {},
    create: {
      title: "Understanding Bail in India: A Legal Overview",
      slug: "understanding-bail-in-india",
      excerpt: "Bail is a fundamental concept in criminal procedure. This article provides a general overview of bail provisions under Indian law.",
      content: "<p>This is a <strong>sample article</strong> for demonstration purposes. Please replace this content with actual legal educational content.</p><p>Bail is the conditional release of an accused person awaiting trial or hearing. Indian law provides for several types of bail including regular bail, anticipatory bail, and interim bail.</p><p><strong>Note: This article is for general awareness only and does not constitute legal advice.</strong></p>",
      status: "PUBLISHED",
      publishedAt: new Date(),
      authorId: admin.id,
      categoryId: criminalCat?.id || null,
      seoTitle: "Understanding Bail in India — Legal Overview",
      seoDescription: "A general overview of bail provisions under Indian law for educational purposes.",
    },
  });
  console.log("Sample story seeded.");
  console.log("Seeding complete.");
}

main().catch(console.error).finally(() => prisma.$disconnect());