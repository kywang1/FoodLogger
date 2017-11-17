# Food Logger Application

#### General Information
- Author: Kyle Wang
- Application was created with create-react-app

# Instruction
1) Run 'npm install' to install all node-modules.
2) Afterwards run 'npm start' to start Application
3) If not automatically redirected to browser, manually go to local host 3000

### Components
#### App.js
This is our application components, where we place all of our other components.
This is were we use mapStateToProps to retrieve our state, and pass it as data
to all of our other components, in order to maintain that our source of data
comes from one location

#### add_bar.js
This component is used to render a search bar for the user to add their food,
a drop down bar to pick if they wish to add the meal to breakfast, dinner,
or lunch, another drop down bar to add the serving size of the type of food,
and a button the user clicks to perform the action to add the food to the table.
This component has three actions binded to it, fetchBreakfast, fetchLunch, and
fetchDinner. These are used to send actions to our reducers to perform adding of
food.

#### meal_category.js
This component takes in what the mealType (breakfast,dinner,lunch) is, and
foodData, from the its parent. It creates a table for each the mealType, and
generates a table with its header. It then has a FoodList component that will
generate the data for the table.

#### food_list.js
This component takes in foodData, and mealType from its parent component. It
takes foodData and generate the table data. Each row of the table data is given
a button that can remove from the table data row. We bind deleteBreakfast,
deleteLunch, deleteDinner to this component in order to send delete actions to
our reducers

#### nutrional_overview.js
This component is responsible for showing the nutritional overview for the day.
It takes data of breakfast, lunch, and dinner from its parent component
to compute the daily total of calories, carbs, fats, and protein. This data is
then rendered onto a table.

### Actions
We have 6 actions:
```
export const FETCH_BREAKFAST = 'fetch_breakfast';
export const DELETE_BREAKFAST = 'delete_breakfast';

export const FETCH_LUNCH = 'fetch_lunch';
export const DELETE_LUNCH = 'delete_lunch';

export const FETCH_DINNER = 'fetch_dinner';
export const DELETE_DINNER = 'delete_dinner';
```
In our fetch actions, we pass in a term and servingSize and parameter. The term,
which is the food that the user entered, will be looked up in our
globalFoodStorage, if the user already as eaten this, it will increment the
servingSize. In our getFoodData function, we go search in our globalFoodStorage
to see if the food has been previously added, if it hasn't, we add the food into
our storage. Ideally this would be done with a database, something like mongodb.
Our globalFoodStorage variable is broken down into three objects for storing
different mealType. Our fetch actions returns the food if it was found, or
creates a new one if it doesn't exist in our storage. Creation of food data,
such as carbs, calories, and etc are generated through a random generator.
The delete actions removes the food to be deleted from storage, and sends an
action to our reducer specifying the food to be deleted from our state.

### Reducers
Our combineReducers handles our state, which consist of the different foods that
the user has entered for their three meals. Each reducer handles the actions of
adding and deleting from our state.
