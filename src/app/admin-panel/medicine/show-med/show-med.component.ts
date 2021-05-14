import { UserService } from './../../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {

  constructor(private service : UserService) { }

  MedicineList:any=[];

  ModalTitle:string;
  ActivateAddEditMedComp:boolean = false;
  med:any;


  ngOnInit(): void {
    this.refreshMedList();
  }

  addClick(){

    this.med={
      Id:0,
      Name:"",
      Price:"",
      Image:"",
      Seller:"",
      Description:"",
      CategoryId:""
    }
    this.ModalTitle="Add Medicine";
    this.ActivateAddEditMedComp=true;

  }

  editClick(item){
    this.med=item;
    this.ModalTitle="Edit Medicine";
    this.ActivateAddEditMedComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure you want to delete??')){
      this.service.deleteMedicine(item.id).subscribe(data=>{
        alert("Medicine Deleted Successfully");
        this.refreshMedList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditMedComp=false;
    this.refreshMedList();
  }



  refreshMedList(){
    this.service.getMedList().subscribe(data =>{
      this.MedicineList = data;
      // console.log(this.MedicineList);
    });
  }



}
