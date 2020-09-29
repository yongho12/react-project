import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";
import Case from "./Case";

function CasesList(props) {
  const [cases, setCases] = useState([]);
//   const {} = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/cases");
      const responseData = await response.json();
      console.log(responseData);
      setCases(responseData.cases);
    }
    fetchData();
  }, []);


  return (
    <>
      <table className="table-cases">
        <thead>
          <tr>
            <th></th>
            <th>Case #</th>
            <th>Provider</th>
            <th>Patient</th>
            <th>Technician</th>
            <th>Clinician</th>
            <th>Submit Date</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((ca) => (
            <tr key={ca.id}>
              <td>{ca.id}</td>
              <td>{ca.providerId}</td>
              <td>{ca.id}</td>
              <td>{ca.id}</td>
              <td>{ca.submitDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CasesList;
