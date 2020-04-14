import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterContentInit {
  heroes: Hero[] = [];

  @ViewChild('myTitle', { static: true }) titleRef: ElementRef;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(this.titleRef.nativeElement);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
