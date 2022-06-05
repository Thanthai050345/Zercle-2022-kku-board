import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { MyTableEventComponent } from './components/my-table-event/my-table-event.component';

import { NZ_I18N, th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(th);
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CountDownComponent,
    MyTableEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTypographyModule,
    NzStatisticModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
