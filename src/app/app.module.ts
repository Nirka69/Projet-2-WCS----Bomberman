import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GameComponent } from './game/game.component';
import { CharacterComponent } from './character/character.component';
import { GameStateService } from './game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GameComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
