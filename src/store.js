import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "malik dasoogi",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Omar AlOmari",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 5,
      customerName: "Osama dasooky",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
  return state;
};

export const propsToState = (props) => {
  return {
    accounts: props.accounts,
  };
};
export const store = createStore(reducer);
