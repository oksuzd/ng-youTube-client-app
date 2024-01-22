import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SearchItemComponent } from '@youtube/components/search-item/search-item.component';
import { FooterBarColorDirective } from '@youtube/directives/footer-bar-color.directive';
import { DetailsInfoComponent } from './pages/details-info/details-info.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchParamsComponent } from './components/search-params/search-params.component';

const routes: Routes = [
  {path: '', redirectTo: 'search-result', pathMatch: 'full'},
  {path: 'search-result', component: SearchResultPageComponent},
  {path: 'detail/:id', component: DetailsInfoComponent},
];

@NgModule({
  declarations: [
    SearchItemComponent,
    FooterBarColorDirective,
    DetailsInfoComponent,
    SearchResultPageComponent,
    SearchParamsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
  ],
})
export class YoutubeModule {
}
