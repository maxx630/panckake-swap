import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConnectWalletComponent } from './shared/connect-wallet/connect-wallet.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { EarnPassiveIncomeComponent } from './features/home/earn-passive-income/earn-passive-income.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectWalletComponent,
    HeroComponent,
    EarnPassiveIncomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
