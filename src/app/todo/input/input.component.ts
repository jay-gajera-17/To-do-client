import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  // standalone: true,
  template: `
  <label for="inputListId">Enter Item</label>

  <div class="list-button">
      <input id="inputListId" [(ngModel)]="currentList" class="form-control" /> 
      <button (click)="addList(currentList)" class="btn btn-primary" > Add Item </button>
  </div>  

  {{newList}}

  `,
  styles: [` .list-button{
    display:flex;
    width:50%;
    justify-content:space-around;
    gap:10px;
  }`]
})
export class InputComponent {
  public currentList: string = "";
  public newList: string = "";
  addList(currentList: string) {
    this.newList = currentList
  }
  inputListId = "inputListId"

}
