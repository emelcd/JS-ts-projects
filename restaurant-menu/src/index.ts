import './style.css'

const main = document.querySelector('main')!

const imgs = [
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-684x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash-683x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/avocado-tree-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/meal-wheel-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits-777x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/06/small-donut-with-raspberry-on-top-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/coffee-love-tornado-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/orange-lemonade-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-tomatoes-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pouring-water-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/kiwi-pinball-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/pumpkin-soup-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/11/fresh-beef-burger-takeaway-768x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/fresh-coconut-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry-1024x761.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-819x1024.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2021/05/forest-fruit-waffle-819x1024.jpg",
]

interface IMenuItem {
  name: string,
  price: number,
  description: string,
  image: string,
  tags: string[],
}

// create a css class
const menuItem = (item: IMenuItem) => {
  const { name, price, description, image, tags } = item
  const itemElement = document.createElement('div')
  itemElement.classList.add('menu-item')
  itemElement.innerHTML = `
    <img src="${image}" alt="${name}" />
    <h2 class="name">${name}</h2>
    <h3 class="price">${price}</h3>
    <p class="description">${description}</p>
    <p class="tags">${tags.join(' ')}</p>
  `
  return itemElement
}



