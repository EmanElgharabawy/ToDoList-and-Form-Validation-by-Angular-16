import { Component } from '@angular/core';

@Component({
  selector: 'app-directves',
  templateUrl: './directves.component.html',
  styleUrls: ['./directves.component.css']
})
export class DirectvesComponent {
  isAccepted:boolean=true;
 isapplayed:boolean=true;
 changestate()
 {
   this.isAccepted=!this.isAccepted
 }

 Flowers:string='';
 FlowersTypes:string[]=["Roses",
  "Tulips",
  "Daisies",
  "Lilies",
  "Sunflowers",
  "Orchids",
  "Carnations",
  "Peonies",
  "Hydrangeas",
  "Irises"];
  srcimage: string []=["assets/images/pexels-min-an-906150.jpg",
   "assets/images/pexels-disha-sheta-4010464.jpg",
   "assets/images/pexels-gru-369433.jpg",
   "assets/images/pexels-pixabay-36729.jpg",
   "assets/images/pexels-disha-sheta-4010464.jpg",
   "assets/images/pexels-trung-nguyen-1767428.jpg",
   "assets/images/pexels-pixabay-236259.jpg",
   "assets/images/pexels-pixabay-53141.jpg",
   "assets/images/pexels-irina-iriser-673857.jpg",
   "assets/images/pexels-pixabay-236259.jpg",
]

track:string="dotnet";
















}
