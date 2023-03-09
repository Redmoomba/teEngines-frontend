import { Fragment } from "react";
import { Link } from "react-router-dom";
import breifcase from "./../images/iconBriefcase.grey.png";

const ApplicantAnalytics = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "white",
          opacity: "0.90",
          borderRadius: ".5rem",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <div>
          <h1>LawCareer</h1>
        </div>
        <hr />
        <div className="row" style={{ opacity: "1" }}>
          <div className="col">
            <b>
              Applicant Analytics <br />
              at a glance
            </b>
            <br />
            <br />
            <a href="!#" style={{ color: "red" }}>
              View all anaytics
            </a>
          </div>
          <div className="col">
            {/* jobs */}
            <div className="col text-center">
              <img src={breifcase} height="20" width="20"></img> Jobs
            </div>
            <div className="row text-center">
              <div className="col text-center">
                <h1>11</h1>
                <h4 style={{ color: "grey" }}>Online</h4>
              </div>
              <div className="col text-center">
                <h1>22</h1> <h4 style={{ color: "grey" }}>Total</h4>
              </div>
            </div>
            {/* jobs */}
          </div>
          <div className="col">
            {/* applicants */}
            <div className="col text-center">
              <img src={breifcase} height="20" width="20"></img> Applicants
            </div>
            {/* row */}
            <div className="row text-center">
              {" "}
              <div className="col text-center">
                <h1>503</h1> <h4 style={{ color: "grey" }}>New</h4>
              </div>
              <div className="col text-center">
                <h1>620</h1> <h4 style={{ color: "grey" }}>Total</h4>
              </div>
              {/* row */}
              {/* row */}
            </div>
            {/* row */}
            {/* applicants */}
          </div>
          <div className="col">
            <div className="col text-center">
              <img src={breifcase} height="20" width="20"></img> Upcoming
              Interviews
              <br />
              <br />
              No Interviews Scheduled
              <br />
              <br />
              <a href="!#" style={{ color: "red" }}>
                View Calendar &gt;
              </a>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <h3>Messages</h3>
          <div className="container-fluid">
            <table className="table">
              <thead>
                <tr style={{ color: "grey", backgroundColor: "lightgrey" }}>
                  <th scope="col">
                    <div>1 Message</div>
                  </th>
                  <th className="text-end">
                    <button type="button" className="btn btn-danger">
                      Mark all as Read
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ color: "grey" }}>
                    <img src={breifcase} height="20" width="20"></img> Your
                    applicant download report has been generated, download the
                    report here:{" "}
                    <a href="!#" style={{ color: "red" }}>
                      Download Here
                    </a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-end">
            <button type="button" className="btn btn-danger">
              Create a New Job
            </button>{" "}
            <button type="button" className="btn btn-light">
              View All Applicants
            </button>
          </div>
          {/* table */}
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="input-group">
                      <div className="form-outline">
                        <input
                          type="search"
                          id="form1"
                          placeholder="title, job code or location"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="btn btn-primary">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col" className="text-center">
                    New
                  </th>
                  <th scope="col" className="text-center">
                    Total
                  </th>
                  <th scope="col" className="text-center">
                    Distribution
                  </th>
                  <th scope="col" className="text-center">
                    Job Code
                  </th>
                  <th scope="col" className="text-center">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <h5>
                        <a href="!#" style={{ color: "darkred" }}>
                          Canidate Development
                        </a>
                      </h5>
                      <span style={{ color: "grey" }}>
                        Click to Add or Remove Tags
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <h3>3</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    {" "}
                    <div>
                      <h3>4</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    <a href="!#" style={{ color: "grey" }}>
                      None
                    </a>
                  </td>
                  <td className="text-center">1000002</td>
                  <td className="text-center">Birmingham, Al</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <h5>
                        <a href="!#" style={{ color: "darkred" }}>
                          Commercial Litigation Associate
                        </a>
                      </h5>
                      <span style={{ color: "grey" }}>
                        Click to Add or Remove Tags
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <h3>0</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    {" "}
                    <div>
                      <h3>0</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    <a href="!#" style={{ color: "grey" }}>
                      None
                    </a>
                  </td>
                  <td className="text-center">1000011</td>
                  <td className="text-center">Orlando, Fl</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <h5>
                        <a href="!#" style={{ color: "darkred" }}>
                          Insurance & Financial Litigation Associate
                        </a>
                      </h5>
                      <span style={{ color: "grey" }}>
                        Click to Add or Remove Tags
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <h3>25</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    {" "}
                    <div>
                      <h3>25</h3>
                      <span style={{ color: "grey" }}>Applicants</span>
                    </div>
                  </td>
                  <td className="text-center">
                    <a href="!#" style={{ color: "grey" }}>
                      None
                    </a>
                  </td>
                  <td className="text-center">1000011</td>
                  <td className="text-center">
                    Atlanta, GA, Nashville, TN <br /> Birmingham, AL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table */}
        </div>
      </div>
    </Fragment>
  );
};

export default ApplicantAnalytics;
