import React from "react";
import { connect } from "react-redux";
import { propsToState } from "../store";
import { useDispatch } from "react-redux";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import Form from "./Form";

export function Home(props) {
  const dispatch = useDispatch();
  const increment = {
    type: "ADD_ONE",
  };

  const decrement = {
    type: "MINES_ONE",
  };

  return (
    <MDBContainer style={{ minHeight: "63vh" }}>
      <div className="text-center">
        <p className="h2">{props.counter}</p>
        <MDBBtn
          color="dark"
          onClick={() => {
            dispatch(increment);
          }}
        >
          add{" "}
        </MDBBtn>
        <MDBBtn
          color="danger"
          className="ms-3"
          onClick={() => {
            dispatch(decrement);
          }}
        >
          decr
        </MDBBtn>
      </div>
      <Form />
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">customer Name</th>
            <th scope="col">account Number</th>
            <th scope="col">account Type</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {props.accounts.map((ele) => {
            return (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.customerName}</td>
                <td>{ele.accountNumber}</td>
                <td>{ele.accountType}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

export default connect(propsToState)(Home);
