"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="my-4 rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden max-w-full">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials: Testimonial[] = [
  {
    review:
      "Form Factory is a game-changer! I built a complex form in just minutes. The drag-and-drop interface is so intuitive, even for non-techies like me.",
    fullName: "Emily Carter",
    organization: "Marketing Lead, BrightWay Agency",
  },
  {
    review:
      "We saved hours of development time with Form Factory. Sharing the forms online instantly is a huge plus for our fast-paced projects.",
    fullName: "James Mitchell",
    organization: "Project Manager, TechNova Inc.",
  },
  {
    review:
      "The simplicity is unmatched! Form Factory made it so easy to create forms that look professional and are super user-friendly.",
    fullName: "Sophia Nguyen",
    organization: "HR Specialist, GreenField Solutions",
  },
  {
    review:
      "I can’t believe how much time this saved our team. No more struggling with clunky form builders—Form Factory just works!",
    fullName: "Liam Thompson",
    organization: "Founder, StartupWorks",
  },
  {
    review:
      "Form Factory takes the headache out of form creation. The drag-and-drop feature is a lifesaver, and sharing the forms is seamless.",
    fullName: "Ava Patel",
    organization: "Event Coordinator, Harmony Events",
  },
  {
    review:
      "I’ve tried many form builders, but Form Factory is by far the best. It’s fast, easy to use, and packed with all the features I need.",
    fullName: "Ethan Kim",
    organization: "Operations Manager, Peak Performance",
  },
  {
    review:
      "From design to sharing, everything about Form Factory is effortless. It’s saved me hours, and my clients love the sleek forms!",
    fullName: "Isabella Garcia",
    organization: "Freelance Designer",
  },
];
