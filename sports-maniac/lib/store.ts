// lib/store.ts
import { create } from 'zustand';
import { Region } from './data';

interface AppState {
  region: Region;
  setRegion: (region: Region) => void;
}

export const useAppStore = create<AppState>((set) => ({
  region: 'US', // Default, will update on mount
  setRegion: (region) => set({ region }),
}));