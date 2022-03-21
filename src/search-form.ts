import { renderBlock } from './lib.js'
import { SearchFormData } from './search-interface.js'
import { getTomorrow, getLastDayNextMonth, convertDate } from './date-utils.js'
import { FlatRentSdk } from './flat-rent-sdk.js'
import { renderSearchResultsBlock } from './search-results.js'

function collectSearchData(e: any) {

    e.preventDefault();
    const checkIn = (<HTMLInputElement>document.getElementById('check-in-date')).value;
    const checkOut = (<HTMLInputElement>document.getElementById('check-out-date')).value;
    const price = (<HTMLInputElement>document.getElementById('max-price')).value;
   
    const startDate: Date = new Date(checkIn);
    const finishDate: Date = new Date(checkOut);
    const maxPrice: number = +price; 

    const letsSearch: SearchFormData = {
    city: 'Санкт-Петербург',
    checkInDate: startDate,
    checkOutDate: finishDate,
    priceLimit: maxPrice
    }
    const newSearch = new FlatRentSdk()
    const results = newSearch.search(letsSearch)
    results.then(resolve => renderSearchResultsBlock(resolve))    
} 

export function renderSearchFormBlock (startDate:Date, finishDate:Date) {

  let start = convertDate(startDate)
  let finish = convertDate(finishDate)
  let tomorrow = convertDate(getTomorrow())
  let lastDayNextMonth = convertDate(getLastDayNextMonth())
  
  renderBlock(
    'search-form-block',
    `
    <form class="searchform">
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

  const form = document.querySelector('.searchform')
  if (form) {
    form.addEventListener('submit', collectSearchData)
  } 
}
