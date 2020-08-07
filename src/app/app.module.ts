import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwowayComponent } from './twoway/twoway.component';
import { SwitchComponent } from './switch/switch.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomHerosPipe } from './custom-heros.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TemplateReferenceComponent,
    TwowayComponent,
    SwitchComponent,
    ComponentInteractionComponent,
    PipesComponent,
    CustomPipeComponent,
    CustomHerosPipe
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
