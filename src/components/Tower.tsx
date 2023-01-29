import { Tower as TowerModel } from "../model/Tower"
import { Floor } from "./Floor"

type TowerProps = {
  tower: TowerModel
}


export const Tower = ({ tower }: TowerProps): JSX.Element => {
  const { floors, maxItems } = tower

  return (
    <div className="flex-grow flex flex-col items-center relative">
      <span className="absolute bg-gray-100 px-1 z-0 -top-2 -bottom-0 rounded-t"></span>
      {floors.map((floor, index) => (
        <Floor key={index} floor={floor} maxItems={maxItems} />
      ))}
    </div>
  )
}