import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {CategoryComponent} from './admin-panel/category/category.component'
import { MedicineComponent } from './admin-panel/medicine/medicine.component';
import { ForuserComponent } from './admin-panel/foruser/foruser.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
// import {ContactComponent} from './contact/contact.component'
// import { CartComponent } from './home/cart/cart.component';
// import { CartComponent } from './home/cart/cart.component';


const routes: Routes = [

  {path:'',redirectTo:'/user/login',pathMatch:'full'},

  //user -- (login,register)
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  //home
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],
  // children: [
  //   { path: 'cart', component: CartComponent }
  // ]
},

  //error component
  {path:'forbidden',component:ForbiddenComponent},


  //admin -- (category,)
  {
    path:'adminpanel',component:AdminPanelComponent , canActivate:[AuthGuard] , data : {permittedRoles : ['Admin']},
    children: [
          { path: 'category', component: CategoryComponent },
          { path: 'medicine', component: MedicineComponent },
          { path: 'foruser', component: ForuserComponent }
        ]
  },
  {path:'cart',component:CartComponent, canActivate:[AuthGuard]},
  
  {path:'contact',component:ContactComponent},
  
  {path:'about',component:AboutComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }