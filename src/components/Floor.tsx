import { useDrag } from "react-dnd/dist/hooks"
import { FloorType } from "../model/types"

type FloorProps = {
  maxItems: number
  floor: FloorType
  isDragable: boolean
}

export const Floor = ({ floor, maxItems, isDragable }: FloorProps): JSX.Element => {
  const color = floor.color
  const width = (floor.size * 100 / maxItems) - 1
  const [{ isDragging }, dragRef, previewRef] = useDrag(() => ({
    type: 'floor',
    canDrag: () => isDragable,
    options: { dropEffect: 'move' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging
    }),
  }))
  // if (isDragging) {
  //   return <div ref={previewRef} />
  // }

  return (
    <div
      ref={dragRef}
      className={`z-10 ${color} rounded border-green-700 border drop-shadow-xl mb-[1px]`}
      style={{ width: width + '%', height: '20px' }}>

    </div>
  )
}