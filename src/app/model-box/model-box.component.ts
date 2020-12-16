import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-model-box',
  templateUrl: './model-box.component.html',
  styleUrls: ['./model-box.component.css']
})
export class ModelBoxComponent implements OnInit {
  modelId: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}
