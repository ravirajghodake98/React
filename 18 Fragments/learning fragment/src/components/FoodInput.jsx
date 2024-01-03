import styles from './FoodInput.module.css'

const FoodInput = ({ handleOnChangeEvent }) => {
  // const handleOnChangeEvent = (event) => {
  //   console.log(event.target.value)
  // }

  return < input
    type="text"
    placeholder="kya lena h wo daal"
    className={styles.foodInput}
    onChange={handleOnChangeEvent} />
}

export default FoodInput;