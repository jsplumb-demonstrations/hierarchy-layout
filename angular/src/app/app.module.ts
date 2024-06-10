import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NodeComponent} from "./node.component"
import {jsPlumbToolkitModule} from "@jsplumbtoolkit/browser-ui-angular"
import {ThemeNodeComponent} from "./theme.node.component"

@NgModule({
  declarations: [
    AppComponent, NodeComponent, ThemeNodeComponent
  ],
  imports: [
    BrowserModule, jsPlumbToolkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
