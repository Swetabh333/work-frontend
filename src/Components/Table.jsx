import React, { useEffect ,useState} from 'react';


const Table = (props)=>{

    const [user,setUser] = useState(false);
    useEffect(()=>{

        if(sessionStorage.getItem('user')==='ADMIN'){
            console.log('Admin hai')
            setUser(true);
        }else{
            console.log('not admin hai')
            setUser(false);
        }
          },[])

    useEffect(()=>{
        console.log(user)
        let count = 1;
        fetch('http://localhost:8080/fetchdata',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({table:document.URL.split('/')[3]})
        }).then((data)=>{
            return data.json();
        }).then((findata)=>{
            console.log(findata)
            document.querySelector('tbody').innerHTML = '';
            let arr = findata;
            arr.forEach((element)=>{
                let TR = document.createElement('tr');
                if(document.URL.includes('daily')){
                  if(user){  
                    TR.innerHTML =
                `
                <td class="d-sno" colspan=2>${count++}</td>
                  <td colspan=2>${element.RO}</td>
                  <td>${element.DCC}</td>
                  <td">${element.DCA}</td>
                  <td>${element.CCC}</td>
                  <td>${element.CCA}</td>
                  <td>${element.IBC}</td>
                  <td>${element.IBA}</td>
                  <td>${element.BHIMC}</td>
                  <td>${element.BHIMA}</td>
                  <td>${element.POSC}</td>
                  <td>${element.POSA}</td>
                  <td>${element.UPIC}</td>
                  <td>${element.UPIA}</td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>
                `}else{
                    TR.innerHTML =
                    `
                    <td class="d-sno" colspan=2>${count++}</td>
                      <td colspan=2>${element.RO}</td>
                      <td>${element.DCC}</td>
                      <td contenteditable="true">${element.DCA}</td>
                      <td>${element.CCC}</td>
                      <td contenteditable="true">${element.CCA}</td>
                      <td>${element.IBC}</td>
                      <td contenteditable="true">${element.IBA}</td>
                      <td>${element.BHIMC}</td>
                      <td contenteditable="true">${element.BHIMA}</td>
                      <td>${element.POSC}</td>
                      <td contenteditable="true">${element.POSA}</td>
                      <td>${element.UPIC}</td>
                      <td contenteditable="true">${element.UPIA}</td>
                      <td></td>
                    `
                }
                props.changesnod(count)
            }else if(document.URL.includes('quarterly')){
                if(user){  
                    TR.innerHTML =
                `
                <td class="d-sno" colspan=2>${count++}</td>
                  <td colspan=2>${element.RO}</td>
                  <td>${element.DCC}</td>
                  <td">${element.DCA}</td>
                  <td>${element.CCC}</td>
                  <td>${element.CCA}</td>
                  <td>${element.IBC}</td>
                  <td>${element.IBA}</td>
                  <td>${element.BHIMC}</td>
                  <td>${element.BHIMA}</td>
                  <td>${element.POSC}</td>
                  <td>${element.POSA}</td>
                  <td>${element.UPIC}</td>
                  <td>${element.UPIA}</td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>
                `;}else{
                    TR.innerHTML =
                    `
                    <td class="d-sno" colspan=2>${count++}</td>
                      <td colspan=2>${element.RO}</td>
                      <td>${element.DCC}</td>
                      <td contenteditable="true">${element.DCA}</td>
                      <td>${element.CCC}</td>
                      <td contenteditable="true">${element.CCA}</td>
                      <td>${element.IBC}</td>
                      <td contenteditable="true">${element.IBA}</td>
                      <td>${element.BHIMC}</td>
                      <td contenteditable="true">${element.BHIMA}</td>
                      <td>${element.POSC}</td>
                      <td contenteditable="true">${element.POSA}</td>
                      <td>${element.UPIC}</td>
                      <td contenteditable="true">${element.UPIA}</td>
                      <td></td>
                    `
                }
                props.changesnoq(count)
            }else{
                if(user){  
                    TR.innerHTML =
                `
                <td class="d-sno" colspan=2>${count++}</td>
                  <td colspan=2>${element.RO}</td>
                  <td>${element.DCC}</td>
                  <td">${element.DCA}</td>
                  <td>${element.CCC}</td>
                  <td>${element.CCA}</td>
                  <td>${element.IBC}</td>
                  <td>${element.IBA}</td>
                  <td>${element.BHIMC}</td>
                  <td>${element.BHIMA}</td>
                  <td>${element.POSC}</td>
                  <td>${element.POSA}</td>
                  <td>${element.UPIC}</td>
                  <td>${element.UPIA}</td>
                  <td><i class="fa-solid delicon fa-trash"></i></td>
                `;}else{
                    TR.innerHTML =
                    `
                    <td class="d-sno" colspan=2>${count++}</td>
                      <td colspan=2>${element.RO}</td>
                      <td>${element.DCC}</td>
                      <td contenteditable="true">${element.DCA}</td>
                      <td>${element.CCC}</td>
                      <td contenteditable="true">${element.CCA}</td>
                      <td>${element.IBC}</td>
                      <td contenteditable="true">${element.IBA}</td>
                      <td>${element.BHIMC}</td>
                      <td contenteditable="true">${element.BHIMA}</td>
                      <td>${element.POSC}</td>
                      <td contenteditable="true">${element.POSA}</td>
                      <td>${element.UPIC}</td>
                      <td contenteditable="true">${element.UPIA}</td>
                      <td></td>
                    `
                }
                props.changeSNoY(count);
            }
            document.querySelector('tbody').appendChild(TR);
            })
        })
    },[])


    

    const Month = ["January","February","March","April",'May',"June","July","August","September","October","November","December"];
    

    const Commit = () =>{
        let data = {};
        let len = document.querySelector('tbody').children.length;
        for (let i = 0 ; i < len ; i++){
            let currentRow = document.querySelector('tbody').children[i];
            // data[1]={a:1,b:2};
            let RowData = currentRow.children;

        data[RowData[0].innerHTML] = {
                table: document.URL.split('/')[3],
                RO : RowData[1].innerHTML,
                DCC : RowData[2].innerHTML,
                DCA : RowData[3].innerHTML,
                CCC : RowData[4].innerHTML,
                CCA:RowData[5].innerHTML,
                IBC : RowData[6].innerHTML,
                IBA : RowData[7].innerHTML,
                BHIMC : RowData[8].innerHTML,
                BHIMA : RowData[9].innerHTML,
                POSC : RowData[10].innerHTML,
                POSA : RowData[11].innerHTML,
                UPIC : RowData[12].innerHTML,
                UPIA : RowData[13].innerHTML
            }
        }

        fetch('http://localhost:8080/commitdata',{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            document.querySelector('.crow').removeChild(document.querySelector('.red-text5'))
            if(!document.querySelector('.red-text5')){
              let para = document.createElement('p');
              para.classList.add('red-text5');  
              para.innerHTML = 'Data commited'; 
              document.querySelector('.crow').insertBefore(para,document.querySelector('.crow .submitbtn'))
            }
        })
        console.log(data);
    }

    const UcloseButton = () =>{
        document.querySelector(".udocker").style.width="0";
        document.querySelector(".udocker").style.display="none";
        document.querySelector(".usideform").style.display="none";
        document.querySelector(".ucross").style.display="none";
        document.querySelector(".clm-1").classList.add("col-12");
        setTimeout(()=>{},0.5)
        document.querySelector(".clm-1").classList.remove("col-10");
        document.querySelector(".clm-2").classList.add("col-0");
        document.querySelector(".clm-2").classList.remove("col-2");
        
      };

      const closeButton = () =>{
        document.querySelector(".docker").style.width="0";
        document.querySelector(".docker").style.display="none";
        document.querySelector(".sideform").style.display="none";
        if(document.querySelector('.red-text')){document.querySelector(".sideform").removeChild(document.querySelector('.red-text'));}
        document.querySelector(".cross").style.display="none";
        document.querySelector(".clm-1").classList.add("col-12");

        setTimeout(()=>{},0.5)
        document.querySelector(".clm-1").classList.remove("col-10");
        document.querySelector(".clm-2").classList.add("col-0");
        document.querySelector(".clm-2").classList.remove("col-2");
        
      };
    

    const Update =() =>{
        closeButton();
        if(document.querySelector('.red-text4')){
            document.querySelector('.sideform').removeChild(document.querySelector('.red-text4'));
          }
        document.querySelector(".clm-1").classList.remove("col-12");
        document.querySelector(".clm-1").classList.add("col-10");
        document.querySelector(".clm-2").classList.remove("col-0");
        document.querySelector(".clm-2").classList.add("col-2");
        
        document.querySelector(".udocker").style.display="block";
        document.querySelector(".udocker").style.width="100%";
        document.querySelector(".usideform").style.display="block";
        document.querySelector(".ucross").style.display="block";
        if (window.innerWidth<500){
            document.querySelector(".clm-1").classList.remove("col-10");
            document.querySelector(".clm-1").classList.add("col-6");
            document.querySelector(".clm-2").classList.remove("col-2");
            document.querySelector(".clm-2").classList.add("col-6");
            document.querySelector(".udocker").style.width="200px";
        }
    }

    const AddRow=()=>{
        UcloseButton();
        document.querySelector(".clm-1").classList.remove("col-12");
        document.querySelector(".clm-1").classList.add("col-10");
        document.querySelector(".clm-2").classList.remove("col-0");
        document.querySelector(".clm-2").classList.add("col-2");
        document.querySelector(".docker").style.display="block";
        document.querySelector(".docker").style.width="100%";
        document.querySelector(".sideform").style.display="block";
        document.querySelector(".cross").style.display="block";
        if (window.innerWidth<500){
            document.querySelector(".clm-1").classList.remove("col-10");
            document.querySelector(".clm-1").classList.add("col-6");
            document.querySelector(".clm-2").classList.remove("col-2");
            document.querySelector(".clm-2").classList.add("col-6");
            document.querySelector(".docker").style.width="200px";
        }
    }

    const downloadCSV =()=>{
        console.log(document.querySelector('#csvinput').value==='')
        if(document.querySelector('.red-text6')){
            document.querySelector('.csvbtn').parentElement.removeChild(document.querySelector('.red-text6'))};

        if(document.querySelector('#csvinput').value===''){
            if(!document.querySelector('.red-text6')){
            let para = document.createElement('p');
            para.innerHTML = 'Please select a value'
            para.classList.add('red-text6');
            document.querySelector('.csvbtn').parentElement.appendChild(para);
        }
        }else{
            let date = document.querySelector('#csvinput').value;
            fetch('http://localhost:8080/csvdata',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    Date:date,
                    table:document.URL.split('/')[3]
                })
            }).then((res)=>{
                return res.json()
            }).then((data)=>{
                console.log(data)
            })

        }
    }

    const CSVgenerator =()=>{
        if(!document.querySelector('#csvinput')){
            let csvlab = document.createElement('label');
            if(document.URL.includes('daily')){
                csvlab.innerHTML = "Select the date:"
            }else if (document.URL.includes('quarterly')){
                csvlab.innerHTML = "Enter  the quarter:"
            }else{
                csvlab.innerHTML = 'Enter the year'
            }
            csvlab.setAttribute('for','csvinput')
            csvlab.classList.add('csvlab')
            let csvinput = document.createElement('input');
            csvinput.classList.add('csvinput')
            csvinput.setAttribute('id','csvinput')
            if(document.URL.includes('daily')){
    
                csvinput.setAttribute('type','date')
            }
            let button = document.createElement('button')
            button.innerHTML = 'Download CSV'
            button.classList.add('btn','btn-success','downloadcsv')
            button.addEventListener('click',downloadCSV);
            document.querySelector('.csvbtn').parentElement.appendChild(csvlab)
            document.querySelector('.csvbtn').parentElement.appendChild(csvinput)
            document.querySelector('.csvbtn').parentElement.appendChild(button)
        }

    }


    const Header =()=>{
    let date = new Date();
    let dateString="";
    let suffix;
    if(date.getDate()%10===1){
        suffix='st';
    }else if (date.getDate()%10===2){
        suffix = 'nd';
    }else if (date.getDate()%10===3){
        suffix='rd';
    }else{
        suffix='th';
    }
            dateString = `${date.getDate()}${suffix} of ${Month[date.getMonth()]} , ${date.getFullYear()}`
            return(
                <div className='.text-center' style={{width:"100%"}}>
                    <h2>{dateString}</h2>
                </div>
            )
   
}
    return (
      <div className='my-3'>
        {Header()}
        <table className="table table-bordered my-5 table-responsive">
            <thead>
                <tr>
                    <th scope="col" colSpan={2}>S.No.</th>
                    <th scope="col" colSpan={2}>Regional Office</th>
                    <th scope="col" colSpan={2}>Debit Card</th>
                    <th scope="col" colSpan={2}>Credit Card</th>
                    <th scope="col" colSpan={2}>Internet Banking</th>
                    <th scope="col" colSpan={2}>BhimQR</th>
                    <th scope="col" colSpan={2}>PoS</th>
                    <th scope="col" colSpan={2}>UPI</th>
                    <th scope="col"></th>
                </tr>
                <tr>
                    <th scope="col" colSpan={2}></th>
                    <th scope="col" colSpan={2}></th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th scope="col">Commited</th>
                    <th scope="col">Acheivement</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='table-daily'>
            </tbody>
        </table>
        <div className="container">
        <div className="row my-2">
            {user && <button className='btn btn-primary addbtn' onClick={AddRow}>Add Row</button>}
        </div>

        <div className='row my-2 crow'>
       {!user && <button className='btn btn-primary submitbtn' onClick={Commit}>Commit Data</button>}
        </div> 
        <div className='row my-2'>
       {user && <button className='btn btn-primary submitbtn' onClick={Update}>Update Data</button>}
        </div> 

        <div className='row my-2'>
       {user && <button className='btn btn-primary csvbtn' onClick={CSVgenerator}>Get CSV</button>}
        </div> 

        </div>
      </div>
    )
}

export default Table
