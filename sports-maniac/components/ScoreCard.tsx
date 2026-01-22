import { Match } from '@/sports-maniac/lib/data';
import { PlayCircle } from 'lucide-react';

export default function ScoreCard({ match }: { match: Match }) {
  const isLive = match.status === 'LIVE';

  return (
    <div className="min-w-[280px] p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{match.league}</span>
        {isLive ? (
          <span className="text-xs font-bold text-red-500 animate-pulse flex items-center gap-1">
            ● LIVE
          </span>
        ) : (
          <span className="text-xs text-gray-500">{match.time}</span>
        )}
      </div>
      
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-bold text-white">{match.homeTeam}</span>
        <span className="text-xl font-mono text-blue-400">{match.homeScore ?? '-'}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-white">{match.awayTeam}</span>
        <span className="text-xl font-mono text-blue-400">{match.awayScore ?? '-'}</span>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-white/10">
        <span className="text-xs text-gray-400">{match.time}</span>
        {isLive && match.streamLink && (
            <a href={match.streamLink} className="flex items-center gap-1 text-xs font-bold text-green-400 hover:text-green-300">
                <PlayCircle size={14} /> Watch
            </a>
        )}
      </div>
    </div>
  );
}