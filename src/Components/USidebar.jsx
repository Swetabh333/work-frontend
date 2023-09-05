import React from 'react'

const USidebar = () => {

    const closeButton = () =>{
        document.querySelector(".udocker").style.width="0";
        document.querySelector(".udocker").style.display="none";
        document.querySelector(".usideform").style.display="none";
        document.querySelector(".ucross").style.display="none";
        document.querySelector(".clm-1").classList.add("col-12");
        setTimeout(()=>{},0.5)
        document.querySelector(".clm-1").classList.remove("col-10");
        document.querySelector(".clm-2").classList.add("col-0");
        document.querySelector(".clm-2").classList.remove("col-2");
        
      }


    let SubmitForm = () =>{
     if(document.querySelector('.red-text2')){document.querySelector('.usideform').removeChild(document.querySelector('.red-text2'))}
     if(document.querySelector('.red-text3')){document.querySelector('.usideform').removeChild(document.querySelector('.red-text3'))}
    try{let TBOD = document.querySelector('tbody');
    let updatedData = {};
    let rows = TBOD.children;
    if(document.querySelector('#inputUSno').value!==''){
      if(document.querySelector('#inputURO').value!==''){
      updatedData.RO=document.querySelector('#inputURO').value.toUpperCase()}else{
        let para = document.createElement('p'); //1464-8134 8052508
        para.innerHTML = 'Please Enter RO Name';
        para.classList.add('red-text3');
        document.querySelector('.usideform').insertBefore(para,document.querySelector('.ubtn'));
      }
      let index  = parseInt(document.querySelector('#inputUSno').value);
      let desiredRow = rows[index-1];
      let data=desiredRow.children;
      if(document.querySelector('#inputUDebit').value!==''){data[2].innerHTML=document.querySelector('#inputUDebit').value
      updatedData.debitC=data[2].innerHTML=document.querySelector('#inputUDebit').value}else{
        updatedData.debitC = data[2].innerHTML;
      };
      if(document.querySelector('#inputUCredit').value!==''){data[4].innerHTML=document.querySelector('#inputUCredit').value
      updatedData.creditC=document.querySelector('#inputUCredit').value}else{
        updatedData.creditC = data[4].innerHTML;
      };
      if(document.querySelector('#inputUIB').value!==''){data[6].innerHTML=document.querySelector('#inputUIB').value
      updatedData.IBC=document.querySelector('#inputUIB').value}else{
        updatedData.IBC = data[6].innerHTML;
      };
      if(document.querySelector('#inputUBHIMQR').value!==''){data[8].innerHTML=document.querySelector('#inputUBHIMQR').value
      updatedData.BHIMC=document.querySelector('#inputUBHIMQR').value}else{
        updatedData.BHIMC = data[8].innerHTML;
      };
      if(document.querySelector('#inputUPos').value!==''){data[10].innerHTML=document.querySelector('#inputUPos').value
      updatedData.PosC=document.querySelector('#inputUPos').value}else{
        updatedData.PosC = data[10].innerHTML;
      };
      if(document.querySelector('#inputUUPI').value!==''){data[12].innerHTML=document.querySelector('#inputUUPI').value
      updatedData.UPIC=document.querySelector('#inputUUPI').value}else{
        updatedData.UPIC = data[12].innerHTML;
      };
      if(document.URL.includes('daily')){
        updatedData.table = 'daily';
      }else if (document.URL.includes('quarterly')){
        updatedData.table = 'quarterly';
      }else{
        updatedData.table = 'yearly';
      }
     

      fetch('http://localhost:8080/update',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(updatedData)
      }).then((res)=>{
        return res.json()
      }).then((findata)=>{
        console.log(findata);
      })
    } 
      document.querySelector('#inputUSno').value = ''
      document.querySelector('#inputURO').value = ''
      document.querySelector('#inputUDebit').value = ''
      document.querySelector('#inputUCredit').value = ''
      document.querySelector('#inputUIB').value = ''
      document.querySelector('#inputUBHIMQR').value = ''
      document.querySelector('#inputUPos').value = ''
      document.querySelector('#inputUUPI').value = ''
      
    }
    catch(err){
      if(err){
        console.log(err);
        if(!document.querySelector('.red-text'))
       {let para = document.createElement('p');
        para.innerHTML = 'Field does not exist';
        para.classList.add('red-text2');
        document.querySelector('.usideform').insertBefore(para,document.querySelector('.ubtn'));}
      }
    }
    }

  return (
    <div className='udocker'>
      <div className="ux-holder">  
        <i className="fa-solid fa-x ucross" onClick={closeButton}></i>
      </div>
      <form className='usideform'>

  <div className="mb-3">
  <h5>Update Values</h5>
  <div className="mb-3">
    <label htmlFor="inputUSno" className="form-label"> Enter S.No. to be Updated</label>
    <input name="IB" type="number" className="form-control" id="inputUSno"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUCredit" className="form-label">Enter Regional Office to update:</label>
    <input name="RO" type="text" className="form-control" id="inputURO"/>
  </div>
    <label htmlFor="inputUDebit" className="form-label">Debit Card</label>
    <input name="debit"  type="number" className="form-control" id="inputUDebit" aria-describedby="DCHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUCredit" className="form-label">Credit Card</label>
    <input name="credit" type="number" className="form-control" id="inputUCredit"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUIB" className="form-label">Internet Banking</label>
    <input name="IB" type="number" className="form-control" id="inputUIB"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUBHIMQR" className="form-label">BhimQR</label>
    <input name="BHIM" type="number" className="form-control" id="inputUBHIMQR"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUPos" className="form-label">Pos</label>
    <input name="Pos" type="number" className="form-control" id="inputUPos"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUUPI" className="form-label">UPI</label>
    <input name="UPI" type="number" className="form-control" id="inputUUPI"/>
  </div>

  <button type="button" className="btn btn-primary ubtn" onClick={SubmitForm}>Update Fields</button>
  </form>
    </div>
  )
}

export default USidebar
