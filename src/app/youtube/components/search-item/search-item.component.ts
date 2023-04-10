import { Component, Input, OnInit } from '@angular/core';
import { Item } from "@youtube/models";
import { Router } from "@angular/router";
import { DataStoreService } from "@youtube/services/data-store.service";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: Item;

  constructor(private router: Router,
              private stateService: DataStoreService) {
  }

  ngOnInit() {
    this.stateService.setDataItem(this.item);
  }

  openDetails(id: string) {
    this.router.navigate(['youtube/detail', id]).then();
  }
}
