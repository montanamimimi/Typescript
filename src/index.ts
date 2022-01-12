import { renderSearchFormBlock, getTomorrow, getLastDayNextMonth } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

let startDate = getTomorrow();
let finishDate = getLastDayNextMonth();

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Lady Doe', 'avatar.png', 0)
  renderSearchFormBlock(startDate, finishDate);
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
