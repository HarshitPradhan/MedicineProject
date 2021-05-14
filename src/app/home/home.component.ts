import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // userDetails;
  userData : any;
  MedicineList:any=[];

  MedicineNameFilter:string="";
  MedicineSellerFilter:string="";
  MedicineListWithoutFilter:any=[];


  constructor(private route: Router, private service: UserService, ) { }

  ngOnInit(): void {
    
    this.service.getUserProfile().subscribe(
      (res:any) =>{
        this.userData = res
      },
      err =>{
        alert("Error");
      }
    );
    this.service.getMedList().subscribe(data =>{
            this.MedicineList = data;
            this.MedicineListWithoutFilter = data;
    });
  }

  FilterFn(){
    var MedicineNameFilter = this.MedicineNameFilter;
    var MedicineSellerFilter = this.MedicineSellerFilter;

    this.MedicineList = this.MedicineListWithoutFilter.filter(function (el){
      return el.name.toString().toLowerCase().includes(
        MedicineNameFilter.toString().trim().toLowerCase()
      )&&
      el.seller.toString().toLowerCase().includes(
        MedicineSellerFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop,asc){
    this.MedicineList = this.MedicineListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

  onLogout() {
    localStorage.removeItem('token');
    this.route.navigate(['/user/login']);
  }

  addToCart(dataItem)
  {
    
    if(sessionStorage.getItem(dataItem.name) != null)
    {
      alert("Already in cart");
    }
    else
    {
      sessionStorage.setItem(dataItem.name,dataItem.price);
      alert("Item added to cart successfully");
    }
  }

  onCart()
  {
    this.route.navigate(["Cart"]);
  }





















//   constructor(private router: Router, private service: UserService) { }

//   ProdList:any=[];
//   MedicineList:any=[];

// ModalTitle:string;
// ActivateAddEditMedComp:boolean = false;
// // prod:any = [];

//   ngOnInit() {
    
//     this.refreshMedList();

//     this.service.getMedList().subscribe(data =>{
//       this.MedicineList = data;
//       // console.log(this.MedicineList);
//     });

//     this.service.getUserProfile().subscribe(
//       res => {
//         this.userDetails = res;
//       },
//       err => {
//         console.log(err);
//       },
//     );
//   }

// refreshMedList(){
//   this.service.getMedList().subscribe(data =>{
//     this.MedicineList = data;
//     // console.log(this.MedicineList);
//   });
// }

// addToCart(item){
//   this.service.getMedicineDetails(item.id).subscribe(data=>{
//       this.ProdList = data;
      
//     console.log(this.ProdList);
//     sessionStorage.setItem('cart',JSON.stringify(this.ProdList));

//             // alert("Medicine Deleted Successfully");
//             // this.refreshMedList();
//     })
//     this.router.navigate(['./cart']);
//   }

//   onLogout() {
//     sessionStorage.removeItem('token');
//     this.router.navigate(['/user/login']);
//   }
  // closeClick(){
  //   this.ActivateAddEditMedComp=false;
  //   this.refreshMedList();
  // }



// }

}