import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm!:FormGroup
  constructor(private fb:FormBuilder,private httpservice:HttpService, private route:ActivatedRoute, private router:Router){

  }
  selectedUID:string|null=null;
  ngOnInit(): void {
    this.creatForm();
    this.selectedUID=this.route.snapshot.paramMap.get("id");
    if(this.selectedUID){
      this.getUser();
    }
  }
  getUser(){
    const endPoint="users/"+this.selectedUID;
    this.httpservice.getDatafromserver(endPoint).subscribe((resp:any)=>{
      console.log(resp);
      this.userForm.patchValue(resp);
    })
  }
  creatForm(){
    this.userForm=this.fb.group({
      "username":['',[Validators.required]],
      "email":['',[Validators.required]],
      "mobileNo":['',[Validators.required]],
      "gender":['',[Validators.required]]
    
    })

  }
submit(){
  // console.log(this.userForm.value);
  if(this.selectedUID==null){

    this.httpservice.sendDatatoserver("users",this.userForm.value).subscribe((el:any)=>{
      // console.log(el);
  
    })
  }else{
    const endPoint='users/' + this.selectedUID 
    this.httpservice.updateDataToServer(endPoint,this.userForm.value).subscribe(()=>{
      console.log("Successfully data updated");
    })
  }
  this.router.navigate(['/user-list'])
}
canExit(){
  if(this.userForm.dirty){
    const res=confirm("Data may not be saved");
    if(res){return true;}else{return false}
  }else{return true;}
}



}
