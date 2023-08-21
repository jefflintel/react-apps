import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Amazing Food Available for Delivery</h2>
            <p>
                Choose your favorite meal from our wide array of available meals and enjoy a fantastic lunch or dinner at home.
            </p>
            <p>
                Every meal is prepared with high-quality ingredients, made fresh by renowned chefs!
            </p>
        </section>
    )
};

export default MealsSummary;