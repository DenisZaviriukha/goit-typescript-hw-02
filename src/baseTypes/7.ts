/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum isThatDayOff {
  Monday = 0,
  Tuesday = 0,
  Wednesday = 0,
  Thursday = 0,
  Friday = 0,
  Saturday = 1,
  Sunday = 1
}

const isWeekend: (dayOfTheWeek: number) => boolean = (dayOfTheWeek) => {
  const day: boolean = Boolean(dayOfTheWeek)
  if (day) {
    return day
  }
  else {
    return day
  }
}


isWeekend(isThatDayOff.Monday)

isWeekend(isThatDayOff.Saturday)