import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}],
  bootstrap: [AppComponent]
})
export class AppModule { }
