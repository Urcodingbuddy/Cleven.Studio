import { Settings } from "lucide-react";
// import { Avatar } from "./ui/avatar";

export default function ProfileHeader() {
  return (
    <div className="flex justify-between items-center mb-8 animate-fade-in [animation-delay:100ms]">
      <div className="flex items-center gap-3">
        <Settings className="w-8 h-8 animate-scale [animation-delay:200ms]" />
        <h1 className="text-2xl font-semibold">Account Center</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg animate-fade-in [animation-delay:300ms]">
          Cleven.Studio
        </span>
        <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-gray-900 font-semibold animate-scale [animation-delay:400ms] animate-glow">
          A
        </div>
      </div>
    </div>
  );
}