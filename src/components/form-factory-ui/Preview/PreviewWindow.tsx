import useStore from "@/lib/store";
import OutputForm from "./OutputForm";

export default function PreviewWindow() {
  const { formTitle, formElements, formDescription } = useStore();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full py-1 bg-slate-100">
        <div className="m-4 text-center text-sm py-1 rounded-md bg-slate-300">
          form-factory.com
        </div>
      </div>
      <div className="w-full my-2 flex justify-center text-lg font-medium px-3 flex-1 overflow-y-auto max-w-[600px] mx-auto bg-white border shadow-md rounded-md">
        <OutputForm
          formTitle={formTitle}
          formElements={formElements}
          formDescription={formDescription}
          preview={true}
        />
      </div>
    </div>
  );
}
