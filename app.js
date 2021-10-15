import { food } from '/food.js';

for (let foodItem of food) {
    const foodItem = document.createElement('li');
    const foodList = document.createElement('ul');
    
    foodItem.textContent = food.name;
    foodList.textContent = food;


    

}