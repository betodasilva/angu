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


@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserComponent,
    SearchComponent,
    Debounce,
    HeroComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
