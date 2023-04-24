import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SearchItemComponent } from '@youtube/components/search-item/search-item.component';
import { FilterComponent } from '@youtube/components/filter/filter.component';
import { FooterBarColorDirective } from '@youtube/directives/footer-bar-color.directive';
import { FilterByCriteriaPipe } from './pipes/filter-by-criteria.pipe';
import { DetailsInfoComponent } from './pages/details-info/details-info.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
  { path: '', redirectTo: 'search-result', pathMatch: 'full' },
  { path: 'search-result', component: SearchResultPageComponent },
  { path: 'detail/:id', component: DetailsInfoComponent },
];

@NgModule({
  declarations: [
    SearchItemComponent,
    FilterComponent,
    FooterBarColorDirective,
    FilterByCriteriaPipe,
    DetailsInfoComponent,
    SearchResultPageComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        NgxSpinnerModule
    ],
  exports: [
    SearchItemComponent,
    FilterComponent],
})
export class YoutubeModule {}
