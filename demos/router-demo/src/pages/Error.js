import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    return (
        <>
        <MainNavigation />
        <main>
            <h1>Oh no! An error!</h1>
            <p>Can't find what you're looking for</p>
        </main>
        </>
    )
};

export default ErrorPage;