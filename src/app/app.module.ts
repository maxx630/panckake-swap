import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CakeComponent } from './features/home/cake/cake.component';
import { StartInSecondsComponent } from './features/home/start-in-seconds/start-in-seconds.component';
import { NftsComponent } from './features/nfts/nfts.component';
import { CollectionsComponent } from './features/nfts/collections/collections.component';
import { ActivityComponent } from './features/nfts/activity/activity.component';
import { OverviewComponent } from './features/nfts/overview/overview.component';
import { NewestCollectionsComponent } from './features/nfts/overview/newest-collections/newest-collections.component';
import { HotCollectionsComponent } from './features/nfts/overview/hot-collections/hot-collections.component';
import { NewestArrivalsComponent } from './features/nfts/overview/newest-arrivals/newest-arrivals.component';
import { FaqsComponent } from './features/nfts/overview/faqs/faqs.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './shared/chart/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';




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
    NftsComponent,
    CollectionsComponent,
    ActivityComponent,
    OverviewComponent,
    NewestCollectionsComponent,
    HotCollectionsComponent,
    NewestArrivalsComponent,
    FaqsComponent,
    TabsComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
