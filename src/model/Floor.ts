export class Floor {
  public readonly color: string
  public readonly size: number

  constructor(size: number) {
    this.size = size
    this.color = this.getRandomColor()
  }

  private getRandomColor(): string {
    const colors = [
      'bg-green-700',
      'bg-orange-400',
      'bg-yellow-300',
      'bg-lime-600',
      'bg-cyan-500',
      'bg-sky-600',
      'bg-indigo-400',
      'bg-violet-500',
      'bg-pink-600',
    ]
    const index = Math.floor(Math.random() * (colors.length - 1))

    return colors[index]
  }
}