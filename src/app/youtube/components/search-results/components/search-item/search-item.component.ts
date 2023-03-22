import { Component, Input } from '@angular/core';
import { Item } from "@youtube/models";
import { Router } from "@angular/router";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item!: Item;

  constructor(private router: Router) {
  }

  openDetails() {
    this.router.navigate(['search-result', this.item.id]).then();
  }
}
