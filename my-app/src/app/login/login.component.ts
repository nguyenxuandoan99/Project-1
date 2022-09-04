import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: any;
  password: any;
  LoginUser(): void{
    if(this.username == "admin" && this.password == "admin"){
      console.log("wellcome");
      this.router.navigate(['/product']);
    }
    else{
      console.log("login fail");
      alert("Login faile")
    }
  }

  ngOnInit(): void {
  }

}
