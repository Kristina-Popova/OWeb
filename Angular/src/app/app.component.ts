import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component'; // Ensure this path is correct
import { DRIVERS } from '../db-data'; // Ensure DRIVERS is properly exported from db-data

@Component({
  selector: 'app-root',
  standalone: true, // Define as standalone
  imports: [RouterOutlet, CommonModule, CompComponent], // Include necessary modules and components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected typo
})
export class AppComponent {
  title = 'test';

  PB = DRIVERS[0];
  JM = DRIVERS[1];
  MM = DRIVERS[2];
  vozaci = DRIVERS;

  onAppView() {
    console.log('APP E F-ja');
  }
}
