import {DateTime} from 'luxon'
// 앞에서 설치한 luxon 패키지는 '19시간 전'형태로 날짜를 만들 때 필요한 DateTime 객체 제공

export const makeRandomPastDate = () => {
  const value = new Date().valueOf()
  const n = 100000
  return new Date(value - Math.floor(Math.random() * n * n))
}

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())
