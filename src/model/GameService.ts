import produce from "immer"
import { accept, getTop, isFull } from "./TowerServices"
import { FloorType, GameType, TowerType } from "./types"

export function initialize(maxItems: number, useCache: boolean = false): GameType {

  if (useCache && window.localStorage.getItem('hanoi_game_data')) {
    return JSON.parse(window.localStorage.getItem('hanoi_game_data') ?? '')
  } else if (!useCache) {
    window.localStorage.removeItem('hanoi_game_data')
  }

  return {
    finished: false,
    movements: 0,
    maxItems,
    towers: [
      createTower(1, maxItems, true),
      createTower(2, maxItems, false),
      createTower(3, maxItems, false),
    ],
  } as GameType
}

// export function moveFloor(game: GameType, from: TowerType, to: TowerType): GameType | false {
export function moveFloor(game: GameType, from: number, to: number): GameType | false {
  if (game.finished || !game.towers[from] || !game.towers[to]) {
    return false
  }
  const fromFloor = getTop(game.towers[from])
  console.log({ fromFloor, from, to }, game.towers[from])

  if (fromFloor === null || !accept(game.towers[to], fromFloor)) {
    return false
  }

  return produce<GameType>(game, (newGame: GameType) => {
    newGame.movements++

    newGame.towers[from].floors.shift()
    newGame.towers[to].floors.unshift(fromFloor)

    const lastTower = newGame.towers.at(-1)
    newGame.finished = lastTower ? isFull(lastTower) : false
  })
}

export function createTower(id: number, maxItems: number, filled: boolean): TowerType {
  const floors: Array<FloorType> = []

  if (filled) {
    for (let x = 1; x <= maxItems; x++) {
      floors.push({ size: x, color: getRandomColor() })
    }
  }

  return { id, floors, maxItems }
}

function getRandomColor(): string {
  const colors = [
    'bg-green-700',
    'bg-orange-400',
    'bg-yellow-300',
    'bg-lime-600',
    'bg-cyan-500',
    'bg-sky-600',
    'bg-indigo-400',
    'bg-violet-500',
    'bg-pink-600',
  ]
  const index = Math.floor(Math.random() * colors.length)

  return colors[index]
}