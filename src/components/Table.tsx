import { useGame } from "../hooks/useGame"
import { Score } from "./Score"
import { Tower } from "./Tower"

export const Table = (): JSX.Element => {
  const { game, isInvalidMovement, reset, move } = useGame()
  const { towers, maxItems } = game

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Score game={game} onReset={reset} />

        <div className={`mx-2 w-5/6 sm:w-4/5 lg:w-2/3 2xl:w-1/2 ${isInvalidMovement
          ? 'animate__animated animate__shakeX animate__fast'
          : ''
          }`}>
          <div className='flex gap-1 px-1' style={{ minHeight: `${(maxItems * 20) + 10}px` }}>
            {towers.map((tower, index) => (
              <Tower
                key={tower.id}
                tower={tower}
                onMove={move}
              // onSelect={() => selectTower(index)}
              />
            ))}
          </div>
          <div className={`h-2 bg-gray-100 w-full rounded ${isInvalidMovement
            ? 'bg-red-600 transition-all ease-in-out duration-300'
            : ''
            }`}></div>
        </div>
      </div>
    </>
  )
}