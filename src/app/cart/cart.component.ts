import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  // userDetails;
  userData : any;

  data:string;
  cost:number = 0;

  itemlist:Array<string> = [];
  pricelist:Array<string> = [];

  flag:boolean = false;


  constructor(private route: Router , private service: UserService) { }

  ngOnInit(): void {
    
    this.service.getUserProfile().subscribe(
      res => {
        this.userData = res;
      },
      err => {
        console.log(err);
      });
    this.cartList();
  }

  cartList()
  {
    if (sessionStorage.length == 0) {
      this.flag = false
    }

    else{
      this.flag = true;
    Object.keys(sessionStorage).forEach( (item) => 
    {
      if( item != "role" && item != "token")
      {
        let d1 = sessionStorage.getItem(item);
        this.data = item;
        if(d1 != null)
        {
          this.cost += parseInt(d1);
          this.itemlist.push(item);
          this.pricelist.push(d1);
        }
      }
    });
  }
  }

  placeOrder()
  {
    alert("Your order has been placed. Thankyou for shopping");
    this.route.navigate(['/home']);
    Object.keys(sessionStorage).forEach( (item) => 
    {
      if( item != "role" && item != "token")
      {
        sessionStorage.removeItem(item);
      }
    });
  }
  clearCart()
  {
    alert("Cart is emptied");
    this.route.navigate(['/home']);
    Object.keys(sessionStorage).forEach( (item) => 
    {
      if( item != "role" && item != "token")
      {
        sessionStorage.removeItem(item);
      }
    });
  }
  //   onLogout() {
  //   sessionStorage.removeItem('token');
  //   this.route.navigate(['/user/login']);
  // }
  backtohome(){
    this.route.navigate(['/home']);
  }
}

//   flag:boolean = false;
//   med:any=[];
//   qty:number;

//   constructor(private router: Router, private service: UserService) { }
//   ngOnInit(): void {
//     this.service.getUserProfile().subscribe(
//       res => {
//         this.userDetails = res;
//       },
//       err => {
//         console.log(err);
//       },
//     );
//     if(sessionStorage.getItem('cart')==null)
//     {
//       this.flag = false;
//     }
//     else if(sessionStorage.getItem('cart')!=null)
//     {
//       this.flag = true;
//       this.med = sessionStorage.getItem('cart');
//       this.med = JSON.parse(this.med);
//     }
//     console.log(this.med);
//   }

//   // fun($event){
//   //   //console.log(this.med['medicine_Price']);
    
//   //   document.getElementById('update').innerHTML = "Rs"+" "+($event.target.value*parseInt(this.med['medicine_Price'])).toString()+"/-";
//   //   document.getElementById('update2').innerHTML = "MRP Total Rs "+($event.target.value*parseInt(this.med['medicine_Price'])).toString();
//   //   //console.log(this.med);
    
//   // }
//   remove(){
//     sessionStorage.removeItem('cart');
//     this.ngOnInit();
//   }
//   // confirm(){
//   //   if(localStorage.getItem('username')==null)
//   //   {
//   //     this.router.navigate(['./Login']);
//   //   }
//   //   this.qty = parseInt((<HTMLInputElement>document.getElementById('value')).value);
//   //   localStorage.setItem('qty_bought',this.qty.toString());
//   //   this.router.navigate(['./User/Confirm-Page']);
//   // }




// }
