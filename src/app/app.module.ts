import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
=======
import { MapComponent } from './map/map.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GameComponent
>>>>>>> dev
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
