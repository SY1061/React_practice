import EventsList from "../components/EventsList";
import {json, useLoaderData} from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return (
      <EventsList events={events} />
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
    /*
      새롭게 response 생성으로 오류를 보여주고 싶을 땐 json 형식으로 변환해서 보내고 받는 곳에서도 JSON.parse 로 파싱해줘야 함.
      여기선 error.js에 위치.
     */
    throw json(
      {message: 'Could not fetch events.'},
      {
        status: 500
      }
    );
  } else {
    return response;
  }
}