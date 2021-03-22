import { RepoInterface } from './repo.interface'

export interface ReposStateInterface {
  loading: boolean
  items: RepoInterface[]
  strSearch: string
  searchItems: RepoInterface[]
  errors: any
}
