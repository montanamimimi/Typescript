
export function getTomorrow():Date {
    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow
  }
  
export function getLastDayNextMonth():Date {
    let today = new Date()
    let month = today.getMonth()
    let year = today.getFullYear()
    let day = new Date(year, month + 2, 0)
    return day;
  }
  
export function convertDate(date:Date):string {
    return date.toISOString().slice(0, 10)
  }