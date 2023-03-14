import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

const EventDetailPage = () => {
  const {event, events} = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent}/>}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents}/>}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
    /*
      new response 생성으로 오류를 보여주고 싶을 땐 json 형식으로 변환해서 보내고 받는 곳에서도 JSON.parse 로 파싱해줘야 함.
      여기선 error.js에 위치.
     */
    throw json(
      {message: 'Could not fetch events.'},
      {
        status: 500
      }
    );
  } else {
    /*
      바로 useLoaderData() 로 값을 줄 때는 상관 없었으나 defer() 메서드를 거쳐서 줄 땐 수동으로 parsing 해야함.
     */
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = async ({request, params}) => {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

export const action = async ({request, params}) => {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    // request 로 받아오는 method 값은 eventItem에 존재.
    method: request.method
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event.'}, {status: 500});
  }

  return redirect('/events');
}