import { prisma } from "../../src/lib/prisma";

async function main() {
  // 1. Seed global features
  const featureData = [
    {
      title: "Gratis Instalasi",
      description: "Tanpa biaya tambahan pemasangan",
    },
    {
      title: "Internet cepat hingga 50Mbps",
      description: "Kecepatan maksimal untuk streaming dan gaming",
    },
    {
      title: "Bisa untuk 5 perangkat",
      description: "Cocok untuk keluarga kecil",
    },
    {
      title: "Kecepatan hingga 20Mbps",
      description: "Cukup untuk browsing dan sosmed",
    },
    {
      title: "Unlimited quota",
      description: "Tanpa batasan pemakaian bulanan",
    },
    { title: "Support 24 jam", description: "Bantuan teknis kapan saja" },
    {
      title: "Kecepatan hingga 40Mbps",
      description: "Streaming dan video call lancar",
    },
    {
      title: "Prioritas layanan",
      description: "Penanganan gangguan lebih cepat",
    },
    { title: "Internet 30Mbps", description: "Cukup untuk keluarga kecil" },
    {
      title: "Telepon rumah 100 menit",
      description: "Bebas bicara ke semua operator",
    },
    { title: "Internet 60Mbps", description: "Streaming dan gaming lancar" },
    {
      title: "Telepon rumah unlimited",
      description: "Bebas bicara tanpa batas",
    },
    { title: "Internet 40Mbps", description: "Streaming HD lancar" },
    {
      title: "50+ Channel TV",
      description: "Termasuk channel lokal & internasional",
    },
    {
      title: "Internet 80Mbps",
      description: "Kecepatan tinggi untuk keluarga besar",
    },
    { title: "100+ Channel TV", description: "Termasuk channel premium" },
    { title: "Channel olahraga premium", description: "Liga top dunia" },
    { title: "Internet 50Mbps", description: "Streaming dan gaming lancar" },
    { title: "150+ Channel TV", description: "Channel terlengkap" },
    { title: "Support prioritas", description: "Layanan pelanggan prioritas" },
    { title: "Plug & Play", description: "Langsung pakai tanpa instalasi" },
    { title: "Bisa dibawa kemana saja", description: "Praktis untuk traveler" },
    {
      title: "Kuota 100GB/bulan",
      description: "Cukup untuk browsing & streaming ringan",
    },
    { title: "Kuota 200GB/bulan", description: "Lebih leluasa internetan" },
    { title: "Bonus modem", description: "Modem gratis saat aktivasi" },
  ];

  // Clean up existing data
  await prisma.$transaction([
    prisma.feature.deleteMany(),
    prisma.priceCard.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  // Create all features
  await prisma.feature.createMany({ data: featureData });

  // Fetch all features for easy reference
  const allFeatures = await prisma.feature.findMany();

  // Helper to get feature IDs by title
  const getFeatureIds = (titles: string[]) =>
    allFeatures
      .filter((f) => titles.includes(f.title))
      .map((f) => ({ id: f.id }));

  // 2. Seed categories and price cards with feature connections
  const categories = [
    {
      name: "Telkomsel One Dynamic",
      cards: [
        {
          plan: "Dynamic Plan",
          price: "Rp100.000",
          period: "/bulan",
          description:
            "Paket internet dinamis untuk keluarga. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet cepat hingga 50Mbps",
            "Bisa untuk 5 perangkat",
            "Gratis Instalasi",
          ],
        },
      ],
    },
    {
      name: "Kategori 1P",
      cards: [
        {
          plan: "1P Basic",
          price: "Rp80.000",
          period: "/bulan",
          description: "Paket internet saja. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: [
            "Kecepatan hingga 20Mbps",
            "Unlimited quota",
            "Support 24 jam",
          ],
        },
        {
          plan: "1P Premium",
          price: "Rp120.000",
          period: "/bulan",
          description: "Internet lebih cepat untuk kebutuhan keluarga.",
          buttonLabel: "Pilih Paket",
          features: [
            "Kecepatan hingga 40Mbps",
            "Unlimited quota",
            "Prioritas layanan",
          ],
        },
      ],
    },
    {
      name: "Kategori 2P Phone",
      cards: [
        {
          plan: "2P Phone Basic",
          price: "Rp110.000",
          period: "/bulan",
          description: "Internet + Telepon rumah. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet 30Mbps",
            "Telepon rumah 100 menit",
            "Gratis Instalasi",
          ],
        },
        {
          plan: "2P Phone Pro",
          price: "Rp150.000",
          period: "/bulan",
          description: "Internet lebih cepat + telepon unlimited.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet 60Mbps",
            "Telepon rumah unlimited",
            "Support 24 jam",
          ],
        },
      ],
    },
    {
      name: "Kategori 2P TV",
      cards: [
        {
          plan: "2P TV Basic",
          price: "Rp130.000",
          period: "/bulan",
          description: "Internet + TV kabel. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: ["Internet 40Mbps", "50+ Channel TV", "Gratis Instalasi"],
        },
        {
          plan: "2P TV Pro",
          price: "Rp170.000",
          period: "/bulan",
          description: "Internet cepat + TV premium.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet 80Mbps",
            "100+ Channel TV",
            "Channel olahraga premium",
          ],
        },
      ],
    },
    {
      name: "Kategori 3P",
      cards: [
        {
          plan: "3P Ultimate",
          price: "Rp200.000",
          period: "/bulan",
          description: "Internet + TV + Telepon. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet 50Mbps",
            "100+ Channel TV",
            "Telepon rumah unlimited",
          ],
        },
        {
          plan: "3P Max",
          price: "Rp250.000",
          period: "/bulan",
          description: "Paket lengkap untuk keluarga besar.",
          buttonLabel: "Pilih Paket",
          features: [
            "Internet 100Mbps",
            "150+ Channel TV",
            "Telepon rumah unlimited",
            "Support prioritas",
          ],
        },
      ],
    },
    {
      name: "EZnet Wireless",
      cards: [
        {
          plan: "EZnet Wireless Basic",
          price: "Rp90.000",
          period: "/bulan",
          description:
            "Internet wireless tanpa kabel. Lorem ipsum dolor sit amet.",
          buttonLabel: "Pilih Paket",
          features: [
            "Plug & Play",
            "Bisa dibawa kemana saja",
            "Kuota 100GB/bulan",
          ],
        },
        {
          plan: "EZnet Wireless Pro",
          price: "Rp130.000",
          period: "/bulan",
          description: "Wireless internet dengan kuota lebih besar.",
          buttonLabel: "Pilih Paket",
          features: [
            "Kuota 200GB/bulan",
            "Bisa dibawa kemana saja",
            "Bonus modem",
          ],
        },
      ],
    },
  ];

  // Create categories and price cards with feature connections
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        cards: {
          create: category.cards.map((card) => ({
            plan: card.plan,
            price: card.price,
            period: card.period,
            description: card.description,
            buttonLabel: card.buttonLabel,
            features: {
              connect: getFeatureIds(card.features),
            },
          })),
        },
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
