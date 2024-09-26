import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedUploadType: string = 'music'; // Default to music

  onUploadTypeChange() {
    console.log(`Selected Upload Type: ${this.selectedUploadType}`);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      // Handle file upload logic here
    }
  }
}
