import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //input 自定义属性
  @Input() welcome;
  //output自定义事件
  @Output() onYell = new EventEmitter();

  fireYellEvent(){
    //触发app components的 onYell
    this.onYell.emit();
  }
  name="我爱打篮球";
  person ={
    name:"Samson",
    color:"red"
  }
  constructor() { }

  ngOnInit() {
  }

  clickMe(msg){
    alert(msg);
  }

}
