import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React , {useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}];
        });
    }
    // <div>를 줄이기 위해서 이미 React 는 Wrapper 지원 해주고 있음. <React.Fragment>
    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </React.Fragment>
    );
}

export default App;
