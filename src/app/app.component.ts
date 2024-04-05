import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form';
  Form=new FormGroup({
    name:new FormControl(''),
    author:new FormControl(''),
    publication:new FormControl(''),
    price:new FormControl(''),
    genre:new FormControl(''),
    date:new FormControl(''),
    country:new FormControl(''),
    description:new FormControl('')
  })
  save(){
    console.log(this.Form.value)
  }
}
