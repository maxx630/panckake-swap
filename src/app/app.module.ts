import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ConnectWalletComponent } from './core/connect-wallet/connect-wallet.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { EarnPassiveIncomeComponent } from './features/home/earn-passive-income/earn-passive-income.component';
import { TradeAnythingComponent } from './features/home/trade-anything/trade-anything.component';
import { WinMillionsComponent } from './features/home/win-millions/win-millions.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './features/home/home/home.component';
import { TradeComponent } from './features/trade/trade/trade.component';
import { ExchangeComponent } from './features/trade/exchange/exchange.component';
import { LiquidityComponent } from './features/trade/liquidity/liquidity.component';
import { AddSectionComponent } from './features/trade/liquidity/add-section/add-section.component';
import { CakeComponent } from './core/cake/cake.component';


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
    CakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
