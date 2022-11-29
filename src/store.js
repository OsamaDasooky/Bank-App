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
  counter: 10,
};

const reducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "MINES_ONE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD_ONE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_USER":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case "DELETE_USER":
      let newArr = state.accounts.filter((ele) => {
        return ele.id != action.payload;
      });
      return {
        ...state,
        accounts: newArr,
      };
  }
  return state;
};

export const propsToState = (props) => {
  return {
    accounts: props.accounts,
    counter: props.counter,
  };
};

export const store = createStore(reducer);
