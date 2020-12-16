import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CreateAdComponent } from "../create-ad/create-ad.component";
import { CreateLifeEventComponent } from "../create-life-event/create-life-event.component";
import { CreatePostComponent } from "../create-post/create-post.component";
import { DropDownItems, DropDownProperties } from "../generic-drop-down/dropDownItems";
import { CreateInfo } from "../login/login-info";
import { UserDetailsServiceService } from "../user-details-service.service";
import { ACCOUNT_DROPDOWN_ITEMS, ACCOUNT_DROPDOWN_PROPERTIES } from "./Account-constant";
import { CREATE_DROPDOWN_ITEMS, CREATE_DROPDOWN_PROPERTIES } from "./Create-constant";
import { CREATE_DROPDOWN_ITEMS_IDS } from "./dropdown-items-ids";
import { MESSENGER_DROPDOWN_ITEMS, MESSENGER_DROPDOWN_PROPERTIES } from "./Messenger-constant";
import {
  NOTIFICATIONS_DROPDOWN_ITEMS,
  NOTIFICATIONS_DROPDOWN_PROPERTIES
} from "./Notifications-constant";


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  userInfo: CreateInfo;
  createDropDownItems: Array<DropDownItems> = CREATE_DROPDOWN_ITEMS;
  messengerDropDownItems: Array<DropDownItems> = MESSENGER_DROPDOWN_ITEMS;
  notificationsDropDownItems: Array<DropDownItems> = NOTIFICATIONS_DROPDOWN_ITEMS;
  accountDropDownItems: Array<DropDownItems> = ACCOUNT_DROPDOWN_ITEMS;
  messengerDropDownProperties: DropDownProperties = MESSENGER_DROPDOWN_PROPERTIES;
  createDropDownProperties: DropDownProperties = CREATE_DROPDOWN_PROPERTIES;
  notificationDropDownProperties: DropDownProperties = NOTIFICATIONS_DROPDOWN_PROPERTIES;
  accountDropDownProperties: DropDownProperties = ACCOUNT_DROPDOWN_PROPERTIES;
  // messengerTemplateDropdownProperties: DropDownProperties = MESSENGER_TEMPLATE_DROPDOWN_PROPERTIES;
  // messengerTemplateDropdownItems: Array<DropDownItems> = MESSENGER_TEMPLATE_DROPDOWN_ITEMS;

  @ViewChild('messengerTemplate', { static: true }) messengerTemplateRef: TemplateRef<any>;
  @ViewChild('notificationTemplate', { static: true }) notificationTemplateRef: TemplateRef<any>;
  @ViewChild('accountTemplate', { static: true }) accountTemplateRef: TemplateRef<any>;
  @ViewChild('notificationSubHeaderTemplate', { static: true }) notificationSubHeaderTemplateRef: TemplateRef<any>;
  @ViewChild('accountBottomTemplate', { static: true }) accountBottomTemplateRef: TemplateRef<any>;
  @ViewChild('accountLabelTemplate', { static: true }) accountLabelTemplateRef: TemplateRef<any>;
  @ViewChild('accountDarkMoodTemplate', { static: true }) accountDarkMoodTemplateRef: TemplateRef<any>;
  @ViewChild('messengerTemplateDropdown', { static: true }) messengerTemplateDropdownRef: TemplateRef<any>;
  // notificationHeaderDropdownProperties: DropDownProperties = NOTIFICATIONS_HEADER_DROPDOWN_PROPERTIES;
  // notificationHeaderDropdownItems: Array<DropDownItems> = NOTIFICATIONS_HEADER_DROPDOWN_ITEMS;

  constructor(private userDetailsService: UserDetailsServiceService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activeUser();
    console.log(this.userInfo);
    this.prepareDropDownProperties();

  }

  activeUser() {
    this.userInfo = this.userDetailsService.getActiveUserInfo();
    if (!this.userInfo) {
      this.router.navigate(['/login-page']);
    }
  }

  prepareNotificationsDropDownItems() {
    for (const item of this.notificationsDropDownItems) {

      if (item.subHeader !== undefined && item.subHeader.label === "Friend Request") {
        item.subHeader.template = this.notificationSubHeaderTemplateRef;
        // console.log(item.subHeader.template);
      }
    }
    return this.notificationsDropDownItems;
  }

  prepareAccountDropDownItemsLabelTemplate() {
    for (const item of this.accountDropDownItems) {
      if (item.labelInfo.labelHeader !== undefined && item.labelInfo.labelHeader === "Setting & Privacy" && "Help & Support") {
        item.labelInfo.labelTemplate = this.accountLabelTemplateRef;
      }
      if (item.labelInfo.labelHeader !== undefined && item.labelInfo.labelHeader === "Help & Support") {
        item.labelInfo.labelTemplate = this.accountLabelTemplateRef;
      }
      if (item.labelInfo.labelHeader !== undefined && item.labelInfo.labelHeader === "Dark Mood") {
        item.labelInfo.labelTemplate = this.accountDarkMoodTemplateRef;
      }
    }
    return this.accountDropDownItems;
  }

  public prepareDropDownProperties() {
    this.notificationDropDownProperties.header.template = this.notificationTemplateRef;
    this.messengerDropDownProperties.header.template = this.messengerTemplateRef;
    this.accountDropDownProperties.bottomTemplate = this.accountBottomTemplateRef;
    this.accountDropDownProperties.header = { template: this.accountTemplateRef };
    // this.messengerTemplateDropdownProperties.header = { template: this.messengerTemplateDropdownRef }
  }

  public dropDownItemsClick(id: string): void {
    switch (id) {
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_POST:
        this.dialog.open(CreatePostComponent, {
          width: '500px',
          height: '430px',
        });
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_STORY:
        this.router.navigate(['/story']);
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_LIFE_EVENT:
        this.dialog.open(CreateLifeEventComponent, {
          width: '500px',
          height: '428px',
        });
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_PAGE:
        this.router.navigate(['/page']);
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_AD:
        this.dialog.open(CreateAdComponent, {
          width: '500px',
          height: '428px',
        });
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_GROUP:
        this.router.navigate(['/group']);
        break;
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_EVENT:
        this.router.navigate(['/event']);
      case CREATE_DROPDOWN_ITEMS_IDS.CREATE_FUNDRAISER:
        this.router.navigate(['/fundraiser']);
        break;
        break;
      default:
        break;

    }
  }
}
