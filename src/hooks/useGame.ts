import confetti from "canvas-confetti"
import { useCallback, useState } from "react"
import { initialize, moveFloor } from "../model/GameService"
import { GameType } from "../model/types"

const maxItems = 4

export const useGame = () => {
  const [game, setGame] = useState<GameType>(() => initialize(maxItems))
  const [selectedTower, setSelectedTower] = useState<number | null>(null)
  const [isInvalidMovement, setIsInvalidMovement] = useState<boolean>(false)

  const selectTower = useCallback((towerIndex: number): void => {
    if (selectedTower === null) {
      setSelectedTower(towerIndex)
    } else if (selectedTower !== towerIndex) {
      const newGame = moveFloor(game, selectedTower, towerIndex)

      if (newGame) {
        if (newGame.finished) {
          confetti({ particleCount: 100 })
        }

        setGame(newGame)
      } else {
        setIsInvalidMovement(true)
        setTimeout(() => setIsInvalidMovement(false), 1200)
      }

      setSelectedTower(null)
    }
  }, [game, selectedTower, setGame, setSelectedTower])

  const reset = useCallback(() => {
    setGame(initialize(maxItems))
  }, [setGame, maxItems])

  return {
    game,
    selectedTower,
    isInvalidMovement,
    reset,
    selectTower,
  }
}