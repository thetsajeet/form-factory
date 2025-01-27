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
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <Terminal />,
    },
    {
      title: "Ease of use",
      description:
        "Super simple way to start creating, sharing and updating forms.",
      icon: <MoveUpRight />,
    },
    {
      title: "Pricing like no other",
      description: "Completely free to use.",
      icon: <DollarSign />,
    },
    {
      title: "Cloud Support",
      description:
        "With the power of cloud, now store and share forms seemlessly.",
      icon: <Cloud />,
    },
    {
      title: "Space",
      description:
        "Store 1, 10, 100, 1000, 10000... (you get it) amount of forms all for free!",
      icon: <Store />,
    },
    {
      title: "24/7 Customer Support",
      description: "We are available a 100% of the time.",
      icon: <HelpCircle />,
    },
  ];
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t  from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b  from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10  text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full  bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block  text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm  text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
