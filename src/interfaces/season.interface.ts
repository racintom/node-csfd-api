export type Season = {
  description: string;
  thumbnail: string;
  episodeList: EpisodeInfo[]
  origin: string;
}

export type EpisodeInfo = {
  name: string
  seasonEpisodeIdentifier: string;
  linkToDetail: string
}
