import classes from './EventItem.module.css';
import {Link, useSubmit} from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm('Are you Sure?');

    if (proceed) {
      /*
        첫 번째 인자 : 제출하려는 데이터,
        두 번째 인자 : 옵션 설정.
       */
      submit(null,{method: 'delete'});
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
