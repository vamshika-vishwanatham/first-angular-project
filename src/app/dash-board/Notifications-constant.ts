import {DropDownItems, DropDownProperties} from "../generic-drop-down/dropDownItems";

export const NOTIFICATIONS_DROPDOWN_PROPERTIES: DropDownProperties = {
  dropDownIcon: {iconsClasses: 'fa fa-bell fontSize_18px', dropDownIconBackgroundClass: 'icon-background-style ml-2'},
  header: {label: 'Notifications'},
  dropDownMenuClasses: 'notifications-icon-dropdown-styles',
  labelAlignmentClasses: 'notifications-row-alignment',
  toolTipName: 'Notifications'
}
export const NOTIFICATIONS_DROPDOWN_ITEMS: Array<DropDownItems> = [
  {
    subHeader: {label: "New", labelClass: "ml-2"},
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/profilepics/IMG_20190424_140253.jpg",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo: {labelHeader: "Prasanna Pasumarthi", labelContext: "liked your profile pics", labelTime: '2hrs'},
  },
  {
    subHeader: {label: "Friend Request", labelClass: "ml-2"},
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/profilepics/IMG_20200720_124032.jpg",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo: {
      labelHeader: "Vishwanatham Vamshika",
      labelContext: "sent you a friend Request",
      labelMutualFriends: 5,
      labelConfirmRequest: true
    },
  },
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/profilepics/IMG_20200720_124032.jpg",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo: {
      labelHeader: "Vishwanatham kavya",
      labelContext: "sent you a friend Request",
      labelConfirmRequest: true
    },
  },
  {
    subHeader: {label: "Earlier",labelClass: "ml-2"},
    dropDownItemIcon: {
      iconImage:{img_path: "assets/profilepics/12.jpg",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'}
    },
    labelInfo: {labelHeader:"Santhoshi Bhavani",labelContext:"'s birthday today",labelTime: '1 day'},
  },
  {
  dropDownItemIcon: {
  iconImage:{img_path: "assets/img/smilyimg.png",
    img_width: '56',
    img_height: '56',
    img_class: 'rounded-circle'}
},
labelInfo: {labelHeader:"Likitha",labelContext:"1 day ago",labelTime: '1 day' },
},
  {
    dropDownItemIcon: {
      iconImage: {
        img_path: "assets/profilepics/IMG_20200720_124032.jpg",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'
      }
    },
    labelInfo: {
      labelHeader: "Prashanth Yacham",
      labelContext: "sent you a friend Request",
      labelConfirmRequest: true
    },
  },
  {
    dropDownItemIcon: {
      iconImage:{img_path: "assets/img/smilyimg.png",
        img_width: '56',
        img_height: '56',
        img_class: 'rounded-circle'}
    },
    labelInfo: {labelHeader:"Mounika Kandrapu",labelContext:"1 day ago",labelTime: '1 day'},
  },
]

// export const NOTIFICATIONS_HEADER_DROPDOWN_PROPERTIES:DropDownProperties={
//  dropDownIcon:{iconsClasses:'fa fa-ellipsis-h mt-2'},
// }

// export const NOTIFICATIONS_HEADER_DROPDOWN_ITEMS:Array<DropDownItems>=[
  // {
    // labelInfo:{labelHeader:'Mark all as read'},
  // },
  // {
    // labelInfo:{labelHeader:'Mark all as read'},
  // }
// ]
