import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBreakfast,fetchLunch,fetchDinner} from '../actions/index';

class AddBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term:'',
      mealType:'',
      servingSize:1
    };
    this.onFoodAdd = this.onFoodAdd.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.setMealType = this.setMealType.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  setMealType(){
    if(document.getElementById("breakfastSelected").selected){this.setState({mealType:"breakfast"})};
    if(document.getElementById("lunchSelected").selected){this.setState({mealType:"lunch"})};
    if(document.getElementById("dinnerSelected").selected){this.setState({mealType:"dinner"})};

    if(document.getElementById("oneServing").selected){this.setState({servingSize:1})};
    if(document.getElementById("twoServing").selected){this.setState({servingSize:2})};
    if(document.getElementById("threeServing").selected){this.setState({servingSize:3})};
    if(document.getElementById("fourServing").selected){this.setState({servingSize:4})};
  }

  onFoodAdd(event){
    event.preventDefault(); //prevent form from submitting
    //fire action creator that fetches food depending on type
    if(document.getElementById("foodInput").value===""){
      alert("Please enter a food before adding");
    }else{
      if(this.state.mealType === "breakfast"){
        this.props.fetchBreakfast(this.state.term,this.state.servingSize);
      }
      if(this.state.mealType === "lunch"){
        this.props.fetchLunch(this.state.term,this.state.servingSize);
      }
      if(this.state.mealType === "dinner"){
        this.props.fetchDinner(this.state.term,this.state.servingSize);
      }
    }
    this.setState({term:''});
  }

  render(){
    return (
      <form id = "addBar" onSubmit = {this.onFoodAdd} className="input-group">
        <input
          placeholder="Search for Food You Want to Add"
          className="form-control"
          value = {this.state.term}
          onChange = {this.onInputChange}
          id = "foodInput"
        />
        <select id = "selectMeal" className="form-control show-tick">
          <option id="breakfastSelected">Breakfast</option>
          <option id="lunchSelected">Lunch</option>
          <option id="dinnerSelected">Dinner</option>
        </select>
        {/* <label>Choose Serving Size</label> */}
        <select id="servingSizeDropBar" className="form-control">
          <option id = "oneServing">1 serving</option>
          <option id = "twoServing">2 serving</option>
          <option id = "threeServing">3 serving</option>
          <option id = "fourServing">4 serving</option>
        </select>
          <button id="addButton" onClick = {this.setMealType} type = "submit" className = "btn btn-primary">
            Add Food
          </button>
      </form>

    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchBreakfast,fetchLunch,fetchDinner},dispatch);
}

export default connect(null,mapDispatchToProps)(AddBar);
