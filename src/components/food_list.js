import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {deleteBreakfast,deleteLunch,deleteDinner} from '../actions';

//takes a foodData as props in order to generate table of food and its
//associated nutritional information
//props from parents: foodData, mealType("Breakfast","Dinner","Lunch")
class FoodList extends Component{
  //renders list of food that user has added.
  renderFoodList(){
    return _.map(this.props.foodData,(food)=>{
      return (
        <tr key = {food.id}>
          <th scope = "row">{food.food}</th>
          <td>{food.servingSize}</td>
          <td>{food.calories}</td>
          <td>{food.protein}g</td>
          <td>{food.fats}g</td>
          <td>{food.carbs}g</td>
          <td>
            <button onClick={this.onFoodDelete.bind(this,food.id)} type = "button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      );
    });
  }

  //User has decided to remove a food from their list. Find meal type, and send appropriate
  //action creators to remove this food.
  onFoodDelete(foodId){
    if(this.props.mealType === "Breakfast"){
      this.props.deleteBreakfast(foodId);
    }
    if(this.props.mealType === "Lunch"){
      this.props.deleteLunch(foodId);
    }
    if(this.props.mealType === "Dinner"){
      this.props.deleteDinner(foodId);
    }
  }

  render(){
    return (
      <tbody>
        {this.renderFoodList()}
      </tbody>
    )
  }
}

export default connect(null,{deleteBreakfast,deleteLunch,deleteDinner})(FoodList);
