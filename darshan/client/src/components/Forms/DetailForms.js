import "./DetailForms.css"
import React, { useEffect, useState } from 'react'
import Form  from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import balances from "../apis/balances";
import Preview from "./preview/Preview";
function DetailForms() {

const [sheet_data, setsheet_data] = useState('')
const [show_preview, setshow_preview] = useState(false)
const [form_data, setform_data] = useState({
  Name: '',
  email:'',
  loanAMount : 0,
  loanPurpose: '',
  Address : '',
  Acc_provoider : '',
  phone :''
})
useEffect(() => {
  //console.log('sheet data',sheet_data);
  if(sheet_data)
  {
    setshow_preview(true)
  }
}, [sheet_data])
const handleInputChange = (e,keys) => {
  const { key, value } = e.target;
  //console.log(keys , value);
  setform_data({
    ...form_data,
    [keys]: value,
  });
};

  async function summit_handler()
  {
   //console.log('form data is ',form_data);
    let balances_resposne = await balances.fetch_balance_sheet()
   // console.log('balance response  ',balances_resposne);
    setsheet_data(balances_resposne.data.data)
  }
  return (
    <div className="form_container">
      <h1>
      Loan Pre-Application Form
        </h1>      
        {(show_preview===false)?(<div className="form"> 
        <Form.Label > Name of Applicant:</Form.Label>
        <InputGroup className="mb-3" onChange={(e)=>{handleInputChange(e,'Name')}}>
        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
        <Form.Control
          placeholder="Name of Applicant"
          aria-label="Name of Applicant"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label>E-mail of Applicant:</Form.Label>
      <InputGroup className="mb-3" onChange={(e)=>{handleInputChange(e,'email')}}>
        <Form.Control
          placeholder="E-mail of Applicant"
          aria-label="E-mail of Applicant"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        
      </InputGroup>

      <Form.Label > Loan Amount:</Form.Label>
        <InputGroup className="mb-3"onChange={(e)=>{handleInputChange(e,'loanAMount')}}>
        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
        <Form.Control
          placeholder="Loan Amount"
          aria-label="Loan Amount"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label > Loan Purpose:</Form.Label>
        
      <InputGroup onChange={(e)=>{handleInputChange(e,'loanPurpose')}}>
        <InputGroup.Text>Loan Purpose</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Form.Label >Address:</Form.Label>
        
        <InputGroup onChange={(e)=>{handleInputChange(e,'Address')}}>
          <InputGroup.Text>Address</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>

        <Form.Label >Account provoider:</Form.Label>
       
        <InputGroup onChange={(e)=>{handleInputChange(e,'Acc_provoider')}}>
        <Form.Control
          placeholder="Account provoider i.e. Bank Name"
          aria-label="Account provoider"
          aria-describedby="basic-addon1"
        />
        </InputGroup>
    

      <Form.Label > Phone:
        
      </Form.Label>
        <InputGroup className="mb-3" onChange={(e)=>{handleInputChange(e,'phone')}}>
        {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
        <Form.Control
          placeholder="Phone"
          aria-label="Phone"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Button onClick={summit_handler}>Summit</Button>

      </div>):(<Preview sheet_data={sheet_data} form_data={form_data}/>)}
        </div>
  )
}

export default DetailForms;