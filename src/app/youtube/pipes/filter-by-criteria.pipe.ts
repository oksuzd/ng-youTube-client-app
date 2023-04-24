import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import { Criteria, DetailedItem } from '@youtube/models';

@Pipe({
  name: 'filterByCriteria',
})
export class FilterByCriteriaPipe implements PipeTransform {
  transform(allItems: DetailedItem[], criteria: Criteria): DetailedItem[] {
    switch (criteria?.name) {
      case 'popular':
        return this.setCriteriaByPopular(allItems, criteria.status);
      case 'date':
        return this.setCriteriaByDate(allItems, criteria.status);
      case 'views':
        return this.setCriteriaByViews(allItems, criteria.status);
      case 'alphabet':
        return this.setCriteriaByAlphabet(allItems, criteria.status);
      default:
        return allItems;
    }
  }

  private setCriteriaByPopular(allItems: DetailedItem[], status: boolean): DetailedItem[] {
    if (!status) {
      return allItems;
    }
    return allItems.filter((item) => item.likes >= 50000);
  }

  private setCriteriaByDate(allItems: DetailedItem[], status: boolean): DetailedItem[] {
    if (!status) {
      return allItems.sort((a, b) =>
        moment(a.publishedAt).diff(moment(b.publishedAt))
      );
    }
    return allItems.sort((a, b) =>
      moment(b.publishedAt).diff(moment(a.publishedAt))
    );
  }

  private setCriteriaByViews(allItems: DetailedItem[], status: boolean): DetailedItem[] {
    if (!status) {
      return allItems.sort((a, b) => a.views - b.views);
    }
    return allItems.sort((a, b) => b.views - a.views);
  }

  private setCriteriaByAlphabet(allItems: DetailedItem[], status: boolean): DetailedItem[] {
    if (!status) {
      return allItems.sort((a, b) => b.title.localeCompare(a.title));
    }
    return allItems.sort((a, b) => a.title.localeCompare(b.title));
  }
}
