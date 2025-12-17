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

type ApiFeature = {
  id: number;
  title: string;
  description?: string;
};

type ApiPriceCard = {
  id: number;
  plan: string;
  price: string;
  period: string;
  description: string;
  features: ApiFeature[];
  buttonLabel: string;
};

type ApiCategory = {
  id: number;
  name: string;
  cards: ApiPriceCard[];
};

export default function PriceCard() {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleContactUs = () => {
    window.open("https://wa.me/6283899944366", "_blank");
  };

  React.useEffect(() => {
    fetch("/api/price-cards")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setActiveCategory(data[0].name);
      })
      .finally(() => setLoading(false));
  }, []);

  const activeCards =
    categories.find((cat) => cat.name === activeCategory)?.cards ?? [];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12">
      {/* Kategori Tabs */}
      <div className="flex gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-8 py-4 rounded-lg border-2 font-semibold text-base transition-all ${
              activeCategory === cat.name
                ? "bg-[#e60011] text-white border-[#e60011] shadow-lg"
                : "bg-[#fff6f7] text-[#e60011] border-[#e60011] hover:bg-[#ffe6ea]"
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {/* Card sesuai kategori */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {loading ? (
          <div>Loading...</div>
        ) : activeCards.length === 0 ? (
          <div>Tidak ada paket pada kategori ini.</div>
        ) : (
          activeCards.map((card) => (
            <SinglePriceCard
              key={card.id}
              plan={card.plan}
              price={card.price}
              period={card.period}
              description={card.description}
              features={card.features.map((f) => ({
                title: f.title,
                description: f.description,
              }))}
              buttonLabel={card.buttonLabel}
              onClick={handleContactUs}
            />
          ))
        )}
      </div>
    </div>
  );
}
