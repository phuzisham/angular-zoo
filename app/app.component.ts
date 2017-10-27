import { Component } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Beast Tracker</h1>

  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Puma', 'Vincent', 4, 'Omnivore', 'South Zoo', 3, 'Male', 'Eating', 'Veterinarians')
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
