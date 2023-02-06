export class LocalStorage<T> {
  constructor(private key: string) {}

  getValue(): T | null {
    const stringifiedValue = localStorage.getItem(this.key)

    if (!stringifiedValue) return null

    try {
      return JSON.parse(stringifiedValue)
    } catch (e) {
      return null
    }
  }

  setValue(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
}