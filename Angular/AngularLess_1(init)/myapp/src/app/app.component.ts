import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NumberCardComponent } from './components/number-card/number-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, NumberCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Создайте новый компонент number-card с возможностью передачи пропа number 
// данный компнент должен хранить ситилацию на ваше усмотрение (контейнер с числом, бордером и тд) 
// проп с числом необходимо передать из компонента App

// В каетве ответа прислать код разметки компонента number-card

export class AppComponent {
  title = 'myapp';
  number = 6
  name = 'Tigran'
  email = 'movsisyantv@ithub.ru'
}
