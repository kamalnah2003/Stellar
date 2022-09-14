import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

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
    if (this.user.firstName =='' || this.user.firstName == null){
      this.snack.open('First Name required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    if (this.user.password =='' || this.user.password == null){
      this.snack.open('Password required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    if (this.user.lastName =='' || this.user.lastName == null){
      this.snack.open('Last name required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    if (this.user.email =='' || this.user.email == null){
      this.snack.open('Email required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    if (this.user.phone =='' || this.user.phone == null){
      this.snack.open('Phone required !!!', 'ok',{
        duration:3000
      })
      return;
    }
    this.userService.addUser(this.user).subscribe(

      (data:any) => {
        console.log(data);
        Swal.fire('Sucess','User Registered successfully your User id is ' + data.id , 'success')
        

         // success
      },
      (error) => {
           // error
        console.log(error);
        this.snack.open('User already exists','ok',{
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
