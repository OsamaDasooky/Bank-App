import React from "react";
import { connect } from "react-redux";
import { propsToState } from "../store";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdb-react-ui-kit";

export function Home(props) {
  return (
    <MDBContainer style={{ minHeight: "63vh" }}>
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
              <tr>
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
