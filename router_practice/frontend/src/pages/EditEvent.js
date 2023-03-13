import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

const EditEventPage = () => {
  /*
    useLoaderData : 똑같이 loader 부분에 접근해서 정보를 가져오는 역할이지만 불러오는 기준에서 가장 가까운 라우터에서 가져옴.
    여기서는 EditRouter가 가장 가깝기 때문에 useLoaderData 사용 시 데이터를 가져오지 않음.
    따라서 부모 라우터에 위치한 loader를 가져오기 위해서는 useRouteLoaderData를 사용해야 함.
   */
  const data = useRouteLoaderData('event-detail');

  return (
    <EventForm event={data.event} />
  );
}

export default EditEventPage;