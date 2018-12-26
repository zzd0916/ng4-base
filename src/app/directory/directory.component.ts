import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  people:Array <any> = [];
  constructor(private route:ActivatedRoute, private logger:LoggingService, private dataService:DataService, private http:Http) { 
    // this.person = route.snapshot.params['person']; //获取参数
    
  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  //   const apiData = ajax('../../assets/people.json');
  // // Subscribe to create the request
  // apiData.subscribe(res => this.people = res.response);
    this.dataService.fetchData().subscribe(
      (data) => this.people = data
    )
  }

}
