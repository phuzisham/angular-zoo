"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal-model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAnimalList = [
            new animal_model_1.Animal()
        ];
        this.selectedAnimal = null;
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalList.push(newAnimalFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div>\n\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map