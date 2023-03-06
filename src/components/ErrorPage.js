import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Opps!!</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
