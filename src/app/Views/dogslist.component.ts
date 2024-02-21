import { Component, OnInit, computed, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService, Dog } from '../dogs.service';
import { DogsListCardComponent } from '../dogs-list-card.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  template: `
    <section class="mx-4">
      <h1 class="text-3xl font-semibold">Whole project is done without observables - Signals only</h1>
      <h2 class="text-2xl font-semibold">
        Discover Pets to walk near you
      </h2>
    </section>
    <!-- DON'T USE TIMERS!!!! It'll affect your page loading time -->
    @defer (on viewport;) {
      <article class="flex flex-wrap gap-5 p-2 justify-center">
        <!-- the new way of doing a for loop in Angular -->
        @for (item of dogs; track $index) {
          <app-dogs-list-card class="" [dog]="item" [index]="$index"></app-dogs-list-card>
        }
        @empty {
          <div class="flex justify-center items-center h-96">
            <h1 class="text-2xl text-gray-500">No data available</h1>
          </div>                                                                              
        }

        <!-- the old way of doing a for loop in Angular -->
        <!-- <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card> -->
      </article>
    }
    @placeholder {
      <div class="flex justify-center items-center h-96">
        <h1 class="text-2xl text-gray-500">This is a palceholder...</h1>
      </div>
    }
    <section class=" flex flex-col m-4">
      <h2>Signals with plain values demonstration</h2>
      <h3>Current value of the counter {{counter()}}</h3>
      <h4>10 x counter: {{ derivedCounter() }}</h4>
      <div class="flex mx-auto gap-4">
        <button (click)="decrement()" class="px-8 py-4 bg-red-500 text-white font-semibold rounded-3xl flex justify-center items-center ">Decrement (-)</button>
        <button (click)="increment()" class="px-8 py-4 bg-green-500 text-white font-semibold rounded-3xl flex justify-center items-center ">Increment (+)</button>
      </div>
    </section>
    <section class="flex flex-col m-4">
      <h2>Signals with array and object values</h2>
      <p>List value: {{ list()[0] }}</p>
      <p>Object title: {{ object().title }}</p>

      <h3>Overriding signal quality check</h3>
      <h4>Object title: {{title()}}</h4>

      <button (click)="updateObject()" class="px-8 py-4 text-white font-semibold bg-blue-500 rounded-3xl w-fit mx-auto ">Update</button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsListComponent implements OnInit {

  // signals with plain values
  counter = signal(0);

  derivedCounter = computed(() => {
    return this.counter() * 10;
  })
  constructor(readonly dogsService: DogsService) {
    // how to read the signal value
    console.log(`counter value: ${this.counter()}`)

    // how to add to signal list
    // this.list().push("Again"); --> this is the wrong way to update a signal array
    this.list.update(items => [...items, "this", "is", "the", "correct", "way"]);

    // how to overwrite propertie of signal object
    this.object().title = "overwritten title";

    //The effect will be re-run whenever any 
    // of the signals that it uses changes value.
    effect(() => {

      // We just have to use the source signals 
      // somewhere inside this effect
      const currentCount = this.counter();

      const derivedCounter = this.derivedCounter();

      console.log(`current values: ${currentCount} ${derivedCounter}`);
      // this.counter.set(100);

    },{
      // this allows the effect to modify signals
      allowSignalWrites: false
    });
  }

  // how to modify the value of a signal
  increment() {
    // this.counter.set(this.counter() + 1); // this is with the set method
    this.counter.update(counter => counter + 1); // this is with the update method
  }
  decrement() {
    this.counter.set(this.counter() - 1);
  }

  // signals with array and object values
  list = signal<String[]>([
    "Hello",
    "World"
  ]);

  object = signal(
    {
    id: 1,
    title: "Angular For Beginners"
    },
    {
      // to not recal the same function over and over and over and over again
      equal: (a, b) => {
        return a.id === b.id && a.title == b.title;
      }
    }
  );

  title = computed(() => {
    console.log(`Calling computed() function...`)
    const course = this.object(); 
    return course.title;
  })
  updateObject() {
    // We are setting the signal with the exact same 
    // object to see if the derived title signal will 
    // be recalculated or not
    this.object.set({
      id: 1,
      title: "Angular For Beginners"
    });

  }

  dogs: Dog[] = this.dogsService.dogsList();

  ngOnInit() {
    console.log('this is my data', this.dogsService.dogsList());
    // this.dogsService.getDogs().subscribe(
    //   (data: Dog[]) => {
    //     this.dogs = data;
    //     console.log('this is my data', this.dogs);
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }


}
export const count = signal(0);