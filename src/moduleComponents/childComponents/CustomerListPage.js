import React from 'react'
import { Table } from 'react-bootstrap'

const CustomerListPage = () => {
    const details=[{EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"},
    {EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"},
    {EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"},
    {EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"},
    {EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"},
    {EntryType:"level 1",Name:"xyz",LIneOFBusness:"abc",Status:"Good",BussinessOwner:"XYZ"}]
  return (
    <div>


<Table striped bordered hover className='w-50' style={{marginLeft:"600px",marginTop:"-600px",marginLeft:"400px"}}>
  <thead>
    <tr>
      <th>Entry Type</th>
      <th> Name</th>
      <th>LIne OF Busness</th>
      <th>Status</th>
      <th>Bussiness Owner</th>
    </tr>
  </thead>
  <tbody>
      {details.map((value,index)=>{
return(
    <tr>
    <td>{value.EntryType}</td>
    <td>{value.Name}</td>
    <td>{value.LIneOFBusness}</td>
    <td>{value.Status}</td>
    <td>{value.BussinessOwner}</td>
  </tr>
  

)
      })}
   
  </tbody>
</Table>

    </div>
  )
}

export default CustomerListPage