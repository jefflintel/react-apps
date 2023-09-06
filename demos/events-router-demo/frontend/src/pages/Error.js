import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();

  let title = "That doesn't look good";

  let message = "Yikes";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Are you lost";
    message = "Couldn't find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
