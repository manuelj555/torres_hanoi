
export type FloorType = {
  color: string
  size: number
}

export type TowerType = {
  id: number,
  maxItems: number
  floors: Array<FloorType>
}

export type GameType = {
  maxItems: number
  movements: number
  finished: boolean
  towers: Array<TowerType>
}