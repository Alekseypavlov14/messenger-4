export function env(key: string): string {
  return import.meta.env[key]
}