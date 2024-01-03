import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  // let foodItems = [];
  // let foodItems = ["Daal", "Chawal", "Sabji", "Roti", "Doodh", "Ghee"];

  // let textStateArr = useState('User ne daala hua khana: ');
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  // console.log(`Current value of textState: ${textToShow}`);

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      // foodItems.push(newFoodItem)
      setFoodItems(newItems);
      console.log('Add kiya hua khana h: ' + newFoodItem);
    }
    // console.log(event)
    // setTextState(event.target.value)
  }

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App
