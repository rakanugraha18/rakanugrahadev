import { ArrowRight, ArrowLeft, RefreshCcw } from "lucide-react";

interface WindowUrlProps {
  urlBrowser: string;
}
export default function WindowUrl({ urlBrowser }: WindowUrlProps) {
  return (
    <div>
      {/* URL Bar */}
      <div className=" p-2 flex items-center space-x-2 border-gray-200 border-b max-[400px]:text-[0.6rem]">
        <button className="p-1 rounded hover:bg-gray-300">
          <ArrowLeft size={20} />
        </button>
        <button className="p-1 rounded hover:bg-gray-300">
          <RefreshCcw size={20} />
        </button>
        <button className="p-1 rounded hover:bg-gray-300">
          <ArrowRight size={20} />
        </button>

        <input
          disabled
          type="text"
          className="flex-1 border border-gray-200 px-4 py-1 rounded-2xl outline-none text-sm w-full"
          defaultValue={urlBrowser}
        />
        <button className="p-1 rounded hover:bg-gray-300">🔌</button>
        <button className="p-1 rounded hover:bg-gray-300">⋮</button>
      </div>
    </div>
  );
}
