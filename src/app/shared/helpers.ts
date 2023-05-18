import { BarColor } from "@youtube/models";
import moment from "moment";

export namespace Helper {
  export function getSearchResultDataBarColor(date: string | Date): BarColor {
    const daysAmount = moment(new Date()).diff(moment(date), 'days');
    const monthAmount = moment(new Date()).diff(moment(date), 'months');

    if (daysAmount <= 7 && monthAmount === 0) {
      return BarColor.Blue;
    } else if (daysAmount > 7 && monthAmount === 0) {
      return BarColor.Green;
    } else if (monthAmount >= 1 && monthAmount <= 6) {
      return BarColor.Yellow;
    } else if (monthAmount > 6) {
      return BarColor.Red;
    } else {
      return BarColor.Default;
    }
  }
}
