import { renderSearchFormBlock, getTomorrow, getLastDayNextMonth } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

let startDate = getTomorrow();
let finishDate = getLastDayNextMonth();

const myAmount = localStorage.getItem('favoritesAmount');
const myUser = JSON.parse(localStorage.getItem('user'));

const checkedUser = getUserData(myUser.username, myUser.userAvatar);
const checkedAmount = getFavoritesAmount(myAmount);

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(checkedUser.username, checkedUser.userAvatar, checkedAmount)
  renderSearchFormBlock(startDate, finishDate);
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})


