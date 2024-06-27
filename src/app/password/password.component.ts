import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
  
export class Password {
  password1:string = '123'
  password2:string = 'Pass123'
  password3:string = 'Pass@123'
}
