import { useMemo } from "react"
import { useDrag } from "react-dnd/dist/hooks"
import { getTop } from "../model/TowerServices"
import { FloorType, TowerType } from "../model/types"

type FloorProps = {
  tower: TowerType
  floor: FloorType
}

export const Floor = ({ tower, floor }: FloorProps): JSX.Element => {
  const { maxItems } = tower
  const isDragable = getTop(tower)?.size === floor.size
  // const isDragable = useMemo(() => {
  //   const topFloor = getTop(tower)

  //   return topFloor?.size === floor.size
  // }, [tower, floor])

  const color = floor.color
  const width = (floor.size * 100 / maxItems) - 1

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'floor',
    item: () => {
      console.log('Dragging', tower)
      return tower
    },
    canDrag: () => isDragable,
    collect(monitor) {
      return { isDragging: monitor.isDragging() }
    },
    //options: { dropEffect: 'move' },
  }), [isDragable, tower])

  return (
    <div
      ref={dragRef}
      className={`z-10 ${color} rounded border-gray-200 border drop-shadow-xl mb-[1px] ${isDragging
        ? 'opacity-0'
        : ''}`}
      style={{ width: width + '%', height: '20px' }} />
  )
}