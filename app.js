import { food } from '/food.js';

const foodList = document.getElementById('food-list');

for (let item of food) {
    const foodItem = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    span.classList.add('food-name');
    foodItem.classList.add('food-item');
    img.src = item.img;
    span.textContent = item.name;
    foodItem.append(img, span);
    foodList.append(foodItem);
}

