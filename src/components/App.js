import React, {Component} from 'react';
import {connect} from 'react-redux';
import MealCategory from './meal_category';
import AddBar from './add_bar';
import NutrionalOverview from './nutrional_overview';

class App extends Component{
  toggleContainer(containerSelect){
    let container = document.getElementById(containerSelect);
    // document.getElementById("breakfastContainer").style.display = "none";
    if(container.style.display === "none"){
      this.unfade(container);
      // container.style.display = "block";
    }else{
      this.fade(container);
      // container.style.display = "none";
    }
  }

  fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 35);
  }

  unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 35);
  }

  render(){
    return (
      <div>
        <h1 className = "display-2" id="appTitle">Welcome To Food Logger</h1>
        <div className="container">
          <AddBar/>
        </div>
        <div className="container">
          <NutrionalOverview
            breakfastData={this.props.breakfastFoods}
            lunchData={this.props.lunchFoods}
            dinnerData={this.props.dinnerFoods}
          />
        </div>
        <div className = "container">
          <button onClick={this.toggleContainer.bind(this,"breakfastContainer")} id="breakfastBtn" type="button" className="btn btn-primary btn-lg toggleButton">Breakfast</button>
          <button onClick={this.toggleContainer.bind(this,"lunchContainer")} id="lunchBtn" type="button" className="btn btn-primary btn-lg toggleButton">Lunch</button>
          <button onClick={this.toggleContainer.bind(this,"dinnerContainer")} id="dinnerBtn" type="button" className="btn btn-primary btn-lg toggleButton">Dinner</button>
        </div>
        <div id = "breakfastContainer" className = "container">
          <MealCategory mealType = "Breakfast" foodData={this.props.breakfastFoods}/>
        </div>
        <div id = "lunchContainer" className = "container">
          <MealCategory mealType = "Lunch" foodData={this.props.lunchFoods}/>
        </div>
        <div id = "dinnerContainer" className="container">
          <MealCategory mealType = "Dinner" foodData={this.props.dinnerFoods}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {breakfastFoods:state.breakfastFoods,lunchFoods:state.lunchFoods,dinnerFoods:state.dinnerFoods};
}

export default connect(mapStateToProps)(App);
