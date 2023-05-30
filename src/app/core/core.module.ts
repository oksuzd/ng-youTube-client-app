import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@core/components/header/header.component';
import { LoginComponent } from '@core/components/header/components/login/login.component';
import { LogoComponent } from '@core/components/header/components/logo/logo.component';
import { SearchInputComponent } from '@core/components/header/components/search-input/search-input.component';
import { SettingsButtonComponent } from '@core/components/header/components/settings-button/settings-button.component';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { ErrorInterceptor } from "@core/interceptors/error.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    FooterComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
})
export class CoreModule {}
