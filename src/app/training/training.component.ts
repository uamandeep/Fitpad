import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  background: ThemePalette = undefined;
  ongoingTraining = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
