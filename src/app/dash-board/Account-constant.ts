import {DropDownItems, DropDownProperties} from "../generic-drop-down/dropDownItems";

export const ACCOUNT_DROPDOWN_PROPERTIES: DropDownProperties = {
  dropDownIcon: {
    iconsClasses: 'fa fa-sort-down fontSize_22px',
    dropDownIconBackgroundClass: 'icon-background-style ml-2'
  },
  dropDownMenuClasses: 'account-icon-dropdown-styles',
  labelAlignmentClasses: 'account-row-alignment',
  toolTipName: 'Account'
}
export const ACCOUNT_DROPDOWN_ITEMS: Array<DropDownItems> = [
  {
    separator: true,
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/errorMessage.png",
        img_height: '20',
        img_width: '20'
      },
      dropDownIconBackgroundClass:'dropDownItemsIconsBackgroundStyles ',
    },
    labelInfo: {
      labelHeader: 'Give Feedback', labelHeaderClasses: 'labelTemplateStyles',
      labelContext: 'Help us improve the new Facebook'
    }
  },
  {
    separator: true,
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/dropdownimages/setting2.png",
        img_height: '20',
        img_width: '20'
      },
      dropDownIconBackgroundClass:'dropDownItemsIconsBackgroundStyles ',
    },
    labelInfo: {labelHeader: 'Setting & Privacy'},
  },
  {
    dropDownItemIcon: {
      iconsClasses: 'fa fa-question-circle fontSize_24px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    labelInfo: {labelHeader: 'Help & Support'},
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: 'assets/dropdownimages/moon.png',
        img_height: '20',
        img_width: '20'
      },
      dropDownIconBackgroundClass:'dropDownItemsIconsBackgroundStyles ',
    },
    labelInfo: {labelHeader: 'Dark Mood'},
  },
  {
    dropDownItemIcon: {
      iconsClasses: 'fa fa-arrow-circle-left fontSize_24px',
      dropDownIconBackgroundClass: 'dropDownItemsIconsBackgroundStyles'
    },
    labelInfo: {labelHeader: 'Switch to img_classic Facebook',
    labelContext: 'The img_classic Facebook is no longer available starting in September.'}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: 'assets/dropdownimages/logoutimg.png',
        img_height: '20',
        img_width: '20'
      },
      dropDownIconBackgroundClass:'dropDownItemsIconsBackgroundStyles ',
    },
    labelInfo: {labelHeader: 'LogOut',}
  },
]
