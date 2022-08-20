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
  team_id?: string;
  teamName: string;
  tag: string;
  region: RegionType;
  wins: number;
  losses: number;
  image?: string;
  createAt: string;
  lastMatchTime: string;
}
