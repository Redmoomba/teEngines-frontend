import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };

  const handleSearch = (event) => {
    if (message.toLocaleLowerCase() === "John Smith".toLowerCase()) {
      navigate("/AppJohnSmith");
    } else if (message.toLocaleLowerCase() === "Chip Jones".toLowerCase()) {
      navigate("/AppChipJones");
    }
  };

  return (
    <Fragment>
      <div
        className="jumbotron jumbotron-md"
        style={{ background: "lightgray" }}
      >
        {/* start Form */}
        <div className="container" style={{ padding: "12px" }}>
          <form>
            <div className="row" style={{ padding: "5px" }}>
              <div>
                <label htmlFor="inputCity">Applicant</label>
                <input
                  type="text"
                  name="SearchInput"
                  className="form-control"
                  placeholder="Applicant name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div align="center"><br/>
              <button
                onClick={handleSearch}
                className="btn btn-outline-primary"
              >
                Search
              </button>
            </div>
          </form>

          {/* end form */}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
