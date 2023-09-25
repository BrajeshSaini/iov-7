import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent  implements OnInit {

  public progress = 0.75;
  public buffer = 0.06;

  
  progressValue: number = .0; // Set an initial progress value


  
  minPrice: number = 0; // Minimum price
  maxPrice: number = 100; // Maximum price
  selectedPrice: number = 50; // Initial selected price

  // Function to update the selected price
  updatePrice(newPrice: number) {
    this.selectedPrice = newPrice;
  }

  constructor() {
    // setInterval(() => {
    //   this.progress += 0.01;

    //   // Reset the progress bar when it reaches 100%
    //   // to continuously show the demo
    //   if (this.progress > 1) {
    //     setTimeout(() => {
    //       this.progress = 0;
    //     }, 1000);
    //   }
    // }, 50);
  }
  ngOnInit(): void {
    
  }

  setProgress(value: any){
    
    console.log(value);

  }

  
  progressBarClicked() {
    this.progressValue = 0.45;

    // // Handle the click event here
    // console.log('Progress bar clicked!', newValue);
    // // You can perform any action you want when the progress bar is clicked.

    //  // Check if the current progressValue is 50
    //  if (this.progressValue === 50) {
    //   // Increase the progressValue to the new value (75 in this case)
    //   this.progressValue = newValue;
    // }
  }
}
