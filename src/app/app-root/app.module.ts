import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Modules
import { AppRoutingModule } from '../app-routing/app-routing.module';

// App Modules
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
