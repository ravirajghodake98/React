import styles from './FoodInput.module.css'

const FoodInput = ({ handleKeyDown }) => {
  // const handleOnChangeEvent = (event) => {
  //   console.log(event.target.value)
  // }

  return < input
    type="text"
    placeholder="kya lena h wo daal"
    className={styles.foodInput}
    onKeyDown={handleKeyDown} />
}

export default FoodInput;