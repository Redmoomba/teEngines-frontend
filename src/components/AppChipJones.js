import { Fragment, useEffect, useState } from "react";
import applicantLogo from "./../images/applicant.png";
import lawFirmLogo from "./../images/lawFirm.png";
import schoolLogo from "./../images/school.png";
import peopleGreyLogo from "./../images/people.grey.png";
import card from "./subcomponents/card";

const AppChipJones = () => {
  const [relationships, setRelationship] = useState([]);


  return (
    <Fragment>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ background: "#0099E3" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <span className="h1 text-white">Chip Jones</span>
              <p className="h6 text-white" style={{ indent: "100px" }}>
                Undergraduate: UGA (1984-1989) | Law School: Duke (1990-1993)
              </p>
            </div>
            <div className="col-sm-6 text-end text-white">
              <p className="lead">
                Hiring Firm:{" "}
                <em>
                  {" "}
                  <b className="fs-2">Smith Gambrell & Russell LLP</b>
                </em>
              </p>
            </div>
          </div>
          <br />
          <div className="container-fluid" align="center">
            <div className="row" align="center">
              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={applicantLogo} height="30" width="30" />{" "}
                  <b>Obiananma Okeani</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br /> Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1989 - 1991
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br />
                    University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1983 - 1988
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleGreyLogo} height="30" width="30" />{" "}
                  <b>Melanie Walker</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br />
                    Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1989 - 1991
                  </li>
                  <li className="list-group-item">
                    <b>Undergrade:</b> <br /> University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1983 - 1988
                  </li>
                </ul>
              </div>

              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleGreyLogo} height="30" width="30" />{" "}
                  <b>Sasha Greenberg</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b> <br />
                    Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1989 - 1991
                  </li>
                  <li className="list-group-item">
                    <b>Undergrade:</b> <br /> University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br /> 1983 - 1988
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleGreyLogo} height="30" width="30" />{" "}
                  <b>Joshua Spielman</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b> <br />
                    Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1989 - 1991
                  </li>
                  <li className="list-group-item">
                    <b>Undergrade:</b> <br />
                    University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b>
                    <br /> 1983 - 1988
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
