import { Component, Input, OnInit } from '@angular/core';
import { RenderedItem } from "@youtube/models";
import { DataStoreService } from "@youtube/services";
import { Helper } from "@shared/helpers";
// import { DOCUMENT } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { DialogWindowComponent } from "@shared/components/dialog-window/dialog-window.component";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item!: RenderedItem;

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private stateService: DataStoreService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.stateService.setSearchTermDataItem(this.item);
  }

  getShortTitle(text: string): string {
    return Helper.getShortText(text, 60);
  }

  goToChannel(id: string): void {
    const dialogRef = this.dialog.open(DialogWindowComponent, {width: '250px'});
    dialogRef.afterClosed().subscribe(res => {
      if (!!res) {
        // window.location.href = `http://youtube.com/channel/${id}`;
        // this.document.location.href = `http://youtube.com/channel/${id}`;
        window.open(`http://youtube.com/channel/${id}`, '_blank');
      }
    })
  }
}
