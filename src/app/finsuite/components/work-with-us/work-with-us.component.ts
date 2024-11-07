import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          opacity: 0,
          transform: 'translateY(20px)'
        }))
      ])
    ])
  ]
})
export class WorkWithUsComponent implements OnInit {

  activeComponent: string | null = 'Amerbis-experience';
  constructor() {}

  ngOnInit(): void {}

  showComponent(component: string): void {
    this.activeComponent = component;
  }
}
