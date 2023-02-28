import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "@core/components/header/header.component";
import { LoginComponent } from "@core/components/header/components/login/login.component";
import { LogoComponent } from "@core/components/header/components/logo/logo.component";
import { SearchInputComponent } from "@core/components/header/components/search-input/search-input.component";
import { SettingsButtonComponent } from "@core/components/header/components/settings-button/settings-button.component";
import { SharedModule } from "@shared/shared.module";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
    exports: [
        HeaderComponent,
        LoginComponent,
        LogoComponent,
        SearchInputComponent,
        SettingsButtonComponent,
        FooterComponent,
    ],
})
export class CoreModule { }
