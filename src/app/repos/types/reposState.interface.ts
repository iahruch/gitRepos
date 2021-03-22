import { RepoInterface } from './repo.interface'

export interface ReposStateInterface {
  loading: boolean
  items: RepoInterface[]
  errors: any
}
