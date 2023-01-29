import produce from "immer"
import { accept, getTop, isFull } from "./TowerServices"
import { FloorType, GameType, TowerType } from "./types"

export function initialize(maxItems: number): GameType {
  return <GameType>{
    finished: false,
    movements: 0,
    maxItems,
    towers: [
      createTower(maxItems, true),
      createTower(maxItems, false),
      createTower(maxItems, false),
    ],
  }
}

// export function moveFloor(game: GameType, from: TowerType, to: TowerType): GameType | false {
export function moveFloor(game: GameType, from: number, to: number): GameType | false {
  if (game.finished || !game.towers[from] || !game.towers[to]) {
    return false
  }
  const fromFloor = getTop(game.towers[from])
  console.log({ fromFloor, from, to })

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

export function createTower(maxItems: number, filled: boolean): TowerType {
  const floors: Array<FloorType> = []

  if (filled) {
    for (let x = 1; x <= maxItems; x++) {
      floors.push({ size: x, color: getRandomColor() })
    }
  }

  return { floors, maxItems }
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