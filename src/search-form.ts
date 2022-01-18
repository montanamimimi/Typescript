import { renderBlock } from './lib.js'
import { SearchFormData } from './search-interface'

function collectSearchData(e) {

    // Эта штука неработает. Это вообще законно?  
    // onsubmit срабатывает при первой загрузке и не срабатывает на submit. Весь код перечитала - не понимаю почему. 
    // Это может быть связано с Live Server? 
    // Короче код который дальше мог бы работать, если бы не вот это все:

    e.preventDefault();
    const checkIn = (<HTMLInputElement>document.getElementById('check-in-date')).value;
    const checkOut = (<HTMLInputElement>document.getElementById('check-out-date')).value;
    const price = (<HTMLInputElement>document.getElementById('max-price')).value;
   
    // дальше собственно провести приведение типов к Date и number

    const startDate: Date = new Date(checkIn);
    const finishDate: Date = new Date(checkOut);
    const maxPrice: number = +price; // по хорошему еще проверку на то что получилось именно число
    // но очень неудобно все этот тестить пока код по факту не работает. 
    // так что в функцию поиска передаю какую-то фигню. 
    const letsSearch: SearchFormData = {
    startDate: new Date(), // startDate
    finishDate: new Date(), // finishDate
    maxPrice: 1000 // maxPrice
  }
  search(letsSearch);
} 

function search (searchData: SearchFormData) {
  console.log(searchData);
}


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
    <form onsubmit="${collectSearchData(event)}">
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
            <div><button type="submit">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
