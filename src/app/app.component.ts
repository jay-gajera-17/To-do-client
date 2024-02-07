import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoModule } from './todo/todo.module';
import { InputComponent } from "./todo/input/input.component";
import { FormsModule} from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, todoModule]
})
export class AppComponent {
  title = 'To-do-List';
  
}
