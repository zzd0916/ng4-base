import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
  welcome={
    title:"我是通过apps传入,使用@input接受的值",
    color: '白色'
  }
  yell(){
    alert("I am app Yelling!")
  }
}
