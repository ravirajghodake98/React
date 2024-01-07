import { useContext } from 'react';
import styles from './WelcomeMessage.module.css'
import { TodoItemsContext } from '../store/todo_item_store';

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p className={styles.welcome}>Bahut hard!!!</p>
}

export default WelcomeMessage;