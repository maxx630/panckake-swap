import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ConnectWalletComponent } from './core/connect-wallet/connect-wallet.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { EarnPassiveIncomeComponent } from './pages/home/earn-passive-income/earn-passive-income.component';
import { TradeAnythingComponent } from './pages/home/trade-anything/trade-anything.component';
import { WinMillionsComponent } from './pages/home/win-millions/win-millions.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home/home.component';
import { TradeComponent } from './pages/trade/trade/trade.component';
import { ExchangeComponent } from './pages/trade/exchange/exchange.component';
import { LiquidityComponent } from './pages/trade/liquidity/liquidity.component';
import { AddSectionComponent } from './pages/trade/liquidity/add-section/add-section.component';
import { CakeComponent } from './pages/home/cake/cake.component';
import { StartInSecondsComponent } from './pages/home/start-in-seconds/start-in-seconds.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './shared/chart/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { SwapComponent } from './shared/swap/swap.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { UsedByMillionsComponent } from './pages/home/used-by-millions/used-by-millions.component';
import { EarnModule } from './pages/earn/earn.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectWalletComponent,
    HeroComponent,
    EarnPassiveIncomeComponent,
    TradeAnythingComponent,
    WinMillionsComponent,
    HomeComponent,
    TradeComponent,
    ExchangeComponent,
    LiquidityComponent,
    AddSectionComponent,
    CakeComponent,
    StartInSecondsComponent,
    LineChartComponent,
    SwapComponent,
    UsedByMillionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
