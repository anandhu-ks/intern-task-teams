import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class team {}
export interface team {
  firstName: string;
  lastName: string;
  email: string;
  dept: string;
  role: string;
  contact: number;
}
