import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="col-sm-6">
      <div class="well">
        <h2>New Animal</h2>
        <div>
          <label>Species:</label>
          <br>
          <input #newSpecies>
        </div>
        <div>
          <label>Name:</label>
          <br>
          <input #newName>
        </div>
        <div>
          <label>Age:</label>
          <br>
          <input #newAge>
        </div>
        <div>
          <label>Diet:</label>
          <br>
          <input #newDiet>
        </div>
        <div>
          <label>Location:</label>
          <br>
          <input #newLocation>
        </div>
        <div>
          <label>Caretakers:</label>
          <br>
          <input #newCaretakers>
        </div>
        <div>
          <label>Sex:</label>
          <br>
          <input #newSex>
        </div>
        <div>
          <label>Like:</label>
          <br>
          <input #newLike>
        </div>
        <div>
          <label>Dislike:</label>
          <br>
          <input #newDislike>
        </div>
        <br>
        <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value='';">Add</button>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
