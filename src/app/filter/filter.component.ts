import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  template: `
    <input
      type="text"
      [(ngModel)]="searchTerm"
      (ngModelChange)="onSearch(searchTerm)"
    />
    <button (click)="onPageIncrease()">Next Page</button>
    <button (click)="onSkipIncrease()">Skip 10</button>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class FilterComponent {
  searchTerm = '';
  page = 1;
  skip = 10;
  router = inject(Router);

  onSearch(event: string) {
    this.router.navigate([], {
      queryParams: { query: event },
      queryParamsHandling: 'merge',
    });
  }
  onPageIncrease() {
    this.router.navigate([], {
      queryParams: { page: this.page + 1 },
      queryParamsHandling: 'merge',
    });
    this.page++;
  }
  onSkipIncrease() {
    this.router.navigate([], {
      queryParams: { skip: this.skip + 10 },
      queryParamsHandling: 'merge',
    });
    this.skip += 10;
  }
}
