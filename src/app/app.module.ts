import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-results/components/search-item/search-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { SearchInputComponent } from './components/header/components/search-input/search-input.component';
import { SettingsButtonComponent } from './components/header/components/settings-button/settings-button.component';
import { LoginComponent } from './components/header/components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from "@angular/forms";
import { FooterBarColorDirective } from './directives/footer-bar-color.directive';
import { FilterByPopularPipe } from './pipes/filter-by-popular.pipe';
import { FilterByCriteriaPipe } from './pipes/filter-by-criteria.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LogoComponent,
    SearchInputComponent,
    SettingsButtonComponent,
    LoginComponent,
    FilterComponent,
    FooterBarColorDirective,
    FilterByPopularPipe,
    FilterByCriteriaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
