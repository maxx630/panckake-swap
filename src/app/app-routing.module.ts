import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ExchangeComponent } from './features/trade/exchange/exchange.component';
import { AddSectionComponent } from './features/trade/liquidity/add-section/add-section.component';
import { LiquidityComponent } from './features/trade/liquidity/liquidity.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'liquidity',
  component: LiquidityComponent
  },
  {
  path: 'swap',
  component: ExchangeComponent
  },
  {
    path: 'add',
    component: AddSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }