import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "context-modal",
  templateUrl: "./context-modal.html",
  styleUrls: ["./context-modal.scss"]
})
export class ContextModal {
  constructor(
    public dialogRef: MatDialogRef<ContextModal>,
    @Inject(MAT_DIALOG_DATA) public data: ContextDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface ContextDialogData {
  modalTitle: string;
  modalPlaceholder: string;
  folderName: string;
  checked: boolean;
}
