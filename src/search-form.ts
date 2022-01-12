import { renderBlock } from './lib.js'

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

function convertDate(date:Date):string {
  return date.toISOString().slice(0, 10)
}

export function renderSearchFormBlock (startDate:Date, finishDate:Date) {

  let start = convertDate(startDate)
  let finish = convertDate(finishDate)
  let tomorrow = convertDate(getTomorrow())
  let lastDayNextMonth = convertDate(getLastDayNextMonth())

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${start}" min="${tomorrow}" max="${lastDayNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${finish}" min="${tomorrow}" max="${lastDayNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
