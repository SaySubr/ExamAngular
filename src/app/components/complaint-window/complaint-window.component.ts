import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from '../complaint-dialog/complaint-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaint-window',
  standalone: true,
  imports: [CommonModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions],
  templateUrl: './complaint-window.component.html',
  styleUrl: './complaint-window.component.scss'
})
export class ComplaintWindowComponent {
   readonly dialogRef = inject(MatDialogRef<ComplaintWindowComponent>);
   readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }
}
