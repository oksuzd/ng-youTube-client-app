import { Pipe, PipeTransform } from '@angular/core';
import { Item } from "../models/search-item.model";

@Pipe({
  name: 'filterByPopular'
})
export class FilterByPopularPipe implements PipeTransform {

  transform(allItems: Item[], isPopularStatus: boolean): Item[] {

    if (!isPopularStatus) {
      return allItems;
    }

    return allItems.filter((item) => item.likes >= 1000);
  }

}
