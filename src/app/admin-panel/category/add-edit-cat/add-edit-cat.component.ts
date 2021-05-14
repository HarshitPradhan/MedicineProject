import { UserService } from './../../../shared/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service: UserService) { }

  @Input() cat:any;
  categoryId:string;
  categoryName:string;

  ngOnInit(): void {
    this.categoryId = this.cat.categoryId;
    this.categoryName = this.cat.categoryName;
  }


  addCategory(){
    var val = {categoryId:this.categoryId,
                categoryName:this.categoryName};
    this.service.addCategory(val).subscribe(res=>{
      alert("Category Added Successfully");
    });
  }

  updateCategory(){
    var val = {categoryId:this.categoryId,
      categoryName:this.categoryName};
    this.service.updateCategory(val).subscribe(res=>{
    alert("Category Updated Successfully");
    });
  }

}
