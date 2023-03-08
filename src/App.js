import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import teLogo from "./images/talent-engine-inv.png";
import teBanner from "./images/teBanner.jpeg";

function App() {
  return (
    <div className="container-fluid mt-3" style={{ backgroundImage: teBanner }}>
      <div className="row">
        <div className="col-sm-8">
          <img src={teLogo} width="250" />
        </div>
        <div className="col text-end">
          <Link to="/">
            <span className="badge bg-danger">Logout</span>
          </Link>
        </div>
        <hr className="mb-3"></hr>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/search"
                className="list-group-item list-group-item-action"
              >
                Find Your Relationship
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
