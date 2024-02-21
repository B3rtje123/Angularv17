import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../Services/dogs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <button routerLink="/details/{{index}}" class="flex flex-col rounded-lg shadow-lg w-80 overflow-hidden hover:scale-110 ease-in-out duration-300 border-2 border-gray-300">
    
    <img style="view-transition-name: image;" src="{{dog.photoUrl}}" alt="Photo of {{dog.name}}">
    <p class="mx-4 mt-4 text-lg">Meet <span class="font-semibold">{{dog.name}}</span></p>
    <p class="m-4 line-clamp-3"> 
      <span class="font-semibold">{{dog.ownerName}}</span> wants you to know this about {{dog.name}}:
      {{dog.description}}
    </p>
  </button>
  `,
})
export class DogsListCardComponent implements OnInit{

  @Input() dog!: Dog;
  @Input() index!: Number;
  constructor() {
  }
  ngOnInit(): void {
  }

}

