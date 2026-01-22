"use client";
import { useAppStore } from '@/lib/store';
import { Menu, Search, User, Globe } from 'lucide-react';
import { Region } from '@/lib/data';

export default function Navbar() {
  const { region, setRegion } = useAppStore();

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Menu className="w-6 h-6 md:hidden text-white" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent italic">
          SportsManiac
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Region Selector */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
          <Globe className="w-4 h-4 text-gray-400" />
          <select 
            value={region} 
            onChange={(e) => setRegion(e.target.value as Region)}
            className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
          >
            <option value="US" className="text-black">USA (US)</option>
            <option value="IN" className="text-black">India (IN)</option>
            <option value="EU" className="text-black">Europe (EU)</option>
          </select>
        </div>

        <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </nav>
  );
}