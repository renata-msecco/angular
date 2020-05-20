import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() title = 'Seja Bem Vindx';
  constructor(){
    console.log('constructor');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit(): void{
  console.log('ngOnInit');
  }
 ngAfterViewInit(){
 console.log('ngAfterViewInit');
 }
}

