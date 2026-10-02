export interface CountryData {
  id: string;
  code: string;
  name: string;
  flag: string;
  hp: number;
  maxHp: number;
  armor: number;
  captured: boolean;
  owner: string;
  color: string;
  region: string;
  x: number; // Coordinate on 1000x520 map
  y: number;
  clicks?: number;
}

export const FACTION_COLORS: Record<string, string> = {
  USA: '#3b82f6',
  CHN: '#ef4444',
  RUS: '#eab308',
  DEU: '#10b981',
  GBR: '#6366f1',
  FRA: '#ec4899',
  JPN: '#f97316',
  BRA: '#14b8a6',
  IND: '#8b5cf6',
  AUS: '#06b6d4',
  CAN: '#f43f5e',
  KOR: '#a855f7',
  ITA: '#84cc16',
  TUR: '#d946ef',
  UKR: '#38bdf8',
  SAU: '#22c55e',
  EGY: '#f59e0b',
  ZAF: '#0ea5e9',
  MEX: '#e11d48',
  IDN: '#fb923c',
  ESP: '#f59e0b',
  POL: '#ec4899',
  ARG: '#38bdf8',
  THA: '#10b981',
  VNM: '#ef4444',
  SWE: '#3b82f6',
  NOR: '#6366f1',
  NLD: '#f97316',
  CHE: '#ef4444',
  SGP: '#e11d48',
  PHL: '#38bdf8',
  MYS: '#10b981',
  ISR: '#3b82f6',
  IRN: '#22c55e',
  PAK: '#10b981',
  COL: '#f59e0b',
  PER: '#ef4444',
  CHL: '#ef4444',
  NZL: '#06b6d4',
  NGA: '#22c55e',
  KEN: '#ef4444',
  MAR: '#e11d48',
  FIN: '#3b82f6',
  BEL: '#eab308',
  AUT: '#ef4444',
  GRC: '#38bdf8',
  PRT: '#10b981'
};

