"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal-model");
var NewAnimalComponent = (function () {
    function NewAnimalComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    NewAnimalComponent.prototype.submitForm = function (species, name, age, diet, location, caretakers, sex, like, dislike) {
        var newAnimalToAdd = new animal_model_1.Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
        this.newAnimalSender.emit(newAnimalToAdd);
    };
    return NewAnimalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewAnimalComponent.prototype, "newAnimalSender", void 0);
NewAnimalComponent = __decorate([
    core_1.Component({
        selector: 'new-animal',
        template: "\n    <h1>New Animal</h1>\n    <div>\n      <label>Enter Animal Species:</label>\n      <input #newSpecies>\n    </div>\n    <div>\n      <label>Enter Animal Name:</label>\n      <input #newName>\n    </div>\n    <div>\n      <label>Enter Age:</label>\n      <input #newAge>\n    </div>\n    <div>\n      <label>Enter Diet:</label>\n      <input #newDiet>\n    </div>\n    <div>\n      <label>Enter Location:</label>\n      <input #newLocation>\n    </div>\n    <div>\n      <label>Enter Amount Of Caretakers:</label>\n      <input #newCaretakers>\n    </div>\n    <div>\n      <label>Enter Sex:</label>\n      <input #newSex>\n    </div>\n    <div>\n      <label>Enter Animal Like:</label>\n      <input #newLike>\n    </div>\n    <div>\n      <label>Enter Animal Dislike:</label>\n      <input #newDislike>\n    </div>\n    <button (click)=\"submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value='';\">Add</button>\n  "
    })
], NewAnimalComponent);
exports.NewAnimalComponent = NewAnimalComponent;
//# sourceMappingURL=new-animal.component.js.map