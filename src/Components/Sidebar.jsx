import React,{useState,useEffect} from 'react';
const Sidebar = (props) => {

const [user,setUser] = useState(false);






useEffect(()=>{
  fetch('http://localhost:8080/checkuser')
  .then((res) => res.json())
  .then((data) => {
    sessionStorage.setItem('user',data.user)
    if (sessionStorage.getItem('user') === 'ADMIN') {
      setUser(true);
    } else {
      setUser(false);
      
    }
  })
},[])

const del = (e)=>{
  if(document.URL.includes('quarterly')){
    props.changesnoq(props.snoq-1);
  }else if(document.URL.includes('yearly')){    
    props.changeSNoY(props.snoy-1); 
  }else{
    props.changesnod(props.snod-1);
  }
  if(e.target.parentElement.parentElement.parentElement){
    let RowTodel = e.target.parentElement.parentElement.children;
    console.log(RowTodel[1].innerHTML);
    fetch('http://localhost:8080/delete',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({RO:RowTodel[1].innerHTML,table:document.URL.split('/')[3]})
    })
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    if(document.URL.includes('quarterly')){
      let arr2=document.querySelectorAll('.q-sno')
      for(let j=1;j<arr2.length+1;j++){
        if(arr2[j-1]){
          arr2[j-1].innerHTML=j;
        }
      } 
    }
    }else if(document.URL.includes('yearly')){    

      let arr2=document.querySelectorAll('.y-sno')
      for(let j=1;j<arr2.length+1;j++){
        if(arr2[j-1]){
          arr2[j-1].innerHTML=j;
        }
      }      
    }else{

      let arr2=document.querySelectorAll('.d-sno')

      for(let j=1;j<arr2.length+1;j++){
        if(arr2[j-1]){
          arr2[j-1].innerHTML=j;
        }
      }            
  }
}

