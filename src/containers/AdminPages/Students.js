import React from "react";
import { MDBCard,MDBCardHeader, MDBCardBody } from "mdbreact";

const columns = ["ID","First Name","Last Name","Email id"];

const data=[
   [1,"Wasif","Walter","wasif@email.com"]
];

const TableEditable = props => {
   return(
      <MDBCard>
         <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
            Table Editable
         </MDBCardHeader>
         <MDBCardBody>
            {/* <MDBTableEditable data={data} columns={columns} striped bordered/> */}
         </MDBCardBody>
      </MDBCard>
   )
}

export default TableEditable;