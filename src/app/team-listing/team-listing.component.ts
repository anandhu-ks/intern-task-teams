import { Component, OnInit } from '@angular/core';
import { team } from '../interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.scss'],
})
export class TeamListingComponent implements OnInit {
  constructor(private dialog: MatDialog, private teamService: TeamService) {}
  ngOnInit(): void {
    this.getAllList();
  }

  teams: team[] = [];
  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    this.dialog
      .open(DialogFormComponent, dialogConfig)
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getAllList();
        }
      });
  }
  editList(item: any) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;

    // console.log('result', item);

    this.dialog
      .open(DialogFormComponent, { data: item })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllList();
        }
      });
  }
  getAllList() {
    this.teamService.getList().subscribe({
      next: () => {
        this.teamService.getList().subscribe((res) => {
          this.teams = res;
        });
      },
    });
  }
  delecteList(id: number) {
    this.teamService.deleteList(id).subscribe({ next: () => {} });
    this.getAllList();
  }
}
