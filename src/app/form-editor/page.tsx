import FFFooter from "@/components/form-factory-ui/FFFooter";
import FFormHeader from "@/components/form-factory-ui/FFHeader";
import FFMain from "@/components/form-factory-ui/FFMain";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <FFormHeader />
      <FFMain />
      <FFFooter />
    </div>
  );
}
