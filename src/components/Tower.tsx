import { useDrop } from "react-dnd"
import { TowerType } from "../model/types"
import { Floor } from "./Floor"

type TowerProps = {
  tower: TowerType,
  // onSelect: () => void,
  onMove: (from: TowerType, to: TowerType) => void,
}


export const Tower = ({ tower, onMove }: TowerProps): JSX.Element => {
  const { floors } = tower
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'floor',
    drop(from: TowerType) {
      onMove(from, tower)
    },
    collect(monitor) {
      return { isOver: monitor.isOver() }
    },
  }), [onMove, tower])

  return (
    <div
      ref={dropRef}
      className={`flex-grow flex flex-col justify-end items-center relative hover:bg-opacity-20 hover:bg-slate-400`}
    >
      <span className={`absolute px-1 z-0 -top-2 -bottom-0 rounded-t ${isOver
        ? 'bg-gray-400'
        : 'bg-gray-100'}`} />
      {floors.map((floor) => (
        <Floor
          key={floor.size}
          tower={tower}
          floor={floor}
        />
      ))}
    </div>
  )
}