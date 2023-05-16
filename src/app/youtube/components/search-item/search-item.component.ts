import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenderedItem } from "@youtube/models";
import { DataStoreService } from "@youtube/services";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: RenderedItem;

  constructor(private router: Router, private stateService: DataStoreService) {}

  ngOnInit() {
    this.stateService.setSearchTermDataItem(this.item);
  }

  openDetails(id: string) {
    this.router.navigate(['youtube/detail', id]).then();
  }
}
