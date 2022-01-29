import { renderSearchFormBlock } from './search-form.js'
import { getTomorrow, getLastDayNextMonth } from './date-utils.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'

// import { getTodosByCount } from './todos.js'

// For lesson 5 tests
import { MyGraphicsPrimitive2D, MyAreaPrimitive2D, MyCircle } from './lesson5.js'

const my2D = new MyCircle(0,0,100,100);
my2D.move(20, -10)
console.log(my2D.getRadius(), my2D.getCenter())

// Finish lesson 5 tests

let startDate = getTomorrow();
let finishDate = getLastDayNextMonth();

const myAmount = localStorage.getItem('favoritesAmount');
const userInfo = localStorage.getItem('user');

const myUser = { username: '', userAvatar: ''}

if (userInfo) {
  const parse = JSON.parse(userInfo)
  myUser.username = parse.username
  myUser.userAvatar = parse.avatar
}

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

// getTodosByCount(10);
