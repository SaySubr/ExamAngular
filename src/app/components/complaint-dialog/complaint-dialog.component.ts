import { Component } from '@angular/core';
import {ChangeDetectionStrategy, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ComplaintWindowComponent } from '../complaint-window/complaint-window.component';
import { CommonModule } from '@angular/common';

export interface DialogData {
  problem: string;
  name: string;
}


@Component({
  selector: 'app-complaint-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,CommonModule],
  templateUrl: './complaint-dialog.component.html',
  styleUrl: './complaint-dialog.component.scss'
})
export class ComplaintDialogComponent {
  readonly problem = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  complaints = signal<DialogData[]>([]);

   openDialog(): void {
    const dialogRef = this.dialog.open(ComplaintWindowComponent, {
      data: { name: this.name(), problem: this.problem() },
    });

    dialogRef.afterClosed().subscribe((result: DialogData | undefined) => {
      if (result) {
        this.complaints.update(prev => [...prev, result]);
      }
    });
  }
}
