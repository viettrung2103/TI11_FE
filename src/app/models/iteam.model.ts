export enum RegionType {
  DEFAULT = 'DEFAULT',
  NA = 'NORTH AMERICA',
  SA = 'SOUTH AMERICA',
  WEU = 'WESTERN EUROPE',
  EEU = 'EASTERN EUROPE',
  CN = 'CHINA',
  SEA = 'SOUTHEAST ASIA',
}

export interface Iteam {
  teamId?: string;
  teamName: string;
  tag: string;
  region: RegionType;
  wins: number;
  losses: number;
  imageUrl?: string;
  createAt: string;
  lastMatchTime: string;
}
