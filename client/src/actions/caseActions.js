// import * as APIUtil from "../util/apiUtil";

export const RECEIVE_CASES = "RECEIVE_CASES";
export const RECEIVE_TOTAL = "RECEIVE_TOTAL";
export const RECEIVE_NEW = "RECEIVE_NEW";

const receiveCases = (cases) => {
  return {
    type: RECEIVE_CASES,
    cases: cases,
  };
};

const receiveTotal = (total) => {
    return {
      type: RECEIVE_TOTAL,
      total: total,
    };
}

const receiveNew = (newCase) => {
  return {
    type: RECEIVE_NEW,
    newCase: newCase,
  };
};

export const fetchCases = () => async (dispatch) => {
    const response = await fetch("/api/cases");
    if (response.ok) {
        const {cases} = await response.json();
        console.log(cases);
        dispatch(receiveCases(cases));             
    }
}

export const fetchTotal = () => async (dispatch) => {
    const response = await fetch("/api/cases/total");
    if (response.ok) {
        const { total } = await response.json();
        console.log("total:::::", total);
        dispatch(receiveTotal(total));
    }
}

//create new case
export const createNewCase = ({nc}) => async (dispatch) => {
  const response = await fetch("/api/cases/newcase", {
    method: "PUT",
    //!!!!
    body: JSON.stringify({nc}),
    headers: { "Content-Type": "application/json",}
   });
  if (response.ok) {
    const { newCase } = await response.json();
    console.log("New Case:::::", newCase);
    dispatch(receiveNew(newCase));
  }
};


