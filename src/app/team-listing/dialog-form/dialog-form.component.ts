import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role, Dept } from '../../interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
})
export class DialogFormComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  Role: Role[] = [
    { id: 1, role: 'NA' },
    { id: 2, role: 'Employee' },
    { id: 3, role: 'Product' },
    { id: 4, role: 'FrontEnd' },
    { id: 5, role: 'BackEnd' },
    { id: 6, role: 'Testing' },
    { id: 7, role: 'Support' },
    { id: 8, role: 'Customer Care' },
    { id: 9, role: 'NA' },
    { id: 10, role: 'Employee' },
  ];
  Dept: Dept[] = [
    { id: 1, dept: 'NA' },
    { id: 2, dept: 'Admin' },
    { id: 3, dept: 'Engineering' },
    { id: 4, dept: 'Marketing' },
    { id: 5, dept: 'Business' },
    { id: 6, dept: 'IT' },
    { id: 7, dept: 'BPO' },
  ];
  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    public teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}
  ngOnInit(): void {
    console.log(this.editData, 'editData');

    if (this.editData) {
      this.contactForm.controls['firstName'].setValue(this.editData.firstName);
      this.contactForm.controls['lastName'].setValue(this.editData.lastName);
      this.contactForm.controls['dept'].setValue(this.editData.dept);
      this.contactForm.controls['role'].setValue(this.editData.role);
      this.contactForm.controls['contact'].setValue(this.editData.contact);
      this.contactForm.controls['email'].setValue(this.editData.email);
    }
  }
  submit() {
    console.log(this.contactForm.value, 'submit');
    if (!this.editData) {
      if (this.contactForm.valid) {
        this.teamService.postList(this.contactForm.value).subscribe({
          next: () => {
            this.contactForm.reset();
            this.dialogRef.close('save');
          },
        });
      }
    } else {
      this.updateList();
    }
  }
  updateList() {
    this.teamService
      .putList(this.contactForm.value, this.editData.id)
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.dialogRef.close('update');
        },
      });
  }

  closedialog() {
    this.contactForm.reset();
    this.dialogRef.close();
  }
}
