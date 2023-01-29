import { FloorType, TowerType } from "./types";

export function getTop(t: TowerType): FloorType | null {
  return t.floors[0] ?? null
}

export function isEmpty(t: TowerType): boolean {
  return t.floors.length === 0
}

export function isFull(t: TowerType): boolean {
  return t.floors.length === t.maxItems
}

export function accept(t: TowerType, floor: FloorType): boolean {
  const topFloor = getTop(t);

  if (topFloor === null) {
    return true;
  }

  return topFloor.size > floor.size
}