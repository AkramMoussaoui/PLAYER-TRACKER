export interface PlatformInfo {
  platformSlug: string;
  platformUserId: string;
  platformUserHandle: string;
  platformUserIdentifier: string;
  avatarUrl: string;
  additionalParameters?: any;
}

export interface UserInfo {
  isPremium: boolean;
  isVerified: boolean;
  isInfluencer: boolean;
  countryCode?: any;
  customAvatarUrl?: any;
  socialAccounts?: any;
}

export interface Metadata {
  currentSeason: number;
  activeLegendName: string;
}

export interface Attribute {}

export interface Metadata {
  name: string;
}

export interface Metadata {}

export interface Level {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface Kill {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface KillsPerMatch {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface DamagePerMatch {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface KillsAsKillLeader {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface Damage {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface Headshot {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface MatchesPlayed {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface Finisher {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface SniperKill {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface SeasonWin {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface SeasonDamage {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface SeasonKill {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {}

export interface Season2Win {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {
  iconUrl: string;
}

export interface RankScore {
  rank: number;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Stat {
  level: Level;
  kills: Kill;
  killsPerMatch: KillsPerMatch;
  damagePerMatch: DamagePerMatch;
  killsAsKillLeader: KillsAsKillLeader;
  damage: Damage;
  headshots: Headshot;
  matchesPlayed: MatchesPlayed;
  finishers: Finisher;
  sniperKills: SniperKill;
  seasonWins: SeasonWin;
  seasonDamage: SeasonDamage;
  seasonKills: SeasonKill;
  season2Wins: Season2Win;
  rankScore: RankScore;
}

export interface Segment {
  type: string;
  attributes: Attribute;
  metadata: Metadata;
  expiryDate: string;
  stats: Stat;
}

export interface IData {
  platformInfo: PlatformInfo;
  userInfo: UserInfo;
  metadata: Metadata;
  segments: Segment[];
  availableSegments: any[];
  expiryDate: string;
}

export interface IPlayer {
  data: IData;
}
