import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

/*
라우터를 정의할 수 있는 다른 방법. createRoutesFromElements => <Route />

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />}/>
  </Route>
);

 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        /* index: true => 부모 라우트가 활성화되어 있을시 표시되는 라우터를 의미. 즉, 기본 페이지는 path 대신 활용 가능.
          오히려 최상위 라우터의 경로가 바뀔 수도 있으므로 path 보다 안전하다.
        */
        index: true,
        element: <HomePage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'products/:productId',
        element: <ProductDetailPage />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
