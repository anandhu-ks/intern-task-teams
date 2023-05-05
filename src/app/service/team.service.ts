import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  postList(data: any) {
    return this.http.post<any>('http://localhost:3000/list/', data);
  }
  getList() {
    return this.http.get<any>('http://localhost:3000/list/');
  }
  putList(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/list/' + id, data);
  }
  deleteList(id: number) {
    return this.http.delete<any>('http://localhost:3000/list/' + id);
  }
}
