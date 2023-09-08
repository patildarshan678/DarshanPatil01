import './Preview.css'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import PreviewHelper from './PreviewHelper';
import { Button } from 'react-bootstrap';
import balances from '../../apis/balances';
import LoanModal from '../../Modals/LoanModal';

function Preview({sheet_data,form_data}) {
    const [columns, setcolumns] = useState([])
    const [table_rows, settable_rows] = useState([])
    const [show_loan_modal, setshow_loan_modal] = useState(false)
    const [approvedLoandetails, setApprovedLoandetails] = useState({ApprovedLoan:'',preAssesment:''})
    useEffect(() => {
      var colums  = PreviewHelper.make_columns(sheet_data)
      var rows = PreviewHelper.make_rows(sheet_data)
      if(colums)
      {
        setcolumns(colums)
      }
      if(rows)
      {
        settable_rows(rows)
      }
    }, [])
    const render_colmuns= (index,key)=>{
        return(
            <th>{index}</th>
        )
    }
    const render_row_cell = (index,keys) =>{
        return(
            <td>
                {index}
            </td>
        )
    }
    const render_rows = (index, keys) =>{
        return(
            <tr>
                {index.map(render_row_cell)}
            </tr>
        )
    }
    async function summit_handler()
    {
       // console.log(sheet_data,form_data);
        let summit_response = await balances.summit_sheet(sheet_data,form_data.loanAMount)
       // console.log('summit_response ',summit_response);
        let loanapproved = summit_response.data.data.ApprovedLoan
        let preAssement = summit_response.data.data.preAssesment
        setApprovedLoandetails({ApprovedLoan:loanapproved,preAssesment:preAssement})
       
       // alert(`Approved loan is ${loanapproved}`)
        setshow_loan_modal(true)
    }
    function closeHanlder()
    {
      setshow_loan_modal(false)
    }
    
  return (
    <div className='preview_container'>   
    <h2>Preview Balance sheet</h2>
    <br/>
    <div className='table'>
            <Table striped bordered hover>
    <thead>
      <tr>
        {columns.map(render_colmuns)}
      </tr>
    </thead>
    <tbody>
    {table_rows.map(render_rows)}
    </tbody>
  </Table>
  </div>
  <Button onClick={summit_handler}> Submit Application</Button>
  {(show_loan_modal)?(<LoanModal approvedloan={approvedLoandetails} closeHanlder={closeHanlder} show={show_loan_modal} form_data={form_data}/>):''}
</div>
  )
}

export default Preview