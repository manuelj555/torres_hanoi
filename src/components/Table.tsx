import { Game } from "../model/Game"
import { Tower } from "./Tower"

const game = new Game()

export const Table = (): JSX.Element => {
  const towers = game.towers

  return (
    <>
      <div className="w-full mx-2 sm:w-4/5 lg:w-2/3">
        <div className="flex gap-1 px-1">
          {towers.map((tower, index) => (
            <Tower key={index} tower={tower} />
          ))}
        </div>
        <div className="h-2 bg-gray-100 w-full rounded"></div>
      </div>
    </>
  )
}