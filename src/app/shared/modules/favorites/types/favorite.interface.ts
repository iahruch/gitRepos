export interface FavoriteInterface {
  [id: string]: FavoriteDataInterface
}

export interface FavoriteDataInterface {
  fullName: string
  ownerPhoto: string
  starsCount: number
  descRepo: string
}
