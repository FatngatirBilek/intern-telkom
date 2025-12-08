"use client";

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
  description: string;
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
  buttonGradient = false,
  onClick,
}: PriceCardProps) {
  return (
    <Card className="bg-white border border-neutral-200 rounded-2xl shadow-lg w-full max-w-sm flex flex-col h-[650px]">
      <CardHeader>
        <CardTitle className="text-text-primary text-2xl font-semibold">
          {plan}
        </CardTitle>
        <div className="flex items-end mt-4">
          <span className="text-2xl font-bold text-text-primary">{price}</span>
          <span className="text-lg text-neutral-500 mb-1 ml-1">{period}</span>
        </div>
        <CardDescription className="text-neutral-700 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5 mt-2">
          {features.map((feature, idx) => (
            <li className="flex items-start gap-3" key={idx}>
              <CheckCircle2 className="text-green-400 mt-1" size={20} />
              <div>
                <span className="text-text-primary font-medium">
                  {feature.title}
                </span>
                <div className="text-neutral-500 text-sm">
                  {feature.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex items-end">
        <button
          className={`w-full py-2 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2
            ${
              buttonGradient
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                : "bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white"
            }
          `}
          onClick={onClick}
        >
          {buttonLabel} <span aria-hidden>→</span>
        </button>
      </CardFooter>
    </Card>
  );
}

export default function PriceCard() {
  const handleContactUs = () => {
    window.open("https://wa.me/6283899944366", "_blank");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        <SinglePriceCard
          plan="Personal"
          price="IDR 1.200.000,00"
          period="/aplikasi"
          description="Prebuild aplikasi sesuai request yang sudah di integrasikan dengan database."
          features={[
            {
              title: "Pre build app",
              description: "Aplikasi yang sudah prebuild dan tinggal pakai.",
            },
            {
              title: "Database Integration",
              description:
                "Aplikasi terintegrasi dengan database dinamis (MongoDB, MySQL).",
            },
            {
              title: "Automated task management",
              description:
                "Aplikasi dilengkapi dengan pengerjaan tugas otomatis yang terstruksur.",
            },
            {
              title: "Priority customer support",
              description:
                "Dapatkan prioritas dan custumer support professional.",
            },
          ]}
          buttonLabel="Contact Us"
          buttonGradient={false}
          onClick={handleContactUs}
        />
        <SinglePriceCard
          plan="Perusahaan"
          price="IDR ??"
          period="/???"
          description="Solusi untuk kelas perusahaan yang membutuhkan customisasi lebih sesuai kebutuhan perusahaan."
          features={[
            {
              title: "Prebuild + Source Code",
              description:
                "Disediakan aplikasi prebuild dan source code sehingga memudahkan untuk di-maintain.",
            },
            {
              title: "Custom Stack",
              description:
                "Bebas meminta stack apa yang akan digunakan baik untuk front-end back-end ataupun database.",
            },
            {
              title: "Price based on request",
              description: "Dapatkan harga sesuai kebutuhan perusahaan.",
            },
          ]}
          buttonLabel="Contact Us"
          buttonGradient={true}
          onClick={handleContactUs}
        />
      </div>
    </div>
  );
}
