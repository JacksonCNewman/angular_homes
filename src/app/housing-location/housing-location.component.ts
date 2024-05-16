import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink, RouterOutlet
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
