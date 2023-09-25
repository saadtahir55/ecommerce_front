import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { oneCommonModule } from './common-components/one-common.module';
import { ConnectComponent } from './connect/connect.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { HotDealsComponent } from './features/hot-deals/hot-deals.component';
import { SmartphonesComponent } from './features/smartphones/smartphones.component';
import { TabletsComponent } from './features/tablets/tablets.component';
import { LaptopsComponent } from './features/laptops/laptops.component';
import { SoundsComponent } from './features/sounds/sounds.component';
import { TechnologyToysComponent } from './features/technology-toys/technology-toys.component';
import { AccessoriesComponent } from './features/accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HomeComponent,
    HotDealsComponent,
    SmartphonesComponent,
    TabletsComponent,
    LaptopsComponent,
    SoundsComponent,
    TechnologyToysComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    oneCommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
