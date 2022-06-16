import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PopularComponent } from './components/popular/popular.component';

import { NZ_I18N, th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountDownComponent } from './components/count-down/count-down.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { RegUserFormComponent } from './components/reg-user-form/reg-user-form.component';
import { RegClubFormComponent } from './components/reg-club-form/reg-club-form.component';

registerLocaleData(th);
@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    CountDownComponent,
    LoginPageComponent,
    HomePageComponent,
    SignUpPageComponent,
    BackButtonDirective,
    RegUserFormComponent,
    RegClubFormComponent,
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
    BrowserAnimationsModule,
    NzCarouselModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzCheckboxModule,
    NzSelectModule,
    NzUploadModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent],
})
export class AppModule {}
