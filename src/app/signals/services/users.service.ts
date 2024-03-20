import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import type { User, UserResponse } from '../interfaces/user.response';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.http
      .get<UserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((resp) => resp.data));
  }
}
