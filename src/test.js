<div key={m.id}>
  <table className="table table-stripped table-hover">
    <thead>
      <tr>
        <th>
          <img src={applicant} height="50" width="50"></img> {m.applicant}
        </th>
        <th>
          <img src={lawFirm} height="50" width="50"></img> {m.lawFirm}
        </th>
      </tr>
    </thead>
  </table>
  <table className="table table-stripped table-hover">
    <thead>
      <tr>
        <th>School</th>
        <th>Relationships</th>
      </tr>
      {m.relatedPeople.map((person) => (
        <div key={person.id}>
          <div className="col"> {m.schoolInCommon}</div>
          <div className="col-6">{person.name}</div>
          <div className="col"></div>
        </div>
      ))}
      <tr></tr>
    </thead>
  </table>
</div>;


{relationships.map((m) => (
  <div key={m.id}>
    <table className="table table-stripped table-hover">
      <tr className="row">
        <td className="col">
          <img
            src={applicantLogo}
            alt="Applicant"
            height="50"
            width="50"
          ></img>{" "}
          {m.applicant}
        </td>
        <td className="col">
          <img
            src={lawFirmLogo}
            alt="Law Firm"
            height="50"
            width="50"
          ></img>{" "}
          {m.lawFirm}
        </td>
        <td className="col">
          <img
            src={schoolLogo}
            alt="Applicant"
            height="50"
            width="50"
          ></img>{" "}
          {m.schoolInCommon}
        </td>
      </tr>
      <tbody>
        {m.relatedPeople.map((person) => (
          <tr className="row" key={person.id}>
            <td className="col text-center justify-content-md-center">
              {person.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}