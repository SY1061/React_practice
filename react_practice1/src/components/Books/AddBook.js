import Card from "../UI/Card";
import styles from './AddBook.module.css'
import Button from "../UI/Button";
const AddBook = props => {
    const addBookHandler = event => {
        event.preventDefault();
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addBookHandler}>
                <label htmlFor="author">Author</label>
                <input id="author" type="text"/>
                <label htmlFor="book-name">Book name</label>
                <input id="book-name" type="text"/>
                <Button type="submit">Add Book</Button>
            </form>
        </Card>
    );
}

export default AddBook;