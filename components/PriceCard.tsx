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
    <Card className="bg-black border border-neutral-700 rounded-2xl shadow-lg w-full max-w-sm flex flex-col h-[650px]">
      <CardHeader>
        <CardTitle className="text-white text-2xl font-semibold">
          {plan}
        </CardTitle>
        <div className="flex items-end mt-4">
          <span className="text-5xl font-bold text-white">{price}</span>
          <span className="text-lg text-neutral-400 mb-1 ml-1">{period}</span>
        </div>
        <CardDescription className="text-neutral-300 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5 mt-2">
          {features.map((feature, idx) => (
            <li className="flex items-start gap-3" key={idx}>
              <CheckCircle2 className="text-green-400 mt-1" size={20} />
              <div>
                <span className="text-white font-medium">{feature.title}</span>
                <div className="text-neutral-400 text-sm">
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
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12">
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        <SinglePriceCard
          plan="Starter Plan"
          price="$19"
          period="/month"
          description="Complete Solution For Your Team Productivity"
          features={[
            {
              title: "Team collaboration tools",
              description:
                "Enable seamless collaboration with shared workspaces",
            },
            {
              title: "Advanced project tracking",
              description:
                "Monitor project progress with detailed analytics and reports",
            },
            {
              title: "Automated task management",
              description:
                "Streamline workflows with intelligent task automation",
            },
            {
              title: "Priority customer support",
              description:
                "Get expert assistance with priority support channels and quick response times.",
            },
          ]}
          buttonLabel="Subscribe"
          buttonGradient={true}
        />
        <SinglePriceCard
          plan="Enterprise Plan"
          price="$49"
          period="/month"
          description="Complete solution for your Enterprise Workflows"
          features={[
            {
              title: "Unlimited team members",
              description:
                "Scale without limits with unlimited user access and collaboration tools.",
            },
            {
              title: "Advanced analytics dashboard",
              description:
                "Get deep insights with comprehensive reporting tools",
            },
            {
              title: "Custom workflow automation",
              description:
                "Create tailored workflows to optimize team efficiency",
            },
            {
              title: "Dedicated success manager",
              description:
                "Receive personalized guidance from dedicated specialists",
            },
          ]}
          buttonLabel="Contact Us"
          buttonGradient={false}
        />
      </div>
    </div>
  );
}
