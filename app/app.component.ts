import { Component } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'app-root',
  template: `
  <div>

  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal()
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
