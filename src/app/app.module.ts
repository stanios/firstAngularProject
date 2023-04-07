import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInputComponent } from './component-input/component-input.component';
import { SimpleTable0Component } from './component-input/simple-table0/simple-table0.component';
import { ComponentInputOutputComponent } from './component-input-output/component-input-output.component';
import { SimpleTable1Component } from './component-input-output/simple-table1/simple-table1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';


const routes: Routes = [
  { path: 'greeting', component: GreetingComponent },
  { path: 'one-way-bind', component: OneWayBindComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'two-way-bind', component: TwoWayBindComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'template-variables', component: TemplateVariablesComponent },
  { path: 'component-input', component: ComponentInputComponent },
  { path: 'component-input-output', component: ComponentInputOutputComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    ComponentInputComponent,
    SimpleTable0Component,
    ComponentInputOutputComponent,
    SimpleTable1Component,
    WelcomeComponent,
    PageNotFoundComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(routes),
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