useEffect(()=>{
  let arr=document.querySelectorAll(".delicon");
  for(let i=0;i<arr.length;i++){
      if(arr[i]){
        arr[i].addEventListener('click',del);

      }
  }
},[props.snoq,props.snoy,props.snod])

  const closeButton = () =>{
    if(document.querySelector('.red-text4')){
      document.querySelector('.sideform').removeChild(document.querySelector('.red-text4'));
    }
    document.querySelector(".docker").style.width="0";
    document.querySelector(".docker").style.display="none";
    document.querySelector(".sideform").style.display="none";
    document.querySelector(".cross").style.display="none";
   if(document.querySelector('.red-text')){document.querySelector(".sideform").removeChild(document.querySelector('.red-text'));}
    document.querySelector(".clm-1").classList.add("col-12");
    setTimeout(()=>{},0.5)
    document.querySelector(".clm-1").classList.remove("col-10");
    document.querySelector(".clm-2").classList.add("col-0");
    document.querySelector(".clm-2").classList.remove("col-2");
  }

 
  const SubmitForm= ()=>{
    
    if(document.querySelector('.red-text')){
      document.querySelector('.sideform').removeChild(document.querySelector('.red-text'));
    }
    if(document.querySelector('.red-text4')){
      document.querySelector('.sideform').removeChild(document.querySelector('.red-text4'));
    }
    let data ={
      table: document.URL.split('/')[3],
      RO : document.querySelector("#inputRO").value,
      Debit : parseInt(document.querySelector("#inputDebit").value),
      Credit : parseInt(document.querySelector("#inputCredit").value),
      IB : parseInt(document.querySelector("#inputIB").value),
      BHIM : parseInt(document.querySelector("#inputBHIMQR").value),
      PoS : parseInt(document.querySelector("#inputPos").value),
      UPI: parseInt(document.querySelector("#inputUPI").value)
    } ;
        fetch('http://localhost:8080/storedata',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        }).then((finres)=>{
          console.log(finres);
          if(finres.error === 'Error'){
            let para = document.createElement('p');
            para.innerHTML='Name already exists';
            para.classList.add('red-text4');
            document.querySelector('.sideform').insertBefore(para,document.querySelector('.addrow'));
          }else{
            if(data.RO==='' || data.Debit==='' || data.Credit==='' ||data.IB==='' || data.BHIM==='' ||data.PoS ==='' || data.UPI ===''){
              if(!document.querySelector('.red-text'))
              {let para = document.createElement('p');
              para.innerHTML='Fill all fields';
              para.classList.add('red-text');
              document.querySelector('.sideform').insertBefore(para,document.querySelector('.addrow'));}
            }else{let TableBod;
                if(document.URL.includes('quarterly')){
                  TableBod = document.querySelector(".table-q");
                  data.SNo = props.snoq;
                }else if(document.URL.includes('yearly')){    
                  TableBod = document.querySelector(".table-y");  
                  data.SNo =props.snoy;
                }else{
                  TableBod = document.querySelector(".table-daily");
                  data.SNo =props.snod;
                }
                let TR = document.createElement('tr');
                if(document.URL.includes('quarterly')){
                  if(user){
                    TR.innerHTML=
                  `
                  <td className="q-sno" colspan=2>${props.snoq}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td contenteditable="true">${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable="true"></td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>`;
                  }
                  else{TR.innerHTML=
                  `
                  <td className="q-sno" colspan=2>${props.snoq}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td contenteditable="true">${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable='true'></td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>`;}
                  props.changesnoq(props.snoq+1)
                }else if(document.URL.includes('yearly')){
                  
                  if(user){
                    TR.innerHTML=
                  `
                  <td class="y-sno" colspan=2>${props.snoy}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td contenteditable="true">${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable="true"></td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>`;
                  }else{TR.innerHTML=
                  `
                  <td class="y-sno" colspan=2>${props.snoy}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td>${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable='true'></td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>`;}
                  props.changeSNoY(props.snoy+1);
                }else{
                  
                  if(user){
                    TR.innerHTML=
                  `
                  <td class="d-sno" colspan=2>${props.snod}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td>${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable="true"></td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>`;
                  }else{TR.innerHTML=
                  `
                  <td class="d-sno" colspan=2>${props.snod}</td>
                  <td colspan=2>${document.querySelector("#inputRO").value}</td>
                  <td>${document.querySelector("#inputDebit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputCredit").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputIB").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputBHIMQR").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputPos").value}</td>
                  <td contenteditable="true"></td>
                  <td>${document.querySelector("#inputUPI").value}</td>
                  <td contenteditable="true"></td>
                  <td><i class="fa-solid delicon fa-trash"></td>`;}
                  props.changesnod(props.snod+1);
                }
                TableBod.appendChild(TR);
                document.querySelector("#inputDebit").value="";
                document.querySelector("#inputCredit").value="";
                document.querySelector("#inputIB").value="";
                document.querySelector("#inputBHIMQR").value="";
                document.querySelector("#inputPos").value="";
                document.querySelector("#inputUPI").value="";
                document.querySelector("#inputRO").value="";
          }}
          
        })
                
                
        }
        
        
  
  return (
    <div className='docker'>
      <div className="x-holder">  
        <i className="fa-solid fa-x cross" onClick={closeButton}></i>
      </div>
      <form className='sideform'>

  <div className="mb-3">
  <h5>Enter Commitment values</h5>
  <div className="mb-3">
    <label htmlFor="inputCredit" className="form-label">Regional Office</label>
    <input name="RO" type="text" className="form-control" id="inputRO"/>
  </div>
    <label htmlFor="inputDebit" className="form-label">Debit Card</label>
    <input name="debit"  type="number" className="form-control" id="inputDebit" aria-describedby="DCHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputCredit" className="form-label">Credit Card</label>
    <input name="credit" type="number" className="form-control" id="inputCredit"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputIB" className="form-label">Internet Banking</label>
    <input name="IB" type="number" className="form-control" id="inputIB"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputBHIMQR" className="form-label">BhimQR</label>
    <input name="BHIM" type="number" className="form-control" id="inputBHIMQR"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputPos" className="form-label">Pos</label>
    <input name="Pos" type="number" className="form-control" id="inputPos"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputUPI" className="form-label">UPI</label>
    <input name="UPI" type="number" className="form-control" id="inputUPI"/>
  </div>

  <button type="button" className="btn btn-primary addrow" onClick={SubmitForm}>Add Field</button>
  </form>
    </div>
  )
}

export default Sidebar
