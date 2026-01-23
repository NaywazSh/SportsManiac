import { NewsItem } from '@/lib/data';

export default function NewsFeed({ news }: { news: NewsItem[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Trending News</h2>
      {news.map((item) => (
        <div key={item.id} className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer">
          <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-800">
             <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-white leading-tight mb-2 group-hover:text-blue-400">{item.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{item.summary}</p>
            <span className="text-xs text-gray-500 mt-2">{item.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
}