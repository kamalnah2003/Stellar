import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService ) { }

  public user ={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
};

  ngOnInit(): void {}
  formSubmit(){
    console.log(this.user);
    if (this.user.userName =='' || this.user.userName == null){
      alert('User is required !!');
      return;
    }
    this.userService.addUser(this.user).subscribe(

      (data) => {
        console.log(data);
         alert('success');
         // success
      },
      (error) => {
           // error
        console.log(error);
        alert('something went wrong');
      }

      )
    //   console.log(data);
    //   alert('success');
    //   },
    //   (error) => {
    //   // error
    //   console.log(error);
    //   alert('something went wrong');
    // }
      
     
  }

   
}
