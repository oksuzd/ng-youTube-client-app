import { Pipe, PipeTransform } from '@angular/core';
import { Item } from "../models/search-item.model";
import { Criteria } from "../models/filters.model";


@Pipe({
  name: 'filterByCriteria'
})
export class FilterByCriteriaPipe implements PipeTransform {

  setCriteriaByPopular(array: Item[], status: boolean): Item[] {
    if (!status) {
      return array;
    }
    return array.filter((item) => item.likes >= 1000);

  }


  transform(allItems: Item[], criteria: Criteria): Item[] {
    if (!criteria?.name) {
      return allItems;
    }

    return this.setCriteriaByPopular(allItems, criteria.status);

  }
}
