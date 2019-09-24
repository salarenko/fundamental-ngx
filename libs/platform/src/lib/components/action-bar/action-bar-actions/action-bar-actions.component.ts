import {
  Component, OnInit, Input, QueryList, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import { ActionbarService } from '../actionbar.service';




export interface ActionItem {

  label: string;
  type: string;
  priority: number;
  callback(): void;
}

@Component({
  selector: 'fdp-action-bar-actions',
  templateUrl: './action-bar-actions.component.html',
  styleUrls: ['./action-bar-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarActionsComponent implements OnInit {




  constructor(
    public cd: ChangeDetectorRef, private actionbarservice: ActionbarService) {
  }

  @Input() placement: string;
  buttonItems: ActionItem[] = [];
  menuItems: ActionItem[] = [];
  MAX_BUTTONS = 3;
  @Input() actionItems: [any];

  orderedActionItems: [any];

  @Output() itemClick: EventEmitter<ActionItem> = new EventEmitter<ActionItem>();

  @Output() rename: EventEmitter<boolean> = new EventEmitter();

  isEditTitle: boolean;
  isEditModeOn: boolean;

  ngOnInit() {
    this.orderActionItem();
    this.splitActionItems();
    this.actionbarservice.castEditTitle.subscribe(editTitle => {
      this.isEditTitle = editTitle;
      this.cd.detectChanges();
    });


  }

  orderActionItem() {
    this.orderedActionItems = this.actionItems.sort(function (a, b) {
      return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0
    });
  }

  splitActionItems() {
    let j = 0;
    for (let i = 0; i < this.orderedActionItems.length; i++) {
      if (i < this.MAX_BUTTONS) {
        this.buttonItems[i] = this.orderedActionItems[i];
      }
      else {

        this.menuItems[j++] = this.orderedActionItems[i];

      }
    }
    console.log('button', this.buttonItems);
    console.log('menu', this.menuItems);
  }

  onItemClick(item: ActionItem): void {

    this.itemClick.emit(item);
    this.cd.detectChanges();
    item.callback();
    console.log('action clicked', item.label);
  }
  onRename() {
    console.log('Rename Clicked');
    this.isEditModeOn = true;
    this.actionbarservice.setEditMode(this.isEditModeOn);
    this.cd.detectChanges();
  }

}
