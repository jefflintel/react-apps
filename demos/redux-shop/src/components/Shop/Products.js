import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", 
    title: "A book", 
    price: 8, 
    description: "A test book" },
  {
    id: "p2",
    title: "A different book",
    price: 4,
    description: "A second test book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}        
      </ul>
    </section>
  );
};

export default Products;
