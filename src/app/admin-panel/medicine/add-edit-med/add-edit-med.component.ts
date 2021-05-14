import { UserService } from './../../../shared/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-med',
  templateUrl: './add-edit-med.component.html',
  styleUrls: ['./add-edit-med.component.css']
})
export class AddEditMedComponent implements OnInit {


  constructor(private service: UserService) { }
  
  @Input() med:any;
  id:string;
  name:string;
  price:number;
  image:string;
  seller:string;
  description:string;
  categoryId:number;

  CategoryList:any=[];

  ngOnInit(): void {
    this.loadCategoryList();
    this.id=this.med.id;
    this.name=this.med.name;
    this.price=this.med.price;
    this.image=this.med.image;
    this.seller=this.med.seller;
    this.description=this.med.description;
    this.categoryId = this.med.categoryId
    
  }

  loadCategoryList(){
    this.service.getCatList().subscribe((data:any)=>{
      this.CategoryList=data;
    });
  }

  addMedicine(){
    var val = {
                id:this.id,
                name:this.name,
                price:this.price,
                image:this.image,
                seller:this.seller,
              description:this.description,
            categoryId:this.categoryId};

    this.service.addMedicine(val).subscribe(res=>{
      alert("Medicine Added Successfully");
    });
  }

  updateMedicine(){
    var val = {id:this.id,
      name:this.name,
      price:this.price,
      image:this.image,
      seller:this.seller,
    description:this.description,
  categoryId:this.categoryId};

    this.service.updateMedicine(val).subscribe(res=>{
    alert("Medicine Updated Successfully");
    });
  }

}
