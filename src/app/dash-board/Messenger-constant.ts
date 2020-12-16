import {DropDownItems, DropDownProperties, DropDownSearchBar, image} from "../generic-drop-down/dropDownItems";

export const MESSENGER_DROPDOWN_PROPERTIES: DropDownProperties = {
  dropDownIcon: {
    iconImage: {
      img_class: "rounded-circle",
      img_path: "assets/icons/messengerimg.webp",
      img_height: '22',
      img_width: '17'
    },
    dropDownIconBackgroundClass: 'icon-background-style ml-2',
  },
  header: {label: 'Messenger'},
  dropDownSearchBar: {
    isSearchBar: true,
    class: 'search-bar-style',
    placeHolder: 'Search Messenger',
    searchButtonIcon: "fa fa-fw fa-search"
  } as DropDownSearchBar,
  dropDownMenuClasses: 'messenger-icon-dropdown-styles',
  labelAlignmentClasses: 'message-row-alignment',
  toolTipName: 'Messenger',
  // submenu: true
}
export const MESSENGER_DROPDOWN_ITEMS: Array<DropDownItems> = [
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: 'assets/img/IMG_20190720_131608.jpg',
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Vamshika Vishwanatham",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/img/IMG_20191110_224607_916.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Divya Vishwanatham",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/img/IMG_20200705_163159.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Kavya Vishwanatham",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path:  "assets/img/vamshi.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Likitha Thodupunuri",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path:  "assets/profilepics/girl3.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Varsha Eppala",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/profilepics/8.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Pasanna Pasumarthi",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path:  "assets/profilepics/12.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Anuradha Vishwanatham",labelContext:"you and she celebrating..."}
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path:  "assets/profilepics/girl3.jpg",
        img_height: '56',
        img_width: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo:{labelHeader:"Anuradha",labelContext:"you and she celebrating..."}
  },
]
