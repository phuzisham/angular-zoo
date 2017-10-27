import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
    </select>
  <ol>
    <li *ngFor="let currentAnimal of childAnimalList"><span>{{currentAnimal.species}}</span>
      <ul>
        <li>Name: {{currentAnimal.name}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Likes: {{currentAnimal.like}}</li>
        <li>Dislikes: {{currentAnimal.dislike}}</li>
      </ul>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByEmpty: string = "fullAnimals";

  onChange(optionFromMenu) {
    this.filterByEmpty = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
