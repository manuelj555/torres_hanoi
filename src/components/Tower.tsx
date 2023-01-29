import { TowerType } from "../model/types"
import { Floor } from "./Floor"

type TowerProps = {
  tower: TowerType,
  onSelect: () => void,
  isSelected: boolean
}


export const Tower = ({ tower, onSelect, isSelected }: TowerProps): JSX.Element => {
  const { floors, maxItems } = tower

  return (
    <div
      className={`flex-grow flex flex-col justify-end items-center relative hover:bg-opacity-20 hover:bg-slate-400 ${isSelected
        ? 'bg-opacity-20 bg-slate-300'
        : ''
        }`}
      onClick={() => onSelect()}
    >
      <span className="absolute bg-gray-100 px-1 z-0 -top-2 -bottom-0 rounded-t"></span>
      {floors.map((floor, index) => (
        <Floor
          key={index}
          floor={floor}
          maxItems={maxItems}
          isDragable={index === 0}
        />
      ))}
    </div>
  )
}