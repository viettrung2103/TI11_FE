export enum RegionType {
  DEFAULT = 'DEFAULT',
  NA = 'NORTH AMERICA',
  SA = 'SOUTH AMERICA',
  WEU = 'WESTERN EUROPE',
  EEU = 'EASTERN EUROPE',
  CN = 'CHINA',
  SEA = 'SOUTHEAST ASIA',
}

export class Team {
  team_id?: string;
  teamName: string;
  tag: string;
  region: RegionType;
  players: string[];
  wins: number;
  losses: number;
  image?: string;
  createAt: string;
  lastMatchTime: string;

  constructor(
    teamName: string,
    tag: string,
    region: RegionType,
    players: string[],
    wins: number,
    losses: number,
    createAt?: string,
    lastMatchTime?: string,
    team_id?: string,
    image?: string
  ) {
    this.team_id = team_id;
    this.teamName = teamName;
    this.tag = tag;
    this.region = region;
    this.players = players;
    this.wins = wins;
    this.losses = losses;
    this.image = image;
    this.createAt = createAt || new Date().toISOString();
    this.lastMatchTime = lastMatchTime || new Date().toISOString();
  }
}
