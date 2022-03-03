import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsComponent } from './features/earn/farms/farms.component';
import { HomeComponent } from './features/home/home/home.component';
import { OverviewComponent } from './features/nfts/overview/overview.component';
import { ExchangeComponent } from './features/trade/exchange/exchange.component';
import { AddSectionComponent } from './features/trade/liquidity/add-section/add-section.component';
import { LiquidityComponent } from './features/trade/liquidity/liquidity.component';
import { SwapComponent } from './shared/swap/swap.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'liquidity',
    component: SwapComponent
  },
  {
    path: 'add',
    component: AddSectionComponent
  },
  {
    path: 'nfts',
    component: OverviewComponent
  },
  {
    path: 'swap',
    component: SwapComponent
  },
  {
    path: 'farms',
    component: FarmsComponent
  },
  {
    path: 'pools',
    component: FarmsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
