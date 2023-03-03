import styles from './User.module.css';
import {Component} from "react";

class User extends Component{
    render() {
        return <li className={styles.user}>{this.props.name}</li>;
    }
}

// const User = (props) => {
//     return <li className={styles.user}>{props.name}</li>;
// };

export default User;