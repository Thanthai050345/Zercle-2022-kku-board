import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TestComponent } from './components/test/test.component';
import { PopularComponent } from './components/popular/popular.component';
import { LoginPage } from './pages/login/login';
import { NZ_I18N, th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { CountDownComponent } from './components/count-down/count-down.component';

import { NZ_I18N, th_TH} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';

import { FormsModule } from '@angular/forms';
>>>>>>> 148d04943f696e27ab896ebe8e9af13141e5520e
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
<<<<<<< HEAD
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
=======

>>>>>>> 148d04943f696e27ab896ebe8e9af13141e5520e
registerLocaleData(th);

registerLocaleData(th);
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TestComponent,
    PopularComponent,
    LoginPage,
=======
    CountDownComponent,
>>>>>>> 148d04943f696e27ab896ebe8e9af13141e5520e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzStatisticModule,
    NzButtonModule,
    NzAlertModule,
    NzIconModule,
    NzTypographyModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    NzCarouselModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule
=======
>>>>>>> 148d04943f696e27ab896ebe8e9af13141e5520e
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent],
})
export class AppModule { }
