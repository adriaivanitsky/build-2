import { food } from '/food.js';

for (let foodItem of food) {
    const foodItem = document.createElement('li');
    const foodList = document.createElement('ul');
    const img = document.createElement('img');
    img src = "./avocado.png"
    
    foodItem.textContent = food.name;
    foodList.textContent = food;
}