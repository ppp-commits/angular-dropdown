import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  websiteList: any = ['tutsmake.com', 'abc.com', 'w3alert.com']

  OnchangeSelect(event : any){
    console.log('hello');
  }

}
