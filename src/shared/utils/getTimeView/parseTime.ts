export function parseTime(time: number) {
  const moment = new Date(time)

  const hours = moment.getHours()
  const minutes = moment.getMinutes()

  return { hours, minutes }
}