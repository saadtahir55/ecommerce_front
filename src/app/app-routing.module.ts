import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HotDealsComponent } from './features/hot-deals/hot-deals.component';
import { SmartphonesComponent } from './features/smartphones/smartphones.component';
import { TabletsComponent } from './features/tablets/tablets.component';
import { LaptopsComponent } from './features/laptops/laptops.component';
import { TechnologyToysComponent } from './features/technology-toys/technology-toys.component';
import { AccessoriesComponent } from './features/accessories/accessories.component';

const routes: Routes = [
  {path: '/', component: HomeComponent},
  {path: '/hot_deals', component: HotDealsComponent},
  {path: '/smart_phones', component: SmartphonesComponent},
  {path: '/tablets', component: TabletsComponent},
  {path: '/laptops', component: LaptopsComponent},
  {path: '/technology_toys', component: TechnologyToysComponent},
  {path: '/accessories', component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
