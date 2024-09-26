import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Music {
  id?: number;
  title: string;
  file_path: string;
  image_path?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://your-api-url/api/music'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get all music records
  getAllMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.apiUrl);
  }

  // Get a single music record by ID
  getMusicById(id: number): Observable<Music> {
    return this.http.get<Music>(`${this.apiUrl}/${id}`);
  }

  // Create a new music record
  createMusic(musicData: FormData): Observable<Music> {
    return this.http.post<Music>(this.apiUrl, musicData);
  }

  // Update an existing music record
  updateMusic(id: number, musicData: FormData): Observable<Music> {
    return this.http.put<Music>(`${this.apiUrl}/${id}`, musicData);
  }

  // Delete a music record
  deleteMusic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
