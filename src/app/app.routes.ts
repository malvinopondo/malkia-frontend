import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { EventsPageComponent } from './events-page/events-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'music', component:MusicPageComponent},
    {path:'video', component:VideoPageComponent},
    {path:'events', component:EventsPageComponent},
    { path: '**', redirectTo: '' } 
];
