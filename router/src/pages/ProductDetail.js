import {Link, useParams} from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      {/* 라우터 링크에서 상위 계층으로 올라갈 땐 경로와 라우터 중 선택해야 함. 라우터를 선택 시 부모 라우터로 올라가게 됨.*/}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}

export default ProductDetailPage;