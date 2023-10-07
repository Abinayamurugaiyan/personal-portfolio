import { Component, OnInit } from '@angular/core';
import { Category } from '../model';
import { skillsImages } from './model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  images: skillsImages[] = [
    { imageUrl: 'assets/icons/Angular-Dark.svg', imageName: 'Angular' },
    { imageUrl: 'assets/icons/HTML.svg', imageName: 'HTML' },
    { imageUrl: 'assets/icons/CSS.svg', imageName: 'CSS' },
    { imageUrl: 'assets/icons/JavaScript.svg', imageName: 'Javascript' },
    { imageUrl: 'assets/icons/Bootstrap.svg', imageName: 'Bootstrap' },
    { imageUrl: 'assets/icons/MaterialUI-Dark.svg', imageName: 'Material UI' },
    { imageUrl: 'assets/icons/TailwindCSS-Dark.svg', imageName: 'Tailwind' },
    { imageUrl: 'assets/icons/TypeScript.svg', imageName: 'Typescript' },
    { imageUrl: 'assets/icons/Git.svg', imageName: 'Git' },
    { imageUrl: 'assets/icons/Jenkins-Dark.svg', imageName: 'Jenkins' },
    { imageUrl: 'assets/icons/VSCode-Dark.svg', imageName: 'VS code' },
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
