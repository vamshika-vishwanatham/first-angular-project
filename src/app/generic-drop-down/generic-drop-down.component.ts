import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DropDownItems, DropDownProperties,} from "./dropDownItems";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generic-drop-down',
  templateUrl: './generic-drop-down.component.html',
  styleUrls: ['./generic-drop-down.component.css']
})
export class GenericDropDownComponent implements OnInit {
  @Input() dropDownItems: Array<DropDownItems>;
  @Input() dropDownProperties: DropDownProperties;
  @Input() name:string;

  @Output() clickEv: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    for (const p of this.dropDownItems){
      console.log(p.labelInfo.labelHeader);
    }
  }
  public click(id: string): void {
    this.clickEv.emit(id);
  }

}
