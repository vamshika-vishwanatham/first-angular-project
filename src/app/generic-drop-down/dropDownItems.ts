import {TemplateRef} from "@angular/core";

export interface DropDownItems {
  dropDownItemIcon?: IconsInfo;
  isIconAfterLabel?: boolean;
  subHeader?: HeaderInfo;
  separator?: boolean;
  id?: string;
  labelInfo: LabelInfo;
  isModelBox?: boolean;
}
export interface DropDownProperties {
  header?: HeaderInfo;
  bottomTemplate?: any;
  dropDownIcon?: IconsInfo;
  dropDownSearchBar?: DropDownSearchBar;
  dropDownClasses?: string;
  dropDownMenuClasses?: string;
  labelAlignmentClasses?: string;
  toolTipName?: string;
  // submenu?: boolean;
}
export interface LabelInfo {
  labelHeader: string;
  labelHeaderClasses?: string;
  labelTemplate?: TemplateRef<any>;
  labelContext?: string;
  labelContextClasses?: string;
  labelTime?: string;
  labelTimeClasses?: string;
  labelConfirmRequest?: boolean;
  labelMutualFriends?: number;
}
export interface image {
  img_path: string;
  img_height: string;
  img_width: string;
  img_class?: string;
}

export interface IconsInfo {
  iconsClasses?: string;
  iconImage?: image;
  dropDownIconBackgroundClass?: string;
}

export interface DropDownSearchBar {
  class?: string;
  placeHolder: string;
  isSearchBar: boolean;
}

export interface HeaderInfo{
  label?: string;
  template?: TemplateRef<any>;
  labelClass?: string;
}

