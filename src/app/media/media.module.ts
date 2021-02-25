import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';



@NgModule({
  declarations: [PhotosComponent, AlbumsComponent],
  imports: [
    CommonModule
  ]
})
export class MediaModule { }
