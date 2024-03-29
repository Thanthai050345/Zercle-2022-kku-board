import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { MyTableEventComponent } from './components/my-table-event/my-table-event.component';
import { ModalEventDescription } from './components/KB-43-modal-event-description-component-frontend/ModalEventDescription';
import { AllEventComponent } from './components/KB-26-all-event-component-frontend/all-event-component';
import { PopularEventComponent } from './components/popular-event/popular-event.component';

import { NZ_I18N, th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
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
import { NzTableModule } from 'ng-zorro-antd/table';
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
import { ClubHomePage } from'./components/KB-36-component-in-club-home-page-frontend/ClubHomePage';
import { AddMemberButtonComponent } from './components/add-member-button/add-member-button.component'
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

registerLocaleData(th);
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    MyTableEventComponent,
    LoginPageComponent,
    HomePageComponent,
    SignUpPageComponent,
    BackButtonDirective,
    RegUserFormComponent,
    RegClubFormComponent,
    ModalEventDescription,
    AllEventComponent,
    PopularEventComponent,
    TopBarComponent,
    ClubHomePage,
    ClubHomePageComponent,
    UploadImageComponent,
    CalendarComponent,
    EventUserPageComponent,
    EventClubPageComponent,
    AddMemberButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FullCalendarModule,
    AngularFireModule,
    NzStatisticModule,
    NzButtonModule,
    NzIconModule,
    NzCalendarModule,
    NzEmptyModule,
    NzTableModule,
    NzDividerModule,
    NzAlertModule,
    NzCarouselModule,
    NzFormModule,
    NzInputModule,
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
    NzTableModule,
    NzTagModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: th_TH },
    { provide: HTTP_INTERCEPTORS, useClass: CatchApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
