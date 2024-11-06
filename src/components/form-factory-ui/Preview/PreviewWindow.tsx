import OutputForm from "./OutputForm";

export default function PreviewWindow() {
  return (
    <div className="w-full h-full">
      <div className="w-full py-1 bg-slate-100">
        <div className="m-4 text-center text-sm py-1 rounded-md bg-slate-300">
          form-factory.com
        </div>
      </div>
      <div className="w-full my-2 flex justify-center text-lg font-medium px-3">
        <OutputForm />
      </div>
    </div>
  );
}
