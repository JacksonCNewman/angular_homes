import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housinglocation";
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
