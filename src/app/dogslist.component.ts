import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from './dogs.service';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  template: `
    <section class="hero-section">
      <h2 class="text-2xl font-semibold">
        Discover Pets to walk near you
      </h2>
    </section>
    @defer () {
      <article class="pet-list">
        @for (dog of dogsService.dogs; track $index) {
          <app-dogs-list-card [dog]="dog" [index]="$index"></app-dogs-list-card>
        }@empty {
          <p>List is empty</p>
        }
        <!-- <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card> -->
      </article>
    }@loading {
      <p>Loading...</p>
    }

  `,
  styles: [`
  .pet-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    padding: 10px;
  }

  .hero-text {
    font-size: 25pt;
    padding: 10px;
  }
`]
})
export class DogsListComponent implements OnInit {

  constructor(readonly dogsService: DogsService) { }

  ngOnInit(): void {
  }

}