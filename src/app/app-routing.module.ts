import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsComponent } from './pages/earn/farms/farms.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ActivityComponent } from './pages/nfts/activity/activity.component';
import { CollectionsComponent } from './pages/nfts/collections/collections.component';
import { OverviewComponent } from './pages/nfts/overview/overview.component';
import { ExchangeComponent } from './pages/trade/exchange/exchange.component';
import { AddSectionComponent } from './pages/trade/liquidity/add-section/add-section.component';
import { LiquidityComponent } from './pages/trade/liquidity/liquidity.component';
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
  {
    path: 'nfts/collections',
    component: CollectionsComponent
  },
  {
   path: 'nfts/activity',
   component: ActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
