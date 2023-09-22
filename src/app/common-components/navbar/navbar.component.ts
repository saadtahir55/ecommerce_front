import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private http: HttpClient){}

  headerData: any;
  setlanguage: string = 'English';
  setCurrency: string = 'US Dollars';
  topNavbar: any;

  currency: any = ['US Dollars', 'PAK Rs'];
  language: any = ['English', 'Urdu'];
  
  ngOnInit() {
    this.fetchNavbarData();
  }
  
  setTopData(event: any){
    let textContext = event.target.innerText;
    if(textContext == 'US Dollars' || textContext == 'PKR Rs'){
      this.setCurrency = textContext;
    }else{
      this.setlanguage = textContext;
    }
  }

  fetchNavbarData(){
    this.http.get('http://192.168.0.110:5000/api/navbar').subscribe((res: any) => {
      this.topNavbar = res;
      console.log(this.topNavbar);
    })
  }

  
  
}
