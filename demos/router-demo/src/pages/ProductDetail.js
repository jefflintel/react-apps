import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.id}</p>
      <p><Link to="..">Back</Link>
      </p>
    </>
  );
};

export default ProductDetail;
