import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponentComponent} from './components/first-component/first-component.component';
import {BindingComponent} from './components/binding/binding.component';
import {NgModelComponent} from './components/ng-model/ng-model.component';
import {DirectivesComponent} from './components/directives/directives.component';
import {EventHandleComponent} from './components/event-handle/event-handle.component';
import {ServicesComponent} from './components/services/services.component';
import {InputComponent} from './components/input/input.component';
import {OutputComponent} from './components/output/output.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponentComponent
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'ng-model',
    component: NgModelComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'event-handle',
    component: EventHandleComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'output',
    component: OutputComponent
  },
  /*{
    path: '', redirectTo: '/first-component',
    pathMatch: 'full'
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
