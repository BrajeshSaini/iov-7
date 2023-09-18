import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcJ2YKIMpQQggZSKeIz99olAOyaf8coDM",
  authDomain: "angular-first-a0522.firebaseapp.com",
  databaseURL: "https://angular-first-a0522.firebaseio.com",
  projectId: "angular-first-a0522",
  storageBucket: "angular-first-a0522.appspot.com",
  messagingSenderId: "752380766574",
  appId: "1:752380766574:web:3c24f17a36fba49f6e397f"
};


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {

  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);



  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.getCities(this.db);
  }

  // Get a list of cities from your database
  async getCities(db: any) {
    const citiesCol = collection(db, 'users');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());    
    return cityList;
  }



  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }


}
