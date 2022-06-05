import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModuleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
