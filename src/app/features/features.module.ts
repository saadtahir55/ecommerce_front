import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SoundsComponent } from './sounds/sounds.component';
import { TechnologyToysComponent } from './technology-toys/technology-toys.component';
import { AccessoriesComponent } from './accessories/accessories.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeComponent,
    HotDealsComponent,
    SmartphonesComponent,
    TabletsComponent,
    LaptopsComponent,
    SoundsComponent,
    TechnologyToysComponent,
    AccessoriesComponent
  ]
})
export class FeaturesModule { }
