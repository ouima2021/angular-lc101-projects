import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures you can hear';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.imgflip.com/2rw3tp.jpg';
  image3 = 'https://th.bing.com/th/id/OIP.N63uIvklId5gIV9B_clDkgHaHa?pid=ImgDet&rs=1';

  constructor() { }

  ngOnInit() {
  }

}