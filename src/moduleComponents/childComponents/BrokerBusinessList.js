import React from 'react'
import { Table } from 'react-bootstrap'

const BrokerBusinessList = () => {
    const BrokerBusinessList=[{Name:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{Name:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{Name:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"}
    ,{Name:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{Name:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"}]
  return (
    <div>


<Table striped bordered hover className='w-50'  style={{marginLeft:"600px",marginTop:"-600px",marginLeft:"400px"}}>
  <thead>
    <tr>
      <th>Name</th>
      <th> LineOFBusiness</th>
      <th>Status</th>
      <th>Cordinator </th>
    </tr>
  </thead>
  <tbody>
      {BrokerBusinessList.map((value)=>{
return(
    <tr>
    <td>{value.Name}</td>
    <td>{value.LineOFBusiness}</td>
    <td>{value.Status}</td>
    <td>{value.Cordinator}</td>
   
  </tr>
  

)
      })}
   
  </tbody>
</Table>
    </div>
  )
}

export default BrokerBusinessList