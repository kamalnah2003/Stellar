import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar ) { }

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
      this.snack.open('Username required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    this.userService.addUser(this.user).subscribe(

      (data) => {
        console.log(data);
         Swal.fire({
          text: 'Thank you for Registering in stellar',
          icon: 'success',
          confirmButtonText: 'ok'
        })
         // success
      },
      (error) => {
           // error
        console.log(error);
        this.snack.open('Something went wrong','ok',{
          duration:3000
        })
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
