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

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
    AllEventComponent,
    ModalEventDescription,
    CountDownComponent,
    ClubHomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzStatisticModule,
    NzAlertModule,
    NzIconModule,
    NzTypographyModule,
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
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
