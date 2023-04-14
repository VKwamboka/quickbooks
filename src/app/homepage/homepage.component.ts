import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
 
  private interval: any;
  private endDate: Date = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); 

  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const currentDate = new Date();
      const totalSeconds = Math.floor((this.endDate.getTime() - currentDate.getTime()) / 1000);

      if (totalSeconds >= 0) {
        this.days = Math.floor(totalSeconds / 86400);
        this.hours = Math.floor((totalSeconds % 86400) / 3600);
        this.minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
        this.seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60);
      } else {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        clearInterval(this.interval);
      }
    }, 1000);
  }

}
