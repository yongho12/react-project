import React, { useEffect } from "react";
import { fetchCases, fetchTotal} from '../actions/caseActions';
import { useDispatch, useSelector } from "react-redux";

function CasesList(props) {
  const dispatch = useDispatch();
  const cases = useSelector(state => state.cases);
  const total = useSelector((state) => state.total);

  
  //dispatch(fetchTotal());

  useEffect(() => {
   dispatch(fetchCases());
   dispatch(fetchTotal());

  }, []);
 
  console.log(cases);
  console.log("fetch total::::", total);
  return (
    <>
      <div>
        <h1>Total Count: {cases.length} </h1>
      </div>
      <div>
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
                <td>{ca.User.username}</td>
                <td>{ca.patientName}</td>
                <td>{ca.technicianId}</td>
                <td>{ca.submitDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CasesList;
