import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:49918/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.BaseURI + '/UserProfile'); 
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }



  //Admin related services starts from here
  getCatList():Observable<any[]>{
    return this.http.get<any>(this.BaseURI + '/Category');
  }
  addCategory(val:any){
    return this.http.post(this.BaseURI + '/Category' , val);
  }
  updateCategory(val:any){
    return this.http.put(this.BaseURI + '/Category' , val);
  }
  deleteCategory(val:any){
    return this.http.delete(this.BaseURI + '/Category/' + val);
  }




  getMedList():Observable<any[]>{
    return this.http.get<any>(this.BaseURI + '/Medicine');
  }
  getMedicineDetails(val:any){
    return this.http.get<any>(this.BaseURI + '/Medicine/' + val);
  }
  addMedicine(val:any){
    return this.http.post(this.BaseURI + '/Medicine' , val);
  }
  updateMedicine(val:any){
    return this.http.put(this.BaseURI + '/Medicine' , val);
  }
  deleteMedicine(val:any){
    return this.http.delete(this.BaseURI + '/Medicine/' + val);
  }



  getUserList():Observable<any[]>{
    return this.http.get<any>(this.BaseURI + '/UserProfile/GetAllUsers');
  }
  deleteUser(val:any){
    return this.http.delete(this.BaseURI + '/UserProfile/' + val);
  }



}