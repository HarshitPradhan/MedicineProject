import { UserService } from './../../../shared/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service : UserService) { }

  CategoryList:any=[];


  ModalTitle:string;
  ActivateAddEditCatComp:boolean = false;
  cat:any;


  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick(){
    this.cat={
      CategoryId:0,
      CategoryName:""
    }
    this.ModalTitle="Add Category for Medicine";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure you want to delete??')){
      this.service.deleteCategory(item.categoryId).subscribe(data=>{
        alert("Category Deleted Successfully");
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }



  refreshCatList(){
    this.service.getCatList().subscribe(data =>{
      this.CategoryList = data;
      // console.log(this.CategoryList);
    });

  }



}
