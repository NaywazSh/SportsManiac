// lib/data.ts

export type Region = 'US' | 'IN' | 'EU';

export interface Match {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'LIVE' | 'UPCOMING' | 'FINISHED';
  time: string;
  streamLink?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  image: string; // URL
  summary: string;
  timeAgo: string;
}

export const DATA_BY_REGION = {
  US: {
    matches: [
      { id: '1', sport: 'Basketball', league: 'NBA', homeTeam: 'Lakers', awayTeam: 'Warriors', homeScore: 102, awayScore: 98, status: 'LIVE', time: 'Q4 2:00', streamLink: '/watch/nba-1' },
      { id: '2', sport: 'Football', league: 'NFL', homeTeam: 'Chiefs', awayTeam: 'Bills', status: 'UPCOMING', time: 'Sun 8:00 PM' },
    ] as Match[],
    news: [
      { id: '1', title: 'LeBron breaks another record in intense showdown', image: 'https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&q=80', summary: 'The King continues his reign...', timeAgo: '2h ago' },
    ] as NewsItem[]
  },
  IN: {
    matches: [
      { id: '3', sport: 'Cricket', league: 'IPL', homeTeam: 'CSK', awayTeam: 'MI', homeScore: 182, awayScore: 140, status: 'LIVE', time: '18.4 Overs', streamLink: '/watch/ipl-1' },
      { id: '4', sport: 'Cricket', league: 'Test', homeTeam: 'India', awayTeam: 'England', status: 'UPCOMING', time: 'Tomorrow 9:30 AM' },
    ] as Match[],
    news: [
      { id: '2', title: 'Kohli century guides India to massive total', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80', summary: 'A masterclass in batting displayed today...', timeAgo: '1h ago' },
    ] as NewsItem[]
  },
  EU: {
    matches: [
      { id: '5', sport: 'Football', league: 'Champions League', homeTeam: 'Real Madrid', awayTeam: 'Man City', homeScore: 1, awayScore: 1, status: 'LIVE', time: '65"', streamLink: '/watch/ucl-1' },
      { id: '6', sport: 'Football', league: 'Premier League', homeTeam: 'Arsenal', awayTeam: 'Liverpool', status: 'UPCOMING', time: 'Sat 5:30 PM' },
    ] as Match[],
    news: [
      { id: '3', title: 'Mbappe transfer saga takes a new turn', image: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?auto=format&fit=crop&q=80', summary: 'Sources say the deal is close to completion.', timeAgo: '4h ago' },
    ] as NewsItem[]
  }
};