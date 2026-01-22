"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/sports-maniac/components/Navbar';
import ScoreCard from '@/sports-maniac/components/ScoreCard';
import NewsFeed from '@/sports-maniac/components/NewsFeed';
import RightSidebar from '@/sports-maniac/components/RightSidebar';
import { useAppStore } from '@/sports-maniac/lib/store';
import { DATA_BY_REGION } from '@/sports-maniac/lib/data';

export default function Home() {
  const { region } = useAppStore();
  const [data, setData] = useState(DATA_BY_REGION['US']);

  // Simulate data fetching based on region change
  useEffect(() => {
    setData(DATA_BY_REGION[region]);
  }, [region]);

  return (
    <main className="min-h-screen pb-20">
      <Navbar />

      {/* Live Scores Strip */}
      <section className="mt-4 px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-4">
          {data.matches.map((match) => (
            <ScoreCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed (Left 2 columns) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Featured/Hero Section */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <img 
              src={data.news[0].image} 
              alt="Hero" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full w-fit mb-2">BREAKING</span>
              <h2 className="text-2xl md:text-4xl font-black text-white">{data.news[0].title}</h2>
            </div>
          </div>

          <NewsFeed news={data.news} />
        </div>

        {/* Sidebar (Right 1 column) */}
        <aside>
          <RightSidebar />
        </aside>

      </div>
    </main>
  );
}