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
<<<<<<< HEAD
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AllEventComponent} from './components/KB-26-all-event-component-frontend/all-event-component'
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {ModalEventDescription} from './components/KB-43-modal-event-description-component-frontend/ModalEventDescription'
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import{ ClubHomePage } from './components/KB-36-component-in-club-home-page-frontend/ClubHomePage'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';
=======
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
>>>>>>> ad4d1b21ec3a38f6e34036dd170bef1520b3a99d

import { environment } from '../environments/environment';

<<<<<<< HEAD
@NgModule({
  declarations: [
    AppComponent,
    AllEventComponent,
    ModalEventDescription,
    CountDownComponent,
    ClubHomePage
=======
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { RegUserFormComponent } from './components/reg-user-form/reg-user-form.component';
import { RegClubFormComponent } from './components/reg-club-form/reg-club-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { HomeClubPageComponent } from './pages/home-club-page/home-club-page.component';
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
    HomeClubPageComponent,
>>>>>>> ad4d1b21ec3a38f6e34036dd170bef1520b3a99d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule,
    NzStatisticModule,
    NzAlertModule,
    NzIconModule,
    NzTypographyModule,
<<<<<<< HEAD
    NzMenuModule,
    NzSelectModule,
    NzPageHeaderModule,
    NzGridModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzImageModule,
    NzBreadCrumbModule,
    NzModalModule,
    NzUploadModule,
    NzDatePickerModule,
    NzInputModule,
    NzTreeSelectModule,
    ReactiveFormsModule,
    NzFormModule
=======
    NzCarouselModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzCheckboxModule,
    NzSelectModule,
    NzUploadModule,
    AngularFireModule.initializeApp(environment.firebase),
    HotToastModule.forRoot(),
>>>>>>> ad4d1b21ec3a38f6e34036dd170bef1520b3a99d
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent],
})
export class AppModule {}
