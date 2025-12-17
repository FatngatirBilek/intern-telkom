"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type Feature = {
  title: string;
  description?: string;
};

type PriceCardProps = {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  buttonLabel: string;
  buttonGradient?: boolean;
  onClick?: () => void;
};

function SinglePriceCard({
  plan,
  price,
  period,
  description,
  features,
  buttonLabel,
  onClick,
}: PriceCardProps) {
  return (
    <Card className="bg-white border border-neutral-200 rounded-2xl shadow-md w-full max-w-sm flex flex-col h-auto px-6 py-8">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 mb-1 text-left">
          {plan}
        </CardTitle>
        <div className="flex items-end gap-1 text-left">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-base text-gray-500">{period}</span>
        </div>
        {description && (
          <CardDescription className="text-gray-500 mt-2 text-left">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <div className="text-sm font-semibold text-gray-700 mb-2 mt-4">
          Included:
        </div>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li className="flex items-start gap-2 text-gray-700" key={idx}>
              <CheckCircle2 className="text-gray-400 mt-0.5" size={18} />
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-0 mt-6">
        <button
          className="w-full py-2 rounded-full font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          onClick={onClick}
        >
          {buttonLabel}
        </button>
      </CardFooter>
    </Card>
  );
}

const categories = [
  "Telkomsel One Dynamic",
  "Kategori 1P",
  "Kategori 2P Phone",
  "Kategori 2P TV",
  "Kategori 3P",
  "EZnet Wireless",
];

const cardsByCategory: Record<string, PriceCardProps[]> = {
  "Telkomsel One Dynamic": [
    {
      plan: "Dynamic Plan",
      price: "Rp100.000",
      period: "/bulan",
      description:
        "Paket internet dinamis untuk keluarga. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Internet cepat hingga 50Mbps" },
        { title: "Bisa untuk 5 perangkat" },
        { title: "Gratis instalasi" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
  "Kategori 1P": [
    {
      plan: "1P Basic",
      price: "Rp80.000",
      period: "/bulan",
      description: "Paket internet saja. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Kecepatan hingga 20Mbps" },
        { title: "Unlimited quota" },
        { title: "Support 24 jam" },
      ],
      buttonLabel: "Pilih Paket",
    },
    {
      plan: "1P Premium",
      price: "Rp120.000",
      period: "/bulan",
      description: "Internet lebih cepat untuk kebutuhan keluarga.",
      features: [
        { title: "Kecepatan hingga 40Mbps" },
        { title: "Unlimited quota" },
        { title: "Prioritas layanan" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
  "Kategori 2P Phone": [
    {
      plan: "2P Phone Basic",
      price: "Rp110.000",
      period: "/bulan",
      description: "Internet + Telepon rumah. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Internet 30Mbps" },
        { title: "Telepon rumah 100 menit" },
        { title: "Gratis instalasi" },
      ],
      buttonLabel: "Pilih Paket",
    },
    {
      plan: "2P Phone Pro",
      price: "Rp150.000",
      period: "/bulan",
      description: "Internet lebih cepat + telepon unlimited.",
      features: [
        { title: "Internet 60Mbps" },
        { title: "Telepon rumah unlimited" },
        { title: "Support 24 jam" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
  "Kategori 2P TV": [
    {
      plan: "2P TV Basic",
      price: "Rp130.000",
      period: "/bulan",
      description: "Internet + TV kabel. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Internet 40Mbps" },
        { title: "50+ Channel TV" },
        { title: "Gratis instalasi" },
      ],
      buttonLabel: "Pilih Paket",
    },
    {
      plan: "2P TV Pro",
      price: "Rp170.000",
      period: "/bulan",
      description: "Internet cepat + TV premium.",
      features: [
        { title: "Internet 80Mbps" },
        { title: "100+ Channel TV" },
        { title: "Channel olahraga premium" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
  "Kategori 3P": [
    {
      plan: "3P Ultimate",
      price: "Rp200.000",
      period: "/bulan",
      description: "Internet + TV + Telepon. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Internet 50Mbps" },
        { title: "100+ Channel TV" },
        { title: "Telepon rumah unlimited" },
      ],
      buttonLabel: "Pilih Paket",
    },
    {
      plan: "3P Max",
      price: "Rp250.000",
      period: "/bulan",
      description: "Paket lengkap untuk keluarga besar.",
      features: [
        { title: "Internet 100Mbps" },
        { title: "150+ Channel TV" },
        { title: "Telepon rumah unlimited" },
        { title: "Support prioritas" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
  "EZnet Wireless": [
    {
      plan: "EZnet Wireless Basic",
      price: "Rp90.000",
      period: "/bulan",
      description: "Internet wireless tanpa kabel. Lorem ipsum dolor sit amet.",
      features: [
        { title: "Plug & Play" },
        { title: "Bisa dibawa kemana saja" },
        { title: "Kuota 100GB/bulan" },
      ],
      buttonLabel: "Pilih Paket",
    },
    {
      plan: "EZnet Wireless Pro",
      price: "Rp130.000",
      period: "/bulan",
      description: "Wireless internet dengan kuota lebih besar.",
      features: [
        { title: "Kuota 200GB/bulan" },
        { title: "Bisa dibawa kemana saja" },
        { title: "Bonus modem" },
      ],
      buttonLabel: "Pilih Paket",
    },
  ],
};

export default function PriceCard() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const handleContactUs = () => {
    window.open("https://wa.me/6283899944366", "_blank");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12">
      {/* Kategori Tabs */}
      <div className="flex gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-8 py-4 rounded-lg border-2 font-semibold text-base transition-all ${
              activeCategory === cat
                ? "bg-[#e60011] text-white border-[#e60011] shadow-lg"
                : "bg-[#fff6f7] text-[#e60011] border-[#e60011] hover:bg-[#ffe6ea]"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Card sesuai kategori */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {cardsByCategory[activeCategory].map((card, idx) => (
          <SinglePriceCard key={idx} {...card} onClick={handleContactUs} />
        ))}
      </div>
    </div>
  );
}
