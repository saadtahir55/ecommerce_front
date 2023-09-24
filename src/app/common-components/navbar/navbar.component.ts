import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/environment/environment';
import { endPoint } from 'src/app/constant/endpoint';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends BaseService implements OnInit {

  headerData: any;
  setlanguage: string = 'English';
  setCurrency: string = 'US Dollars';
  topNavbar: any;

  currency: any = ['US Dollars', 'PAK Rs'];
  language: any = ['English', 'Urdu'];

  ngOnInit() {
    this.fetchNavbarData();
  }

  setTopData(event: any) {
    let textContext = event.target.innerText;
    if (textContext == 'US Dollars' || textContext == 'PKR Rs') {
      this.setCurrency = textContext;
    } else {
      this.setlanguage = textContext;
    }
  }

  fetchNavbarData() {
    this._http.getData(environment.apiUrl, endPoint.NAVBAR).subscribe(res=>{
      this.topNavbar = res;
    })
  }



}
