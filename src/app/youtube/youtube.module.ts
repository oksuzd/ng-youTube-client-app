import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared/shared.module";
import { SearchResultsComponent } from "@youtube/components/search-results/search-results.component";
import { SearchItemComponent } from "@youtube/components/search-results/components/search-item/search-item.component";
import { FilterComponent } from "@youtube/components/filter/filter.component";
import { FooterBarColorDirective } from "@youtube/directives/footer-bar-color.directive";
import { FilterByCriteriaPipe } from "./pipes/filter-by-criteria.pipe";
import { DetailsInfoComponent } from './pages/details-info/details-info.component';
import { DataStoreService } from "@youtube/services/data-store.service";
import { SearchResultDataService } from "@youtube/services";


@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    FooterBarColorDirective,
    FilterByCriteriaPipe,
    DetailsInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
  ],
  providers: [
    DataStoreService,
    SearchResultDataService,
  ]
})
export class YoutubeModule { }
