import { Component, Inject } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MAT_DIALOG_DATA, MatDialogModule,  MatDialogRef } from "@angular/material/dialog"

export interface ConfirmDialogData {
  title: string
  message: string
  confirmText: string
  cancelText: string
}

@Component({
  selector: "app-confirm-dialog",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false)
  }

  onConfirm(): void {
    this.dialogRef.close(true)
  }
}

