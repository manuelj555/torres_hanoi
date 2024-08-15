import confetti from "canvas-confetti"
import { useCallback, useEffect, useState } from "react"
import { initialize, moveFloor } from "../model/GameService"
import { GameType, TowerType } from "../model/types"

const maxItems = 5

export const useGame = () => {
  const [game, setGame] = useState<GameType>(() => initialize(maxItems, true))
  const [isInvalidMovement, setIsInvalidMovement] = useState<boolean>(false)

  const move = (from: TowerType, to: TowerType) => {
    const fromIndex = game.towers.findIndex(t => t.id === from.id)
    const toIndex = game.towers.findIndex(t => t.id === to.id)

    if (fromIndex === -1 || toIndex === -1) return
    if (fromIndex === toIndex) return

    const newGame = moveFloor(game, fromIndex, toIndex)

    if (newGame) {
      if (newGame.finished) {
        confetti({ particleCount: 100 })
      }
      setGame(newGame)
    } else {
      setIsInvalidMovement(true)
      setTimeout(() => setIsInvalidMovement(false), 1200)
    }
  }

  const reset = () => {
    setGame(initialize(maxItems))
  }

  useEffect(() => {
    if (game.movements > 0) {
      window.localStorage.setItem('hanoi_game_data', JSON.stringify(game))
    }
  }, [game])

  return {
    game,
    isInvalidMovement,
    reset,
    move,
  }
}