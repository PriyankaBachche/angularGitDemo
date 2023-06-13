import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList:user[]=[];
  constructor(private httpservice:HttpService){
  }
   ngOnInit(){
     this.getUserList()
   }
   getUserList(){
    this.httpservice.getDatafromserver("users").subscribe((response:any)=>{
        if(response && response.length>0){
          this.userList=response;
        }
    },
   )
    
}
deleteUser(ind:number){
  const id=this.userList[ind].id
  let endPoint="users/"+ id;
  this.httpservice.deleteDataFromserver(endPoint).subscribe(()=>
  this.userList.splice(ind,1)
  )
  
}
}
export interface user{
  username:string;
  mobileNo:number;
  email:string;
  gender:string;
  id?:number;
}

