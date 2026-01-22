import { ShoppingBag, TrendingUp } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="hidden lg:block w-80 space-y-6">
      {/* Official Merch Section */}
      <div className="bg-gradient-to-br from-blue-900/40 to-black p-4 rounded-xl border border-blue-500/20">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingBag className="text-blue-400" />
          <h3 className="font-bold text-white">Fan Store</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white/5 p-2 rounded flex gap-3 items-center">
            <div className="w-12 h-12 bg-white/10 rounded"></div>
            <div>
              <p className="text-sm font-bold text-white">Official Jersey</p>
              <p className="text-xs text-green-400">$49.99</p>
            </div>
            <button className="ml-auto text-xs bg-blue-600 px-2 py-1 rounded text-white">Buy</button>
          </div>
        </div>
      </div>

      {/* Ads Placeholder */}
      <div className="h-64 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center text-gray-500">
        <span className="text-xs uppercase tracking-widest">Sponsored</span>
        <div className="mt-2 text-center p-4">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Betting Partners / Ads</p>
        </div>
      </div>
    </div>
  );
}