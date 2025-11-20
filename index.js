const images = [
  {
    image: 'https://i.ibb.co/3N3KkNS/food-avocadotoast.jpg',
    alt_text: 'food-avocadotoast',
  },
  {
    image: 'https://i.ibb.co/grVFpy9/food-burger.jpg',
    alt_text: 'food-burger',
  },
  {
    image: 'https://i.ibb.co/JvjdLXh/food-chickenfingers.jpg',
    alt_text: 'food-chickenfingers',
  },
  {
    image: 'https://i.ibb.co/cQxmZsF/food-poutine.jpg',
    alt_text: 'food-poutine',
  },
  {
    image: 'https://i.ibb.co/YDYgB6J/food-ribs.jpg',
    alt_text: 'food-ribs',
  },
  {
    image: 'https://i.ibb.co/Lp1sJ2G/food-sandwich.jpg',
    alt_text: 'food-sandwich',
  },
  {
    image: 'https://i.ibb.co/Qn4mLHc/food-sausage.jpg',
    alt_text: 'food-sausage',
  },
  {
    image: 'https://i.ibb.co/mFjbcZV/food-steak.jpg',
    alt_text: 'food-steak',
  },
  {
    image: 'https://i.ibb.co/Bq2ZRWc/food-tacos.jpg',
    alt_text: 'food-tacos',
  },
];

const elements = document.querySelectorAll('.gallery-content img');
elements[0].src = 'https://i.ibb.co/3N3KkNS/food-avocadotoast.jpg';
elements[1].src = 'https://i.ibb.co/grVFpy9/food-burger.jpg';
elements[2].src = 'https://i.ibb.co/JvjdLXh/food-chickenfingers.jpg';
elements[3].src = 'https://i.ibb.co/cQxmZsF/food-poutine.jpg';
elements[4].src = 'https://i.ibb.co/YDYgB6J/food-ribs.jpg';
elements[5].src = 'https://i.ibb.co/Lp1sJ2G/food-sandwich.jpg';
elements[6].src = 'https://i.ibb.co/Qn4mLHc/food-sausage.jpg';
elements[7].src = 'https://i.ibb.co/mFjbcZV/food-steak.jpg';
elements[8].src = 'https://i.ibb.co/Bq2ZRWc/food-tacos.jpg';

elements[0].alt = 'food-avocadotoast';
elements[1].alt = 'food-burger';
elements[2].alt = 'food-chickenfingers';
elements[3].alt = 'food-poutine';
elements[4].alt = 'food-ribs';
elements[5].alt = 'food-sandwich';
elements[6].alt = 'food-sausage';
elements[7].alt = 'food-steak';
elements[8].alt = 'food-tacos';

elements[0] = elements[0].classList.add('border-md');
elements[1] = elements[1].classList.add('border-md');
elements[2] = elements[2].classList.add('border-md');
elements[3] = elements[3].classList.add('border-md');
elements[4] = elements[4].classList.add('border-md');
elements[5] = elements[5].classList.add('border-md');
elements[6] = elements[6].classList.add('border-md');
elements[7] = elements[7].classList.add('border-md');
elements[8] = elements[8].classList.add('border-md');
