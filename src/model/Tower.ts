import { Floor } from "./Floor";

export class Tower {
  maxItems: number
  floors: Array<Floor>

  constructor(maxItems: number, floors: Array<Floor> = []) {
    this.maxItems = maxItems
    this.floors = floors
  }

  public getTop(): Floor | null {
    return this.floors[0] ?? null
  }

  public isEmpty(): boolean {
    return this.floors.length === 0
  }

  public isFull(): boolean {
    return this.floors.length === this.maxItems
  }

  public accept(floor: Floor): boolean {
    const topFloor = this.getTop();

    if (topFloor === null) {
      return true;
    }

    return topFloor.size > floor.size
  }

  public addFrom(tower: Tower): boolean {
    if (tower.isEmpty()) {
      return false
    }

    const otherFloor = tower.getTop()

    if (!otherFloor || !this.accept(otherFloor)) {
      return false
    }

    this.floors.unshift(otherFloor)
    tower.floors.shift()

    return true
  }
}