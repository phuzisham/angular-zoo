
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal" class="well">
    <h2>Edit: {{childSelectedAnimal.name}}</h2>
    <label>Name:</label>
    <br>
    <input type="text" [(ngModel)]="childSelectedAnimal.name">
    <br>
    <label>Species:</label>
    <br>
    <input type="text" [(ngModel)]="childSelectedAnimal.species">
    <br>
    <label>Like:</label>
    <br>
    <input type="text" [(ngModel)]="childSelectedAnimal.like">
    <br>
    <label>Dislike:</label>
    <br>
    <input type="text" [(ngModel)]="childSelectedAnimal.dislike">
    <br><br>
    <button class="btn btn-warning" (click)="doneButtonClicked()">Save Changes</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
