import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountDownComponent } from './components/count-down/count-down.component';

import { NZ_I18N, th_TH} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

registerLocaleData(th);

registerLocaleData(th);
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    UserHomePageComponent,
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
    NzAvatarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
