import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, th_TH} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzAlertModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
