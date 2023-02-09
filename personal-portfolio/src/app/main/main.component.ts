import { Component, OnInit } from '@angular/core';
import { Category } from '../model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  skills = [
    'Html',
    'Css',
    'Javascript',
    'Angular',
    'Bootstrap',
    'Tailwind',
    'SCSS',
    'Git',
  ];
  categories: Category[] = [
    {
      number: '06+',
      name: 'Years Experience',
    },
    {
      number: '09+',
      name: 'Completed Projects',
    },
    {
      number: '03+',
      name: 'Companies Helped',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
