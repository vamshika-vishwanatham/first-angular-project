import {DropDownItems, DropDownProperties} from "../generic-drop-down/dropDownItems";
import {CREATE_DROPDOWN_ITEMS_IDS} from "./dropdown-items-ids";

export const CREATE_DROPDOWN_ITEMS: Array<DropDownItems> = [
  {
    labelInfo: {labelHeader: "Post", labelContext: "Share a post on News Feed"},
    dropDownItemIcon: {
      iconsClasses: 'fa fa-edit fontSize_22px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    isModelBox: true,
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_POST
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/story.png",
        img_width: '20',
        img_height: '20',
      },
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles mt-2'
    },
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_STORY,
    labelInfo: {labelHeader: "Story", labelContext: "Share a Photo or write Something"}
  },
  {
    labelInfo: {labelHeader: "Life Event", labelContext: "Add a Life Event to your Profile"},
    dropDownItemIcon: {
      iconsClasses: 'fa fa-star fontSize_22px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles',
    },
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_LIFE_EVENT
  },
  {
    labelInfo: {labelHeader: "Page", labelContext: "Connect or Share with costumers or fans"},
    dropDownItemIcon: {
      iconsClasses: 'fa fa-flag fontSize_22px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles',
    },
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_PAGE
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/speaker.png",
        img_width: '20',
        img_height: '20',
      },
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    labelInfo: {labelHeader: "Ad", labelContext: "Advertise your business,brand or organizations"},
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_AD
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/group.png",
        img_width: '20',
        img_height: '20',
      },
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    labelInfo: {labelHeader: "Group", labelContext: "Connect with people who share your interest."},
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_GROUP
  },
  {
    labelInfo: {labelHeader: "Event", labelContext: "Bring people together with a public or private event"},
    dropDownItemIcon: {
      iconsClasses: 'fa fa-calendar-plus-o fontSize_22px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_EVENT
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/Fundraising.png",
        img_width: '20',
        img_height: '20',
      },
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    labelInfo: {labelHeader: "Fundraiser", labelContext: "Raise money for a cause you care about"},
    id: CREATE_DROPDOWN_ITEMS_IDS.CREATE_FUNDRAISER
  },
]
export const CREATE_DROPDOWN_PROPERTIES: DropDownProperties = {
  dropDownIcon: {iconsClasses: 'fa fa-plus fontSize_18px', dropDownIconBackgroundClass: 'icon-background-style'},
  header: {label: 'Create'},
  dropDownMenuClasses: 'create-dropdown',
  labelAlignmentClasses: 'create-row-alignment',
  toolTipName: 'Create'
}


