import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedItem } from "@youtube/models";
import { DetailedItemDataService } from "@youtube/services/detailed-item-data.service";

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss'],
})
export class DetailsInfoComponent implements OnInit {
  item!: DetailedItem;

  constructor(
    public route: ActivatedRoute,
    private detailsDataService: DetailedItemDataService
  ) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.params['id'];
    this.detailsDataService.getDetailedData(itemId)
      .subscribe((item) => this.item = item);
  }

  getShortDescription(text: string): string {
    if (text.length >= 700) {
      return text.substring(0, 600) + '...';
    }
    return text;
  }
}
