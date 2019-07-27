import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularComponent } from './pages/angular/angular.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { GooglecloudComponent } from './pages/googlecloud/googlecloud.component';

@NgModule({
  declarations: [AppComponent, AngularComponent, JavascriptComponent, GooglecloudComponent],
  imports: [BrowserModule, AppRoutingModule, AngularFontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
