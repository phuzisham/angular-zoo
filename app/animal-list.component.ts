import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>
  <ol>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><span>{{currentAnimal.name}}</span>
      <ul>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.like}}</li>
        <li>Dislikes: {{currentAnimal.dislike}}</li>
        <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br>
      </ul>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
