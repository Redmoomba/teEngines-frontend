import { Fragment, useEffect, useState } from "react";
import applicantLogo from "./../images/applicant.png";
import lawFirmLogo from "./../images/lawFirm.png";
import schoolLogo from "./../images/school.png";
import peopleGreyLogo from "./../images/people.grey.png";
import peopleRelLogo from "./../images/people.png"

const AppJohnSmith = () => {
  const [relationships, setRelationship] = useState([]);

  useEffect(() => {
    let tmpApplicant = [
      {
        id: 1,
        Applicant: {
          applicant: "Joshua Spielman",
          lawFirm: "Morris and Manning",
        },
        Relationship: [
          {
            schoolName: "Harvard",
            People: [
              { name: "John Doe" },
              { name: "Jane Doe" },
              { name: "Kerri Gilliam" },
              { name: "Chris Gilliam" },
            ],
          },
          {
            schoolName: "Georgetown",
            People: [
              { name: "john michael" },
              { name: "Jane Smith" },
              { name: "Kerri Jones" },
              { name: "Chris Blakes" },
            ],
          },
        ],
      },
    ];

    //   const headers = new Headers();
    //   headers. append("Content-Type", "application/json");

    //   const requestOptions = {
    //     method: "GET",
    //     headers,
    //     headers,
    //   };

    //   fetch(`http://localhost:8081/FindRelationship`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setRelationship([data]);
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    setRelationship(tmpApplicant);
  }, []);

  return (
    <Fragment>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ background: "lightGrey" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <span className="h1" style={{color: "darkred"}}>John Smith</span>
              <p className="h6" style={{ indent: "100px" }}>
                Undergraduate: UGA (1984-1989) | Law School: Duke (1990-1993)
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
                  <b>Michael Hedge</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br /> Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1988 - 1990
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br />
                    University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1982 - 1987
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Kerri Gilliam</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b>
                    <br />
                    Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1990 - 1994
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br /> University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1985 - 1989
                  </li>
                </ul>
              </div>

              {/* Card */}
              <div className="card me-3" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Sasha Spears</b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Law School:</b> <br />
                    Duke University
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br />
                    1990 - 1993
                  </li>
                  <li className="list-group-item">
                    <b>Undergraduate:</b> <br /> University of Georgia
                  </li>
                  <li className="list-group-item">
                    <b>Years Attended:</b> <br /> 1981 - 1986
                  </li>
                </ul>
              </div>
              {/* Card */}
              <div className="card" style={{ width: "24%" }}>
                <div className="card-header">
                  <img src={peopleRelLogo} height="30" width="30" />{" "}
                  <b>Joshua Fowler</b>
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
                    <b>Undergraduate:</b> <br />
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

export default AppJohnSmith;
