import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ConnectWalletComponent } from './core/connect-wallet/connect-wallet.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { EarnPassiveIncomeComponent } from './features/home/earn-passive-income/earn-passive-income.component';
import { WinMillionsComponent } from './features/home/win-millions/win-millions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectWalletComponent,
    HeroComponent,
    EarnPassiveIncomeComponent,
    WinMillionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
