export type Episode = {
  id: number,
  title: string,
  published_on: string,
  last_updated: string,
  description: string
}


export type EpisodesContainer = {
  data: Episode[],
  loading: boolean,
  error: string,
  needsUpdate: boolean
}
