import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { Debounce } from './app.debounce';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { TempdataService } from './tempdata.service';
import { RouterModule, Routes } from '@angular/router';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';

const appRoutes: Routes = [
  { path: 'image/:id',      component: ImagedetailComponent },
  // {
  //   path: 'heroes',  
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserComponent,
    SearchComponent,
    Debounce,
    HeroComponent,
    CardComponent,
    CardListComponent,
    ImagedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    TempdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
