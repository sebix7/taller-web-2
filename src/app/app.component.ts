import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  administradorRole: boolean = false;

  constructor(protected httpClient: HttpClient) {}
  ngOnInit(): void {
    let body = { token: localStorage.getItem('token') };

    let resp: Observable<Response[]> = this.httpClient
      .post<Response[]>(`http://localhost:3000/auth/decode`, body)
      .pipe(share());

    resp.subscribe(
      (value) => {
        const user_id = JSON.stringify(value);

        if (
          (user_id ===
            JSON.stringify('6918af43-9fc7-4399-8fa7-65dd66913cff')) ===
          true
        ) {
          this.administradorRole = true;
        }
      },
      (error) => {
        this.administradorRole = false;
      }
    );
  }

  title = 'my-app';
}
