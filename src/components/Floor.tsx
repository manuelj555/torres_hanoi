import { Floor as FloorModel } from "../model/Floor"

type FloorProps = {
  maxItems: number
  floor: FloorModel
}

export const Floor = ({ floor, maxItems }: FloorProps): JSX.Element => {
  const color = floor.color
  const width = (floor.size * 100 / maxItems)

  return (
    <div
      className={`z-10 h-4 sm:h-6 xl:h-8  ${color} rounded border-green-700 border drop-shadow-xl mb-[1px]`}
      style={{ width: width + '%' }}>

    </div>
  )
}