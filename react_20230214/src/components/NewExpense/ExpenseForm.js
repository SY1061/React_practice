import "./ExpenseForm.css";
import {useState} from "react";
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredForm, setEnteredForm] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // 이전 상태의 state 이용해야 할 때 기억할 것.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredForm(!enteredForm);
    };

    const formChangeHandler = () => {
        setEnteredForm(!enteredForm);
    }
// hidden 속성은 과거 스타일이니까 웬만하면 쓰지말 것.
    return (
        <div>
            {
                !enteredForm &&
                <button onClick={formChangeHandler}>
                    Add New Expense
                </button>
            }

            {
                enteredForm &&
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input
                                type="text"
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                            />
                        </div>

                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                value={enteredAmount}
                                min="0.01" step="0.01"
                                onChange={amountChangeHandler}
                            />
                        </div>

                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                value={enteredDate}
                                min="2019-01-01" max="2022-12-31"
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={formChangeHandler} type="button">
                            Cancel
                        </button>
                        <button type="submit">
                            Add Expense
                        </button>
                    </div>
                </form>
            }

        </div>
    );
}

export default ExpenseForm;