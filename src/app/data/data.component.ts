import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-data',
  imports: [CommonModule],
  template: ` @if(data.isLoading()){
    <div>Loading...</div>
    }
    <div>{{ data.value() | json }}</div>`,
  standalone: true,
})
export class DataComponent {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  queryParams = toSignal(this.route.queryParams);
  data = rxResource({
    request: () => this.queryParams(),
    loader: ({ request: params }) =>
      this.http
        .get('http://localhost:5004/search', { params })
        .pipe(delay(1000)),
  });
}
