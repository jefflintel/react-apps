import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("products");
    };

    return (
        <>
        <h1>Welcome to the home page</h1>
        <p>Take me to the <Link to="products">Products</Link></p>
        <button onClick={navigateHandler}>Does this go to products too?</button>
        </>
    );
};

export default HomePage