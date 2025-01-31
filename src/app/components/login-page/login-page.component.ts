import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/shared/service/login.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private builder: FormBuilder,private router:Router,
      private _login:LoginService){
}


loginForm=this.builder.group({
  username:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required)
})

loginData:any=[]



proceedLogin(){

const loginData=this.loginForm.value;

this._login.checkLogin().subscribe((res:any)=>{
  //console.log(res)
  const Lists=res.find((r:any)=> {
    if(r.username === loginData.username && r.password === loginData.password)
   {
    sessionStorage.setItem('username',r.username);
     this.router.navigateByUrl('dashboard');
     alert("You have successfully logged in");
   }
   else{
     alert("Wrong Credentials");
   }
  })
})

 this.loginForm.reset();
}

}
