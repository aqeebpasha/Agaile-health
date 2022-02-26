import React from 'react'
import { Table } from 'react-bootstrap'

const BrokerBussinessListPage = () => {
    const BrokerBusinessData=[{CompanyName:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{CompanyName:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{CompanyName:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"}
,{CompanyName:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"},{CompanyName:"level 1",LineOFBusiness:"xyz",Status:"abc",Cordinator:"Good"}]
  return (
    <div>
        <Table striped bordered hover className='w-50' style={{marginLeft:"600px",marginTop:"-600px",marginLeft:"400px"}}>
  <thead>
    <tr>
      <th>CompanyName</th>
      <th> LineOFBusiness</th>
      <th>Status</th>
      <th>Cordinator </th>
    </tr>
  </thead>
  <tbody>
      {BrokerBusinessData.map((value)=>{
return(
    <tr>
    <td>{value.CompanyName}</td>
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

export default BrokerBussinessListPage