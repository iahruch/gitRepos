import { RepoInterface } from './repo.interface'

export interface ResponseReposInterface {
  total_count: number | string
  incomplete_results: boolean
  items: RepoInterface[]
}
