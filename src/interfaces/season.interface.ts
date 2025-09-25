export type CSFDSeason = {
  description: string | undefined;
  thumbnail: string;
  episodeList: CSFDEpisodeInfo[]
  origin: string;
}

export type CSFDEpisodeInfo = {
  name: string
  seasonEpisodeIdentifier: string;
  linkToDetail: string
}
