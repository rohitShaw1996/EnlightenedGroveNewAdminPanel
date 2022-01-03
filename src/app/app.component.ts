
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderService } from '../app/services/loader.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OC4D Admin';
  loading$ = this.loader.loading$;
 

  constructor(public loader: LoaderService, private http: HttpClient) {}
}
