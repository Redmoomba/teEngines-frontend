import { Fragment, useEffect, useState } from "react";
import applicantLogo from "./../images/applicant.png";
import lawFirmLogo from "./../images/lawFirm.png";
import schoolLogo from "./../images/school.png";
import peopleGreyLogo from "./../images/people.grey.png";
import peopleRelLogo from "./../images/people.png";

const AppChipJones = () => {
  const [relationships, setRelationship] = useState([]);

  return (
    <Fragment>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ background: "lightGrey" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <span className="h1" style={{ color: "darkred" }}>
                Chip Jones
              </span>
              <p className="h6" style={{ indent: "100px" }}>
                Undergraduate: Alabama (1992-1997) | Law School: Columbia
                University (1998-2001)
              </p>
            </div>
            <div className="col-sm-6 text-end">
              <p className="lead">
                Hiring Firm:{" "}
                <em>
                  {" "}
                  <b className="fs-2">Connolly LLP</b>
                </em>
              </p>
            </div>
          </div>
          <br />
          <div className="container-fluid" align="center">
            <div className="row" align="center">
              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div
                  className="card-header"
                  style={{ verticalAlign: "middle" }}
                >
                  <img src={peopleRelLogo} height="20" width="20" />{" "}
                  <b>Edward Bunn</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br /> Columbia University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1998 - 2000
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br />
                    University of Alabama
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1992 - 1997
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Eland Franklin</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br />
                    Columbia University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1999 - 2002
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br /> University of Alabama
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1994 - 1999
                  </li>
                </ul>
              </div>

              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Sarah Hawkins</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b> <br />
                    Columbia University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    2000 - 2003
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br /> University of Alabama
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br /> 1995 - 2000
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Rebecca Knowles</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b> <br />
                    Columbia University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1999 - 2002
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br />
                    University of Alabama
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b>
                    <br /> 1994-1998
                  </li>
                </ul>
              </div>
              {/* Card */}
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </Fragment>
  );
};

export default AppChipJones;
