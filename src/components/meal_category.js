import React, {Component} from 'react';
import FoodList from './food_list';
//props from parents should be, mealType(breakfast,lunch,dinner), data(array of food objects)

class MealCategory extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.mealType}</h1>
        <table className="table">
          <thead className="thead-inverse">
            <tr>
            <th>Food</th>
            <th>Serving</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fats</th>
            <th>Carb</th>
            <th></th>
            </tr>
        </thead>
        {<FoodList foodData = {this.props.foodData} mealType = {this.props.mealType}/>}
        </table>
      </div>
    )
  }
}

export default MealCategory;
