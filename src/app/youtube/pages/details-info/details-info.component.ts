import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultDataService } from '@youtube/services';
import { DetailedItem } from "@youtube/models";

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss'],
})
export class DetailsInfoComponent implements OnInit {
  item!: DetailedItem | undefined;

  constructor(
    public route: ActivatedRoute,
    private dataService: SearchResultDataService
  ) {}

  ngOnInit() {
    const itemId = this.route.snapshot.params['id'];
    // this.item = this.dataService.getItemById(itemId);
  }
}
