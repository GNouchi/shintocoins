import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowOneComponent } from './show-one/show-one.component';


const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'mine',component: MineComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'sell',component: SellComponent },
  { path: 'ledger',component: LedgerComponent },
  { path: 'transaction/:entryid',component: ShowOneComponent },
  { path: '',  pathMatch: 'full', redirectTo: '/home' },
  { path: '**',component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
