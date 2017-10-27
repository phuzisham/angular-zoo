import { Component } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Animal Tracker</h1>
    <div class="row">
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Puma', 'Vincent', 4, 'Omnivore', 'South Zoo', 3, 'Male', 'Eating', 'Veterinarians'),
    new Animal('Bison', 'Caroline', 2, 'Herbivore', 'North Zoo', 1, 'Female', 'Grass', 'Snakes')
  ];

  selectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
