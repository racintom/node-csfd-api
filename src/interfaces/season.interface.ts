export type CSFDSeason = {
  description: string;
  thumbnail: string;
  episodeList: CSFDEpisodeInfo[]
  origin: string;
}

export type CSFDEpisodeInfo = {
  name: string
  seasonEpisodeIdentifier: string;
  linkToDetail: string
}
