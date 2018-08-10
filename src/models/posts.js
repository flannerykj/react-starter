export type Post = {
  id: number,
  title: string,
  published_on: string,
  last_updated: string,
  description: string
}


export type PostsContainer = {
  data: Post[],
  loading: boolean,
  error: string,
  needsUpdate: boolean
}
