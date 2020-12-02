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

  delete(): void {
    this.displayNone = this.displayNone ? '' : 'none';
  }
}
