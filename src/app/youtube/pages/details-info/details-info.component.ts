import { Component, OnInit } from '@angular/core';
import { Item } from "@youtube/models";
import { ActivatedRoute } from "@angular/router";
import { SearchResultDataService } from "@youtube/services";

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss']
})
export class DetailsInfoComponent implements OnInit{
  item!: Item | undefined;

  constructor(public route: ActivatedRoute, private dataService: SearchResultDataService) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.params['id'];
    this.item = this.dataService.getItemById(itemId);
  }

}
