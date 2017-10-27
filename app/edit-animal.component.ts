
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal" class="well">
    <h3>{{childSelectedAnimal.name}}</h3>
    <h3>Edit Animal</h3>
    <label>Enter Animal Name:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.name">
    <br>
    <label>Enter Animal Species:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.species">
    <br>
    <label>Enter Animal Like:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.like">
    <br>
    <label>Enter Animal Dislike:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.dislike">
    <br>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  <hr>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
