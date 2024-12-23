import { Component, Input } from '@angular/core';
import { driver } from '../../driver'; // Ensure this path is correct and the `driver` type is defined.

@Component({
  selector: 'app-comp',
  standalone: true, // Add this if using standalone components
  imports: [], // Include required modules if needed, e.g., CommonModule
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css'] // Corrected typo
})
export class CompComponent {

  @Input()
  vozac: driver | undefined; // Ensure `driver` is defined

  @Input()
  indeks: number | undefined;

  onDrvView() {
    console.log("KLIKNA ME");
  }
}
