import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const navigate = useNavigate();

    const backToLogin2 = ()=>{
      let form = document.querySelector('.loginForm');

      let login = document.createElement('h2');
      login.classList.add('my-4');
      login.innerHTML="Login";

      let uslab =   document.createElement('label');
      uslab.innerHTML = 'R.O. Name :';
      uslab.setAttribute('for','username');
      uslab.classList.add('form-label','unamelab');
      let usinp =document.createElement('input');
      usinp.setAttribute('id','username');
      usinp.setAttribute('name','user');
      usinp.classList.add('form-control');
      let passlab =document.createElement('label');
      passlab.classList.add('form-label','mt','passlab')
      passlab.innerHTML='Password :'
      let passinp =document.createElement('input');
      passinp.setAttribute('id','password');
      passinp.setAttribute('name','pass');
      passinp.classList.add('form-control');
      let btn = document.createElement('button');
      btn.innerHTML ='Login';
      btn.classList.add('btn','btn-primary','mt');
      btn.setAttribute('id','subbtn');
      btn.setAttribute('action','/');
      btn.addEventListener('click',submitLogin);
      let para = document.createElement('p');
      para.innerHTML='Create New User';
      para.addEventListener('click',createNewUser);
      para.classList.add('create-new');

      form.removeChild(document.querySelector('h2'));
      form.removeChild(document.querySelector('label'));
      form.removeChild(document.querySelector('input'));
      form.removeChild(document.querySelector('button'));
      form.removeChild(document.querySelector('p'));


      form.appendChild(login);
      form.appendChild(uslab);
      form.appendChild(usinp);
      form.appendChild(passlab);
      form.appendChild(passinp);
      form.appendChild(btn);
      form.appendChild(para);
    }

    const backToLogin =()=>{
      let form = document.querySelector('.loginForm');

      let login = document.createElement('h2');
      login.classList.add('my-4');
      login.innerHTML="Login";

      let uslab =   document.createElement('label');
      uslab.innerHTML = 'R.O. Name :';
      uslab.setAttribute('for','username');
      uslab.classList.add('form-label','unamelab');
      let usinp =document.createElement('input');
      usinp.setAttribute('id','username');
      usinp.setAttribute('name','user');
      usinp.classList.add('form-control');
      let passlab =document.createElement('label');
      passlab.classList.add('form-label','mt','passlab')
      passlab.innerHTML='Password :'
      let passinp =document.createElement('input');
      passinp.setAttribute('id','password');
      passinp.setAttribute('name','pass');
      passinp.classList.add('form-control');
      let btn = document.createElement('button');
      btn.innerHTML ='Login';
      btn.classList.add('btn','btn-primary','mt');
      btn.setAttribute('id','subbtn');
      btn.setAttribute('action','/');
      btn.addEventListener('click',submitLogin);
      let para = document.createElement('p');
      para.innerHTML='Create New User';
      para.addEventListener('click',createNewUser);
      para.classList.add('create-new');

      form.removeChild(document.querySelector('.ulab'));
      form.removeChild(document.querySelector('.plab'));
      form.removeChild(document.querySelector('.cplab'));
      form.removeChild(document.querySelector('.cbtn'));
      form.removeChild(document.querySelector('#new-uname'));
      form.removeChild(document.querySelector('#new-pass'));
      form.removeChild(document.querySelector('#conf-pass'));
      form.removeChild(document.querySelector('.signup'));
      form.removeChild(document.querySelector('.newpara'));
      if(document.querySelector('.red-text')){
        form.removeChild(document.querySelector('.red-text'));
      }
      if(document.querySelector('.user-created')){
        form.removeChild(document.querySelector('.user-created'));
      }

      form.appendChild(login);
      form.appendChild(uslab);
      form.appendChild(usinp);
      form.appendChild(passlab);
      form.appendChild(passinp);
      form.appendChild(btn);
      form.appendChild(para);

      

    }

    const adminVerif = async () =>{
      let response = await fetch('https://canarabackend.onrender.com/adminVerif',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password:document.querySelector('#adminpass').value})
      });
      let verif = await response.json();
      if (verif.verified===true){
        let form = document.querySelector('.loginForm');

        form.removeChild(document.querySelector('h2'));
        form.removeChild(document.querySelector('label'));
        form.removeChild(document.querySelector('input'));
        form.removeChild(document.querySelector('button'));
        form.removeChild(document.querySelector('.newpara'))
        if(document.querySelector('.red-text')){
          form.removeChild(document.querySelector('.red-text'));
        }
        

        let signup = document.createElement('h2');
        signup.classList.add('my-4');
        signup.innerHTML="Sign Up";
        signup.classList.add('signup');
        form.appendChild(signup);
        let ulab = document.createElement('label');
        ulab.setAttribute('for','new-uname');
        ulab.innerHTML = 'R.O. Name:';
        ulab.classList.add('form-label','ulab');
        form.appendChild(ulab);
        let uinput = document.createElement('input');
        uinput.setAttribute('name','new-uname');
        uinput.setAttribute('id','new-uname');
        uinput.classList.add('form-control');
        form.appendChild(uinput);
        let plab = document.createElement('label');
        plab.setAttribute('for','new-pass');
        plab.innerHTML = 'Password:';
        plab.classList.add('form-label','plab');
        form.appendChild(plab);
        let pinput = document.createElement('input');
        pinput.setAttribute('name','new-pass');
        pinput.setAttribute('id','new-pass');
        pinput.setAttribute('type','password');
        pinput.classList.add('form-control');
        form.appendChild(pinput);
        let cplab = document.createElement('label');
        cplab.setAttribute('for','conf-pass');
        cplab.innerHTML = 'Re-type Password:';
        cplab.classList.add('form-label','cplab');
        form.appendChild(cplab);
        let cpinput = document.createElement('input');
        cpinput.setAttribute('name','conf-pass');
        cpinput.setAttribute('id','conf-pass');
        cpinput.setAttribute('type','password');
        cpinput.classList.add('form-control');
        form.appendChild(cpinput);
  
        let btn = document.createElement('button');
        btn.setAttribute('type','button');
        btn.setAttribute('id','crtbtn');
        btn.innerHTML='Create User';
        btn.classList.add('btn','btn-primary','mt','cbtn');
        btn.addEventListener('click',createUser);
        form.appendChild(btn);
  
        let para = document.createElement('p');
        para.innerHTML='Go back to login';
        para.classList.add('create-new','newpara');
        para.addEventListener('click',backToLogin);
        form.appendChild(para);

        
      }else{
        if(!document.querySelector('.red-text')){
          let para = document.createElement('p');
          para.innerHTML="Wrong Password";
          para.classList.add('red-text');
          document.querySelector('.loginForm').insertBefore(para,document.querySelector('.sublogbtn'));
        }
      }
    }

    const createNewUser=()=>{
      let form = document.querySelector('.loginForm');
      form.removeChild(document.querySelector('.unamelab'));
      form.removeChild(document.querySelector('h2'));
      form.removeChild(document.querySelector('p'));
      form.removeChild(document.querySelector('#username'));
      form.removeChild(document.querySelector('.passlab'));
      form.removeChild(document.querySelector('#password'));
      form.removeChild(document.querySelector('#subbtn'));

      let adminpasslab = document.createElement('label');
      adminpasslab.innerHTML = 'Enter admin password:';
      adminpasslab.classList.add('form-label');
      adminpasslab.setAttribute('for','adminpass');
      let adminpass = document.createElement('input');
      adminpass.classList.add('form-control');
      adminpass.setAttribute('id','adminpass');
      adminpass.setAttribute('type','password');
      let sublogbtn = document.createElement('button');
      sublogbtn.innerHTML = 'Submit Password';
      sublogbtn.setAttribute('type','button');
      sublogbtn.classList.add('btn','btn-primary','sublogbtn');
      sublogbtn.addEventListener('click',adminVerif);
      let H2 = document.createElement('h2');
      H2.innerHTML = 'Admin Login';
      H2.classList.add('my-4');
      let para = document.createElement('p');
      para.innerHTML='Go back to login';
      para.classList.add('create-new','newpara');
      para.addEventListener('click',backToLogin2);
      


      form.appendChild(H2);
      form.appendChild(adminpasslab);
      form.appendChild(adminpass);
      form.appendChild(sublogbtn);
      form.appendChild(para);
      
      
    }

    const createUser = () =>{
      if(document.querySelector('.red-text')){
        document.querySelector('.loginForm').removeChild(document.querySelector('.red-text'));
      }
      let pass = document.querySelector('#new-pass').value;
      let cpass = document.querySelector("#conf-pass").value;
      if (pass===cpass){
        let data = {
          roname: document.querySelector('#new-uname').value,
          password : pass 
        }
        fetch('https://canarabackend.onrender.com/new',{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        }).then((res)=>{
          return res.json()
        }).then((data1)=>{
          if(data1.roname){
            if(data1.roname===data.roname.toUpperCase()){
              let para = document.createElement('p');
              para.innerHTML="User Created";
              para.classList.add('user-created');
              document.querySelector('.loginForm').insertBefore(para,document.querySelector('.loginForm button'));
            }
          }
          if(data1.error){
            if(!document.querySelector('.red-text')){
              let para = document.createElement('p');
              para.innerHTML="RO Name already exists";
              para.classList.add('red-text');
              document.querySelector('.loginForm').insertBefore(para,document.querySelector('.loginForm button'));
            }
          }
        })
      }else{
        if(!document.querySelector('.red-text')){
          let para = document.createElement('p');
          para.innerHTML="The password doesn't match the re-typed password";
          para.classList.add('red-text');
          document.querySelector('.loginForm').insertBefore(para,document.querySelector('.loginForm button'));
        }
      }
    }

    const submitLogin =()=>{
        let type = {
            username : document.querySelector("#username").value,
            password : document.querySelector('#password').value
        }
        fetch("https://canarabackend.onrender.com/",{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(type)
        }).then((res)=>{
            return res.json()
        }).then((fin)=>{
            console.log(fin.user);
            sessionStorage.setItem('user',fin.user);
         if(fin.user==='ADMIN' || fin.user === 'CLIENT'){
                props.changeVal();
                navigate('/daily');
            }else{
              let P = document.createElement('p');
              console.log(document.querySelector('.loginForm').contains(document.querySelector('.red-text')));
              if(!document.querySelector('.red-text')){
                P.classList.add('red-text');
                P.innerHTML='Invalid Username/Password';
                console.log(P);
                document.querySelector('.loginForm').insertBefore(P,document.querySelector('.loginForm button'))
              }
            }});

        
    }
  return (
    <div className='page'>
    <div className="container login">
      <form className='loginForm'>
    <h2 className='my-4'>Login</h2>
        <label htmlFor='username' className='form-label unamelab'>Enter R.O. Name :</label>
        <input name='user' type='text' id='username' className='form-control' required/>
        <label htmlFor='password' className='form-label mt passlab'>Enter Password :</label>
        <input name='pass' type='password' id='password' className='form-control' required/>
        <button type="button" id='subbtn' className="btn btn-primary mt" action="/" onClick={submitLogin}>Login</button>
        <p className='create-new' onClick={createNewUser}>Create New User</p>
      </form>
    </div>
    </div>
  );
}

export default Login;
