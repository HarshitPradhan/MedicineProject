import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foruser',
  templateUrl: './foruser.component.html',
  styleUrls: ['./foruser.component.css']
})
export class ForuserComponent implements OnInit {

  constructor(private service : UserService) { }

  UserList:any=[];


  ModalTitle:string;
  cat:any;


  ngOnInit(): void {
    this.refreshUserList();
  }



  // deleteClick(item){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteUser(item.id).subscribe(data=>{
  //       alert("Category Deleted Successfully");
  //       this.refreshUserList();
  //     })
  //   }
  // }
  // closeClick(){
  //   this.refreshUserList();
  // }



  refreshUserList(){
    this.service.getUserList().subscribe(data =>{
      this.UserList = data;
      // console.log(this.CategoryList);
    });

  }



}
