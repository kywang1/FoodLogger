export const FETCH_BREAKFAST = 'fetch_breakfast';
export const DELETE_BREAKFAST = 'delete_breakfast';

export const FETCH_LUNCH = 'fetch_lunch';
export const DELETE_LUNCH = 'delete_lunch';

export const FETCH_DINNER = 'fetch_dinner';
export const DELETE_DINNER = 'delete_dinner';

let globalFoodStorage = {
  breakfastStorage:{},
  lunchStorage:{},
  dinnerStorage:{}
};
//Generate some random data about the food that the user has entered
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getFoodData(term, servingSize,storageType) {
    let foodData;
    if (globalFoodStorage[storageType][term]) { //if food already has been previously added
        globalFoodStorage[storageType][term].servingSize+= servingSize;
        return globalFoodStorage[storageType][term];
    } else {
        foodData = {
            food: term,
            servingSize: servingSize,
            calories: randomIntFromInterval(50, 500),
            protein: randomIntFromInterval(0, 100),
            fats: randomIntFromInterval(0, 100),
            carbs: randomIntFromInterval(0, 100)
        };
        foodData.id = Object.keys(globalFoodStorage[storageType]).length + 1;
        globalFoodStorage[storageType][term] = foodData;
    }
    return foodData;
    // foodData.id = `${foodData.calories}${foodData.protein}${foodData.fats}${foodData.carbs}`;
    // return foodData;
}

export function fetchBreakfast(term, servingSize) {
    let request = getFoodData(term, servingSize,"breakfastStorage");
    return {type: FETCH_BREAKFAST, payload: request};
}

//delete by name, not id
export function deleteBreakfast(foodId) {
    let name;
    Object.keys(globalFoodStorage.breakfastStorage).forEach((food) => {
        if (globalFoodStorage.breakfastStorage[food].id === foodId) {
            name = globalFoodStorage.breakfastStorage[food].food;
        }
    });
    return {type: DELETE_BREAKFAST, payload: name}
}

//LUNCH
export function fetchLunch(term, servingSize) {
    let request = getFoodData(term, servingSize,"lunchStorage");
    return {type: FETCH_LUNCH, payload: request};
}

export function deleteLunch(foodId) {
    let name;
    Object.keys(globalFoodStorage.lunchStorage).forEach((food) => {
        if (globalFoodStorage.lunchStorage[food].id === foodId) {
            name = globalFoodStorage.lunchStorage[food].food;
        }
    });
    return {type: DELETE_LUNCH, payload: name}
}

//DINNER
export function fetchDinner(term, servingSize) {
    let request = getFoodData(term, servingSize,"dinnerStorage");
    return {type: FETCH_DINNER, payload: request};
}

export function deleteDinner(foodId) {
    let name;
    Object.keys(globalFoodStorage.dinnerStorage).forEach((food) => {
        if (globalFoodStorage.dinnerStorage[food].id === foodId) {
            name = globalFoodStorage.dinnerStorage[food].food;
        }
    });
    return {type: DELETE_DINNER, payload: name}
}