export const ALL_COUNTRIES: CountryData[] = [
  // North America
  { id: 'USA', code: 'USA', name: 'United States', flag: '🇺🇸', hp: 145000, maxHp: 145000, armor: 25, captured: false, owner: 'USA', color: '#3b82f6', region: 'North America', x: 210, y: 195 },
  { id: 'CAN', code: 'CAN', name: 'Canada', flag: '🇨🇦', hp: 120000, maxHp: 120000, armor: 20, captured: false, owner: 'CAN', color: '#f43f5e', region: 'North America', x: 215, y: 110 },
  { id: 'MEX', code: 'MEX', name: 'Mexico', flag: '🇲🇽', hp: 99000, maxHp: 99000, armor: 15, captured: false, owner: 'MEX', color: '#e11d48', region: 'North America', x: 195, y: 260 },

  // South America
  { id: 'BRA', code: 'BRA', name: 'Brazil', flag: '🇧🇷', hp: 125000, maxHp: 125000, armor: 20, captured: false, owner: 'BRA', color: '#14b8a6', region: 'South America', x: 335, y: 345 },
  { id: 'ARG', code: 'ARG', name: 'Argentina', flag: '🇦🇷', hp: 86000, maxHp: 86000, armor: 15, captured: false, owner: 'ARG', color: '#38bdf8', region: 'South America', x: 295, y: 430 },
  { id: 'COL', code: 'COL', name: 'Colombia', flag: '🇨🇴', hp: 72000, maxHp: 72000, armor: 12, captured: false, owner: 'COL', color: '#f59e0b', region: 'South America', x: 270, y: 300 },
  { id: 'PER', code: 'PER', name: 'Peru', flag: '🇵🇪', hp: 68000, maxHp: 68000, armor: 12, captured: false, owner: 'PER', color: '#ef4444', region: 'South America', x: 270, y: 340 },
  { id: 'CHL', code: 'CHL', name: 'Chile', flag: '🇨🇱', hp: 65000, maxHp: 65000, armor: 14, captured: false, owner: 'CHL', color: '#ef4444', region: 'South America', x: 275, y: 430 },

  // Europe
  { id: 'GBR', code: 'GBR', name: 'United Kingdom', flag: '🇬🇧', hp: 105000, maxHp: 105000, armor: 22, captured: false, owner: 'GBR', color: '#6366f1', region: 'Europe', x: 472, y: 148 },
  { id: 'FRA', code: 'FRA', name: 'France', flag: '🇫🇷', hp: 108000, maxHp: 108000, armor: 22, captured: false, owner: 'FRA', color: '#ec4899', region: 'Europe', x: 490, y: 184 },
  { id: 'DEU', code: 'DEU', name: 'Germany', flag: '🇩🇪', hp: 110000, maxHp: 110000, armor: 24, captured: false, owner: 'DEU', color: '#10b981', region: 'Europe', x: 510, y: 162 },
  { id: 'ITA', code: 'ITA', name: 'Italy', flag: '🇮🇹', hp: 96000, maxHp: 96000, armor: 18, captured: false, owner: 'ITA', color: '#84cc16', region: 'Europe', x: 515, y: 205 },
  { id: 'ESP', code: 'ESP', name: 'Spain', flag: '🇪🇸', hp: 92000, maxHp: 92000, armor: 18, captured: false, owner: 'ESP', color: '#f59e0b', region: 'Europe', x: 465, y: 210 },
  { id: 'POL', code: 'POL', name: 'Poland', flag: '🇵🇱', hp: 88000, maxHp: 88000, armor: 18, captured: false, owner: 'POL', color: '#ec4899', region: 'Europe', x: 535, y: 160 },
  { id: 'UKR', code: 'UKR', name: 'Ukraine', flag: '🇺🇦', hp: 95000, maxHp: 95000, armor: 20, captured: false, owner: 'UKR', color: '#38bdf8', region: 'Europe', x: 565, y: 165 },
  { id: 'SWE', code: 'SWE', name: 'Sweden', flag: '🇸🇪', hp: 78000, maxHp: 78000, armor: 16, captured: false, owner: 'SWE', color: '#3b82f6', region: 'Europe', x: 525, y: 120 },
  { id: 'NOR', code: 'NOR', name: 'Norway', flag: '🇳🇴', hp: 76000, maxHp: 76000, armor: 16, captured: false, owner: 'NOR', color: '#6366f1', region: 'Europe', x: 505, y: 115 },
  { id: 'FIN', code: 'FIN', name: 'Finland', flag: '🇫🇮', hp: 74000, maxHp: 74000, armor: 18, captured: false, owner: 'FIN', color: '#3b82f6', region: 'Europe', x: 545, y: 110 },
  { id: 'NLD', code: 'NLD', name: 'Netherlands', flag: '🇳🇱', hp: 74000, maxHp: 74000, armor: 15, captured: false, owner: 'NLD', color: '#f97316', region: 'Europe', x: 492, y: 155 },
  { id: 'CHE', code: 'CHE', name: 'Switzerland', flag: '🇨🇭', hp: 72000, maxHp: 72000, armor: 28, captured: false, owner: 'CHE', color: '#ef4444', region: 'Europe', x: 501, y: 184 },

  // Eurasia / Russia
  { id: 'RUS', code: 'RUS', name: 'Russia', flag: '🇷🇺', hp: 165000, maxHp: 165000, armor: 26, captured: false, owner: 'RUS', color: '#eab308', region: 'Eurasia', x: 710, y: 125 },
  { id: 'TUR', code: 'TUR', name: 'Turkey', flag: '🇹🇷', hp: 104000, maxHp: 104000, armor: 20, captured: false, owner: 'TUR', color: '#d946ef', region: 'Middle East', x: 575, y: 205 },

  // Asia
  { id: 'CHN', code: 'CHN', name: 'China', flag: '🇨🇳', hp: 188000, maxHp: 188000, armor: 28, captured: false, owner: 'CHN', color: '#ef4444', region: 'Asia', x: 760, y: 230 },
  { id: 'IND', code: 'IND', name: 'India', flag: '🇮🇳', hp: 172000, maxHp: 172000, armor: 25, captured: false, owner: 'IND', color: '#8b5cf6', region: 'Asia', x: 700, y: 270 },
  { id: 'JPN', code: 'JPN', name: 'Japan', flag: '🇯🇵', hp: 118000, maxHp: 118000, armor: 22, captured: false, owner: 'JPN', color: '#f97316', region: 'Asia', x: 865, y: 215 },
  { id: 'KOR', code: 'KOR', name: 'South Korea', flag: '🇰🇷', hp: 98000, maxHp: 98000, armor: 20, captured: false, owner: 'KOR', color: '#a855f7', region: 'Asia', x: 825, y: 215 },
  { id: 'IDN', code: 'IDN', name: 'Indonesia', flag: '🇮🇩', hp: 115000, maxHp: 115000, armor: 18, captured: false, owner: 'IDN', color: '#fb923c', region: 'Asia', x: 785, y: 345 },
  { id: 'VNM', code: 'VNM', name: 'Vietnam', flag: '🇻🇳', hp: 89000, maxHp: 89000, armor: 18, captured: false, owner: 'VNM', color: '#ef4444', region: 'Asia', x: 775, y: 270 },
  { id: 'THA', code: 'THA', name: 'Thailand', flag: '🇹🇭', hp: 85000, maxHp: 85000, armor: 16, captured: false, owner: 'THA', color: '#10b981', region: 'Asia', x: 755, y: 275 },
  { id: 'MYS', code: 'MYS', name: 'Malaysia', flag: '🇲🇾', hp: 78000, maxHp: 78000, armor: 16, captured: false, owner: 'MYS', color: '#10b981', region: 'Asia', x: 765, y: 318 },
  { id: 'PHL', code: 'PHL', name: 'Philippines', flag: '🇵🇭', hp: 82000, maxHp: 82000, armor: 16, captured: false, owner: 'PHL', color: '#38bdf8', region: 'Asia', x: 830, y: 285 },
  { id: 'SGP', code: 'SGP', name: 'Singapore', flag: '🇸🇬', hp: 65000, maxHp: 65000, armor: 25, captured: false, owner: 'SGP', color: '#e11d48', region: 'Asia', x: 761, y: 325 },
  { id: 'SAU', code: 'SAU', name: 'Saudi Arabia', flag: '🇸🇦', hp: 102000, maxHp: 102000, armor: 22, captured: false, owner: 'SAU', color: '#22c55e', region: 'Middle East', x: 600, y: 250 },
  { id: 'IRN', code: 'IRN', name: 'Iran', flag: '🇮🇷', hp: 92000, maxHp: 92000, armor: 18, captured: false, owner: 'IRN', color: '#22c55e', region: 'Middle East', x: 640, y: 225 },
  { id: 'PAK', code: 'PAK', name: 'Pakistan', flag: '🇵🇰', hp: 90000, maxHp: 90000, armor: 18, captured: false, owner: 'PAK', color: '#10b981', region: 'Asia', x: 665, y: 235 },
  { id: 'ISR', code: 'ISR', name: 'Israel', flag: '🇮🇱', hp: 68000, maxHp: 68000, armor: 26, captured: false, owner: 'ISR', color: '#3b82f6', region: 'Middle East', x: 574, y: 226 },

  // Africa
  { id: 'EGY', code: 'EGY', name: 'Egypt', flag: '🇪🇬', hp: 94000, maxHp: 94000, armor: 18, captured: false, owner: 'EGY', color: '#f59e0b', region: 'Africa', x: 550, y: 242 },
  { id: 'ZAF', code: 'ZAF', name: 'South Africa', flag: '🇿🇦', hp: 89000, maxHp: 89000, armor: 18, captured: false, owner: 'ZAF', color: '#0ea5e9', region: 'Africa', x: 540, y: 410 },
  { id: 'NGA', code: 'NGA', name: 'Nigeria', flag: '🇳🇬', hp: 82000, maxHp: 82000, armor: 15, captured: false, owner: 'NGA', color: '#22c55e', region: 'Africa', x: 485, y: 295 },
  { id: 'KEN', code: 'KEN', name: 'Kenya', flag: '🇰🇪', hp: 62000, maxHp: 62000, armor: 12, captured: false, owner: 'KEN', color: '#ef4444', region: 'Africa', x: 570, y: 320 },
  { id: 'MAR', code: 'MAR', name: 'Morocco', flag: '🇲🇦', hp: 64000, maxHp: 64000, armor: 15, captured: false, owner: 'MAR', color: '#e11d48', region: 'Africa', x: 455, y: 240 },

  // Oceania
  { id: 'AUS', code: 'AUS', name: 'Australia', flag: '🇦🇺', hp: 112000, maxHp: 112000, armor: 20, captured: false, owner: 'AUS', color: '#06b6d4', region: 'Oceania', x: 840, y: 400 },
  { id: 'NZL', code: 'NZL', name: 'New Zealand', flag: '🇳🇿', hp: 60000, maxHp: 60000, armor: 16, captured: false, owner: 'NZL', color: '#06b6d4', region: 'Oceania', x: 920, y: 450 }
];

export const COUNTRIES: Record<string, CountryData> = ALL_COUNTRIES.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as Record<string, CountryData>);

export const COUNTRY_REGIONS = Array.from(new Set(ALL_COUNTRIES.map(c => c.region)));
