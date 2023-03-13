import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

const Root = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
        <Outlet/>
      </main>
    </>
  );
}

export default Root;