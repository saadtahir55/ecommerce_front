import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SoundsComponent } from './sounds/sounds.component';
import { TechnologyToysComponent } from './technology-toys/technology-toys.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hot_deals', component: HotDealsComponent},
  {path: 'smart_phones', component: SmartphonesComponent},
  {path: 'tablets', component: TabletsComponent},
  {path: 'laptops', component: LaptopsComponent},
  {path: 'sounds', component: SoundsComponent},
  {path: 'technology_toys', component: TechnologyToysComponent},
  {path: 'accessories', component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
