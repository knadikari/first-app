import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GalleryCategory } from './gallerycategory';
import { GalleryImage } from './galleryimage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  categories:GalleryCategory[];
  images:GalleryImage[];
  constructor(private _router: Router) { 
    this.setCategories();
    this.setImages();
  }

  ngOnInit(): void {
  }

  setCategories() {
    this.categories = [
      {categoryid:1, categoryname:"SLMO 2004 Award Ceremony"},
      {categoryid:2 , categoryname:"IMO 2017"},
      {categoryid:3 , categoryname:"TIMO"},
      {categoryid:4 , categoryname:"SLAAS 2017 Award Ceremony"},
    ]
  }

  setImages() {
    this.images = [
      {categoryid:1 , imageUrl:"assets/images/Gallery/slmo2004/slmo-2004-awards-img01.jpg"},
      {categoryid:1 , imageUrl:"assets/images/Gallery/slmo2004/slmo-2004-awards-img02.jpg"},
      {categoryid:1 , imageUrl:"assets/images/Gallery/slmo2004/slmo-2004-awards-img03.jpg"},
      {categoryid:1 , imageUrl:"assets/images/Gallery/slmo2004/slmo-2004-awards-img04.jpg"},
      {categoryid:1 , imageUrl:"assets/images/Gallery/slmo2004/slmo-2004-awards-img05.jpg"},
      {categoryid:2 , imageUrl:"assets/images/Gallery/imo2017/imo-2017-img01.jpg"},
      {categoryid:2 , imageUrl:"assets/images/Gallery/imo2017/imo-2017-img02.jpg"},
      {categoryid:2 , imageUrl:"assets/images/Gallery/imo2017/imo-2017-img03.jpg"},
      {categoryid:3 , imageUrl:"assets/images/Gallery/Timo/Timo1.jpg"},
      {categoryid:3 , imageUrl:"assets/images/Gallery/Timo/Timo2.jpg"},
      {categoryid:3 , imageUrl:"assets/images/Gallery/Timo/Timo3.jpg"},
      {categoryid:3 , imageUrl:"assets/images/Gallery/Timo/Timo4.jpg"},
      {categoryid:3 , imageUrl:"assets/images/Gallery/Timo/Timo5.jpg"},
      {categoryid:4 , imageUrl:"assets/images/Gallery/SLAAS/slaas-2017-awards-img01.jpg"},
      {categoryid:4 , imageUrl:"assets/images/Gallery/SLAAS/slaas-2017-awards-img02.jpg"},

    ]
  }

  getImagesForACategory(categoryid:number, images:GalleryImage[]) : Array<GalleryImage> {
    var result: Array<GalleryImage> = [];
    images.forEach(element => {
      if(element.categoryid == categoryid) {
        result.push(element);
      }
    });
    return result;
  }
}
