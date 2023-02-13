import { parseTime } from "./parseTime"

export function getTimeView(time: number): string {
  const { hours, minutes } = parseTime(time)

  const hoursView = hours >= 10 ? hours.toString() : `0${hours}`
  const minutesView = minutes >= 10 ? minutes.toString() : `0${minutes}`

  return `${hoursView}:${minutesView}`
}