import styles from './Item.module.css'

const Item = ({ foodItem, handleBuyButton }) => {
  // let { foodItem } = props;

  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} khareed li h.`)
  // }

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>
        {foodItem}
      </span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${foodItem} khareedi hai.`)}
        // onClick={(event) => handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;