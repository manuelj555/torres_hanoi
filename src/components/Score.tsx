import { GameType } from "../model/types"

type ScoreProps = {
  game: GameType
  onReset: () => void
}

export const Score = ({ game, onReset }: ScoreProps): JSX.Element => {
  return (
    <div className="self-stretch gap-3 flex flex-col sm:flex-row items-center justify-between border-b m-2 py-5 px-4 mb-10 text-gray-100 text-xl">
      <div className={`text-3xl ${game.finished ? '' : 'invisible'}`}>Juego Completado!</div>
      <div className="sm:ml-auto">Movimientos: {game.movements}</div>
      <button
        className="bg-orange-800 p-0 px-2 rounded"
        onClick={onReset}>
        Resetear
      </button>
    </div>
  )
}