import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() { }
  
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }


}
