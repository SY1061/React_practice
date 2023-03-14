import EventsList from "../components/EventsList";
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

const EventsPage = () => {
  const {events} = useLoaderData();

  return (
    // Suspense : 다른 데이터가 도착하길 기다리는 동안 fallback 을 보여주고 싶은 경우 사용 가능.
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
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

export const loader = () => {
  /*
    이 페이지에서 움직이는 모든 http 요청을 넣어야 함. 이 프로젝트에선 현재 1개.
    defer 메서드 내부에서 실행되는 메서드들은 무조건 promise를 반환해야 함. defer 메서드 자체가 값 대신 promise를 전달하여
    loader에서 반환되는 값을 연기시키기 위한 메서드.
   */
  return defer({
    events: loadEvents()
  });
}