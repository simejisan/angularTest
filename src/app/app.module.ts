import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { BindingComponent } from './components/binding/binding.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import {FormsModule} from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventHandleComponent } from './components/event-handle/event-handle.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    BindingComponent,
    NgModelComponent,
    DirectivesComponent,
    EventHandleComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
