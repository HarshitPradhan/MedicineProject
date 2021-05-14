import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoAbout()
  {
    this.router.navigate(['/about']);

  }

  gotoContact()
  {
    if(localStorage.getItem('token') != null)
    {
      this.router.navigate(['/contact']);

    }
    else{
      alert("Login First");    
      this.router.navigate(['/user/login']);

    }
  }


}
