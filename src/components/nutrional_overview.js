import React, {Component} from 'react';

//props from parents breakfastData,lunchData,dinnerData
class NutrionalOverview extends Component{

  getTotalData(){
    let totalBreakfastCalories = 0, totalBreakfastCarbs = 0,totalBreakfastFats = 0,totalBreakfastProtein = 0;
    let totalLunchCalories = 0, totalLunchCarbs = 0,totalLunchFats = 0,totalLunchProtein = 0;
    let totalDinnerCalories = 0,totalDinnerCarbs = 0,totalDinnerFats = 0,totalDinnerProtein = 0;

    Object.keys(this.props.breakfastData).forEach((food)=>{
      totalBreakfastCalories += this.props.breakfastData[food].calories*this.props.breakfastData[food].servingSize
      totalBreakfastCarbs+= this.props.breakfastData[food].carbs*this.props.breakfastData[food].servingSize
      totalBreakfastFats+= this.props.breakfastData[food].fats*this.props.breakfastData[food].servingSize
      totalBreakfastProtein+= this.props.breakfastData[food].protein*this.props.breakfastData[food].servingSize
    });

    Object.keys(this.props.lunchData).forEach((food)=>{
      totalLunchCalories += this.props.lunchData[food].calories*this.props.lunchData[food].servingSize
      totalLunchCarbs+= this.props.lunchData[food].carbs*this.props.lunchData[food].servingSize
      totalLunchFats+= this.props.lunchData[food].fats*this.props.lunchData[food].servingSize
      totalLunchProtein+= this.props.lunchData[food].protein*this.props.lunchData[food].servingSize
    });

    Object.keys(this.props.dinnerData).forEach((food)=>{
      totalDinnerCalories += this.props.dinnerData[food].calories*this.props.dinnerData[food].servingSize
      totalDinnerCarbs+= this.props.dinnerData[food].carbs*this.props.dinnerData[food].servingSize
      totalDinnerFats+= this.props.dinnerData[food].fats*this.props.dinnerData[food].servingSize
      totalDinnerProtein+= this.props.dinnerData[food].protein*this.props.dinnerData[food].servingSize
    });
    let totalcalories = totalBreakfastCalories+totalLunchCalories+totalDinnerCalories;
    let totalcarbs = totalBreakfastCarbs+totalLunchCarbs+totalDinnerCarbs;
    let totalfats = totalBreakfastFats+totalLunchFats+totalDinnerFats;
    let totalprotein = totalBreakfastProtein+totalLunchProtein+totalDinnerProtein
    let dataOfTotal = {
      breakfastCalories:totalBreakfastCalories,breakfastCarbs:totalBreakfastCarbs,
      breakfastFats:totalBreakfastFats,  breakfastProtein:totalBreakfastProtein,
      lunchCalories:totalLunchCalories,lunchCarbs:totalLunchCarbs,
      lunchFats:totalLunchFats,lunchProtein:totalLunchProtein,
      dinnerCalories:totalDinnerCalories,dinnerCarbs:totalDinnerCarbs,
      dinnerFats:totalDinnerFats,dinnerProtein:totalDinnerProtein,
      totalCalories:totalcalories,totalCarbs:totalcarbs,
      totalFats:totalfats,totalProtein:totalprotein
    };
    return dataOfTotal;
  }

  renderData(){
    let data = this.getTotalData();
    return (
      <tbody>
      <tr>
        <th scope="row">Breakfast</th>
        <td>{data.breakfastCalories}</td>
        <td>{data.breakfastCarbs}g</td>
        <td>{data.breakfastFats}g</td>
        <td>{data.breakfastProtein}g</td>
      </tr>
      <tr>
        <th scope="row">Lunch</th>
        <td>{data.lunchCalories}</td>
        <td>{data.lunchCarbs}g</td>
        <td>{data.lunchFats}g</td>
        <td>{data.lunchProtein}g</td>
      </tr>
      <tr>
        <th scope="row">Dinner</th>
        <td>{data.dinnerCalories}</td>
        <td>{data.dinnerCarbs}g</td>
        <td>{data.dinnerFats}g</td>
        <td>{data.dinnerProtein}g</td>
      </tr>
      <tr>
        <th scope="row">Total</th>
        <td><b>{data.totalCalories}</b></td>
        <td><b>{data.totalCarbs}g</b></td>
        <td><b>{data.totalFats}g</b></td>
        <td><b>{data.totalProtein}g</b></td>
      </tr>
    </tbody>
    )
  }

  render(){
    return (
      <div>
        <h1>Nutrional Overview for the Day</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Total Calories</th>
              <th>Total Carbs</th>
              <th>Total Fats</th>
              <th>Total Protein</th>
            </tr>
          </thead>
          {this.renderData()}
        </table>
      </div>
    )
  }
}

export default NutrionalOverview;
