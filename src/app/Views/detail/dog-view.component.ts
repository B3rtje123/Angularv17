import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, computed, effect, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Dog, DogsService } from '../../Services/dogs.service'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { count } from '../dogslist.component'; 

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    @defer (on viewport) {
      <section class="flex flex-col lg:flex-row m-2 gap-12">
        <img class=" object-cover max-w-screen-sm rounded-lg shadow-lg" src="{{dog?.photoUrl}}" alt="Photo of {{dog?.name}}">
        <article>
          <h1 class="text-left">Hi, I'm {{dog?.name}}</h1>
          <h2>My owner's name is <span class="font-bold">{{dog?.ownerName}}</span></h2>
          <p class="">{{dog?.longDescription}}</p>
          <p>I live in <span class="font-bold">{{dog?.location}}</span></p>
        </article>
      </section>

    } @placeholder {
      <div class="flex justify-center items-center h-96">
        <h1 class="text-2xl text-gray-500">This is a palceholder...</h1>
      </div>
    }
    <div class="flex m-4 flex-col">
      <p>Counter: {{ count() }}</p>
      <button (click)="increment()" class="px-8 py-4 bg-green-500 rounded-3xl flex justify-center items-center w-fit mx-auto">Increment from dogsListComponent</button>
    </div>
  `,
})
export class DogViewComponent implements OnInit{
  // dog$!: Observable<Dog | undefined>;

  count = count;
  increment() {
    this.count.update((value) => value + 100)
  }

  DogObject(){
    const routeIndex = this.route.snapshot.paramMap.get('index');
    const dogIndex = parseInt(routeIndex!);
    const trueIndex = dogIndex + 1;
    return this.dogsService.dogsList().find(dog => dog.id.toString() === trueIndex.toString());
  }

  dog = this.DogObject();

  constructor(private dogsService: DogsService, private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    console.log(this.dog);
    // console.log("dogs list: ", this.dogsService.dogsList());
  }
}
