import { Component } from '@angular/core';
import { team } from '../interface';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.scss'],
})
export class TeamListingComponent {
  teams: team[] = [
    {
      firstName: 'aa',
      lastName: 'rr',
      email: 'aabb@gmail.com',
      dept: 'Product',
      role: 'Admin',
      contact: 987654321,
    },
    {
      firstName: 'aa',
      lastName: 'vv',
      email: 'aabb@gmail.com',
      dept: 'Product',
      role: 'Admin',
      contact: 987654321,
    },
    {
      firstName: 'aa',
      lastName: 'bb',
      email: 'aabb@gmail.com',
      dept: 'Product',
      role: 'Admin',
      contact: 987654321,
    },
    {
      firstName: 'aa',
      lastName: 'bb',
      email: 'aabb@gmail.com',
      dept: 'Product',
      role: 'Admin',
      contact: 987654321,
    },
  ];
}
