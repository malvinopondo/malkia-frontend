import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, CommonModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private dialog: MatDialog, private router:Router) {}

  events = [
    { 
      date: '2024-10-01', 
      location: 'Club XYZ', 
      description: 'Epic night with DJ Awesome!', 
      poster: 'https://i.pinimg.com/474x/6d/6d/69/6d6d693af8e4c6d63b04466d3ad5b281.jpg'
    },
    { 
      date: '2024-10-01', 
      location: 'Club XYZ', 
      description: 'Epic night with DJ Awesome!', 
      poster: 'https://i.pinimg.com/474x/6d/6d/69/6d6d693af8e4c6d63b04466d3ad5b281.jpg'
    },
    // More events...
  ];

  music = [
    {
      title: 'Track Title 1',
      url: 'track-url-1.mp3',
      downloadUrl: 'download-url-1.mp3',
      cover: 'https://i.pinimg.com/236x/e6/11/cc/e611cc3cf5b2b9cdc4ca0d84372f08c9.jpg'
    },
    {
      title: 'Track Title 1',
      url: 'track-url-1.mp3',
      downloadUrl: 'download-url-1.mp3',
      cover: 'https://i.pinimg.com/236x/e6/11/cc/e611cc3cf5b2b9cdc4ca0d84372f08c9.jpg'
    },
    {
      title: 'Track Title 1',
      url: 'track-url-1.mp3',
      downloadUrl: 'download-url-1.mp3',
      cover: 'https://i.pinimg.com/236x/e6/11/cc/e611cc3cf5b2b9cdc4ca0d84372f08c9.jpg'
    },
    // More music tracks...
  ];

  videos = [
    {
      title: 'Video Title 1',
      iframeSrc: 'https://www.youtube.com/embed/W8QpCNV0syg',
      watchUrl: 'https://www.youtube.com/watch?v=W8QpCNV0syg'
    },
    {
      title: 'Video Title 1',
      iframeSrc: 'https://www.youtube.com/embed/W8QpCNV0syg',
      watchUrl: 'https://www.youtube.com/watch?v=W8QpCNV0syg'
    },
    {
      title: 'Video Title 1',
      iframeSrc: 'https://www.youtube.com/embed/W8QpCNV0syg',
      watchUrl: 'https://www.youtube.com/watch?v=W8QpCNV0syg'
    },
    // More videos...
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }


  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadComponent, {
      width: '500px', // adjust size as needed
      height: 'auto', // you can adjust or remove height as needed
      panelClass: 'custom-dialog-container' // Add this to apply custom styles if needed
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can handle any actions after the dialog is closed
    });
  }


  logoutUser(){
    this.router.navigate(['']);
  }
  
}
