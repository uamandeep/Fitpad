import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  background: ThemePalette = undefined;
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe( 
      exercise => {
        if(exercise){

          this.ongoingTraining = true;
        } else{
          this.ongoingTraining = false;
        }
    });
  }

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
