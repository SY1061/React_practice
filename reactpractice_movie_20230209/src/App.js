import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        // TODO 1 : id 와 같은 동적 값을 넣을 때는 앞에 : 붙이는 것 잊지 않기.
        {
            path: "/movie/:id",
            element: <Detail />
        }
    ])

    return (
      <RouterProvider router={router} />
    );
}

export default App;
