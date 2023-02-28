import { Component, Input } from '@angular/core';
import { Item } from "@youtube/models";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item!: Item;
}
