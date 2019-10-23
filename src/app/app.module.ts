import { PlatoonComponent } from './platoon/platoon.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from 'src/interceptors/api.interceptor';
import { ErrorInterceptor } from 'src/interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {
  CompanyComponent,
  Modal,
  ScheduleModal
} from './company/company.component';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClarityModule, ClrTreeViewModule } from '@clr/angular';
import { NotifierModule } from 'angular-notifier';
import { ContextMenuModule } from 'ngx-contextmenu';
import { ContextModal } from './modals/context-menu-modal/context-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CompanyComponent,
    NavigationComponent,
    PlatoonComponent,
    Modal,
    ScheduleModal,
    ContextModal
  ],
  entryComponents: [Modal, ScheduleModal, ContextModal],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ClarityModule,
    BrowserAnimationsModule,
    NotifierModule,
    ContextMenuModule.forRoot({
      autoFocus: true
      // useBootstrap4: true,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
