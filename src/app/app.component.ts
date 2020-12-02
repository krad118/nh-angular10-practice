import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'developteca';
  imageUrl = 'https://via.placeholder.com/150';
  isUnchanged = true;
  classes = 'aClassDemo';
  buttonTitle = 'Eliminar imagen';
  displayNone: string;
  directives: string[] = ['*ngIf', '*ngFor', '*ngSwitch', '*ngSwitchCase', '*ngModel', '*ng-template'];
  books = [
    {
      title: 'The Pragmatic Programmer',
      author: 'David Thomas & Andrew Hunt',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f2960f40b95b440c7d4a732_1.jpg'
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin (uncle bob)',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29609c7a11aa6a428083c3_2.jpg'
    },
    {
      title: 'Code Complete',
      author: 'Steve McConnell',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29606f8540b0caf0950f9f_3.jpg'
    },
    {
      title: 'Refactoring',
      author: 'Martin Fowler',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f29603e1d61e17793bd5eac_4.jpg'
    },
    {
      title: 'Head First Design Patterns',
      author: 'Eric Freeman & Bert Bates & Kathy Sierra & Elisabeth Robson',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f295ff6690b14114addeff7_5.jpg'
    },
    {
      title: 'The Mythical Man-Month',
      author: 'Frederick P. Brooks Jr',
      cover: 'https://uploads-ssl.webflow.com/5f280c5b57d2edfcbbb057ea/5f295fc0407ae2a76fdc6219_6.jpg'
    }
  ];

  delete(): void {
    this.displayNone = this.displayNone ? '' : 'none';
  }
}
