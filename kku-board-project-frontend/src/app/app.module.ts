import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PopularComponent } from './components/popular/popular.component';
import { ModalEventDescription } from './components/KB-43-modal-event-description-component-frontend/ModalEventDescription';
import { AllEventComponent } from './components/KB-26-all-event-component-frontend/all-event-component';
import { ClubHomePage } from './components/KB-36-component-in-club-home-page-frontend/ClubHomePage';
import { PopularEventComponent } from './components/popular-event/popular-event.component';

import { NZ_I18N, th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountDownComponent } from './components/count-down/count-down.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { environment } from '../environments/environment';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { BackButtonDirective } from './directives/back-button.directive';
import { RegUserFormComponent } from './components/reg-user-form/reg-user-form.component';
import { RegClubFormComponent } from './components/reg-club-form/reg-club-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ClubHomePageComponent } from './pages/club-home-page/club-home-page.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventUserPageComponent } from './pages/event-user-page/event-user-page.component';
import { EventClubPageComponent } from './pages/event-club-page/event-club-page.component';
import { CatchApiInterceptor } from './interceptors/catch-api.interceptor';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);
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
    ModalEventDescription,
    AllEventComponent,
    ClubHomePage,
    PopularEventComponent,
    TopBarComponent,
    ClubHomePageComponent,
    UploadImageComponent,
    CalendarComponent,
    EventUserPageComponent,
    EventClubPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FullCalendarModule,
    AngularFireModule,
    NzStatisticModule,
    NzButtonModule,
    NzAlertModule,
    NzIconModule,
    NzTypographyModule,
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
    NzPaginationModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzImageModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzBadgeModule,
    NzAvatarModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: th_TH },
    { provide: HTTP_INTERCEPTORS, useClass: CatchApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
