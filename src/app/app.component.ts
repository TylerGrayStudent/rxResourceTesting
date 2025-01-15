import { Component } from '@angular/core';
import { DataComponent } from './data/data.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  imports: [DataComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
