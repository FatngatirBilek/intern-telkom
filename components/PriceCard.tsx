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

export default function PriceCard() {
  const handleContactUs = () => {
    window.open("https://wa.me/6283899944366", "_blank");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        <SinglePriceCard
          plan="Free"
          price="$0"
          period=""
          description="Start with free"
          features={[
            { title: "AI-powered suggested matches" },
            {
              title: "Unlimited connection requests with other Kinhive members",
            },
            { title: "Unlimited 1:1 and group chat messages" },
            { title: "Join up to 5 teams" },
            { title: "Create up to 1 project" },
          ]}
          buttonLabel="Start with free"
          onClick={handleContactUs}
        />
        <SinglePriceCard
          plan="Member Pro"
          price="$24"
          period="/mo"
          description=""
          features={[
            { title: "AI-powered suggested matches" },
            {
              title: "Unlimited connection requests with other Kinhive members",
            },
            { title: "Unlimited 1:1 and group chat messages" },
            { title: "Join unlimited teams" },
            { title: "Boosted visibility to potential collaborators" },
            { title: "Members-only community chat" },
          ]}
          buttonLabel="Get started"
          onClick={handleContactUs}
        />
        <SinglePriceCard
          plan="Founder Pro"
          price="$48"
          period="/project /mo"
          description=""
          features={[
            { title: "AI-powered suggested matches" },
            {
              title: "Unlimited connection requests with other Kinhive members",
            },
            { title: "Unlimited 1:1 and group chat messages" },
            { title: "Invite unlimited cofounders to your workspace" },
            { title: "Create unlimited projects" },
            { title: "Boosted visibility to potential collaborators" },
            {
              title:
                "Template library with documents like NDAs, equity agreements, offer letters, and more",
            },
            { title: "In-app private live video chat breakout rooms" },
            {
              title:
                "Enable additional server-side encryption for secure messaging",
            },
            { title: "Founders-only community chat" },
          ]}
          buttonLabel="Get started"
          onClick={handleContactUs}
        />
      </div>
    </div>
  );
}
