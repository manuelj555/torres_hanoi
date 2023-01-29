import { Floor } from "./Floor"
import { Tower } from "./Tower"

export class Game {
  maxItems!: number
  movements!: number
  finished!: boolean
  towers!: Array<Tower>

  constructor() {
    this.initialize()
  }

  public initialize(): void {
    this.maxItems = 6
    this.movements = 0
    this.finished = false
    this.towers = [
      this.createTower(true),
      this.createTower(false),
      this.createTower(false),
    ]
  }

  public moveFloor(from: Tower, to: Tower): boolean {
    if (this.finished) {
      return false
    }

    const fromFloor = from.getTop()

    if (fromFloor === null || !to.accept(fromFloor)) {
      return false
    }

    const moved = to.addFrom(from)

    if (moved) {
      this.movements++
      this.finished = this.towers.at(-1)?.isFull() ?? false
    }

    return moved
  }

  private createTower(filled: boolean): Tower {
    const floors: Array<Floor> = []

    if (filled) {
      for (let x = 1; x <= this.maxItems; x++) {
        floors.push(new Floor(x))
      }
    }

    return new Tower(this.maxItems, floors)
  }
}