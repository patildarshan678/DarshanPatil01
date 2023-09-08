import './LoanModal.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function LoanModal({ approvedloan, show, closeHanlder, sheet_data, form_data }) {
  
  return (
    <div className='modal_container'>

      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Loan Approval
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Dear {form_data.Name},
          <p/>
            We are delighted to inform you that your loan application with {form_data.Acc_provider} has been approved!
          <p>
            Loan Details:<br/>
            - Loan requested : {form_data.loanAMount} <br/>
            - Loan Amount Approved: {approvedloan.ApprovedLoan} <br/>
            - preAssement : {approvedloan.preAssesment} <br/>
            - Loan Purpose: {form_data.loanPurpose} <br/>
          </p>
            Your Contact Information:<br/>
            - Email: {form_data.email}<br/>
            - Phone: {form_data.phone}<br/>
          <br/>
          <p>
            Congratulations on your approved loan!
          </p>
            Sincerely,
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeHanlder}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LoanModal