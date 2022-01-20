import { renderBlock } from './lib.js'

export function getUserData(username: unknown, userAvatar: unknown) {
  let checkedUser = {
    username: 'Not set ',
    userAvatar: 'avatar.png'
  }
  if (typeof username === "string") {
    checkedUser.username = username;
  }
  if (typeof userAvatar === "string") {
    checkedUser.userAvatar = userAvatar;
  }  
  return checkedUser
}

export function getFavoritesAmount(favoritesAmount: unknown) {
  let checkedAmount: number = 0;
  favoritesAmount = +favoritesAmount;
  if (typeof favoritesAmount === "number") {
    checkedAmount = favoritesAmount;
  }  
  return checkedAmount
}

export function renderUserBlock (userName:string, userPicture:string, favoriteItemsAmount?:number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = !!favoriteItemsAmount 
  
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="./img/${userPicture}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
