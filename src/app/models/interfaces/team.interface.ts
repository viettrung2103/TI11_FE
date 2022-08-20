export enum RegionType {
  DEFAULT = 'DEFAULT',
  NA = 'NORTH AMERICA',
  SA = 'SOUTH AMERICA',
  WEU = 'WESTERN EUROPE',
  EEU = 'EASTERN EUROPE',
  CN = 'CHINA',
  SEA = 'SOUTHEAST ASIA',
}

export interface Team {
  teamId: TeamId;
  teamName: string;
  tag: string;
  region: RegionType;
  wins: number;
  losses: number;
  imageUrl: string;
  createAt: string;
  lastMatchAt: string;
}

export interface TeamId {
  teamId: string | number;
}
