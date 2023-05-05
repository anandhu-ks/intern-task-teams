import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class team {}
export interface team {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dept: string;
  role: string;
  contact: number;
}
export interface Role {
  id: number;
  role: string;
}
export interface Dept {
  id: number;
  dept: string;
}
