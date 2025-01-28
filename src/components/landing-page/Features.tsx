import { cn } from "@/lib/utils";
import {
  Cloud,
  DollarSign,
  HelpCircle,
  MoveUpRight,
  Store,
  Terminal,
} from "lucide-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Tailored for Developers",
      description:
        "Empowering engineers, developers, and innovators to bring their ideas to life seamlessly.",
      icon: <Terminal className="size-5 inline-flex mr-3" />,
    },
    {
      title: "Effortless Usability",
      description:
        "Start building, sharing, and updating forms effortlessly with a user-friendly interface.",
      icon: <MoveUpRight className="size-5 inline-flex mr-3" />,
    },
    {
      title: "Unmatched Pricing",
      description:
        "Enjoy all features completely free, making it accessible for everyone.",
      icon: <DollarSign className="size-5 inline-flex mr-3" />,
    },
    {
      title: "Cloud-Powered Flexibility",
      description:
        "Harness the power of the cloud to store and share forms securely and effortlessly.",
      icon: <Cloud className="size-5 inline-flex mr-3" />,
    },
    {
      title: "Unlimited Storage",
      description:
        "Store forms in any quantity—from a few to tens of thousands—at no cost to you.",
      icon: <Store className="size-5 inline-flex mr-3" />,
    },
    {
      title: "Round-the-Clock Support",
      description:
        "Our team is here for you 24/7 to ensure an exceptional experience, anytime you need help.",
      icon: <HelpCircle className="size-5 inline-flex mr-3" />,
    },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto ">
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        "lg:border-l border-neutral-800",
        "lg:border-b border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t  from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-400"></div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full  bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        {icon}
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-lg text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
