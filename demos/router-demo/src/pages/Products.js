import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "product 1",
  },
  {
    id: "p2",
    title: "product 2",
  },
  {
    id: "p3",
    title: "product 3",
  },
];

const Products = () => {
  return (
    <>
      <h1>This is where the products go</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">Get me out of here</Link>
      </p>
    </>
  );
};

export default Products;
