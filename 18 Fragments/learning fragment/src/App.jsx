import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

  // let foodItems = [];
  let foodItems = ["Daal", "Chawal", "Sabji", "Roti", "Doodh", "Ghee"];
  let textToShow = 'User ne daala hua khana: '

  const handleOnChangeEvent = (event) => {
    console.log(event.target.value)
    textToShow = event.target.value
  }

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleOnChangeEvent={handleOnChangeEvent}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  )
}

export default App
