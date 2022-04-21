import { Component, OnInit } from '@angular/core';
import { TrackUserSearches } from '../track-user-searches';
import { Products } from '../Products';
import { SearchProductsService } from '../search-products.service';
import { SearchProducts } from 'SearchProduct';
import { TrackUserSearchesService } from '../track-user-searches.service';

@Component({
  selector: 'app-track-user-searches',
  templateUrl: './track-user-searches.component.html',
  styleUrls: ['./track-user-searches.component.css']
})
export class TrackUserSearchesComponent implements OnInit {

  products!: Products[];
  constructor(private trackUserSearches: TrackUserSearchesService) { }

  ngOnInit(): void {
    this.trackUserSearches.getBookId().subscribe((data: Products[]) => {
      console.log(data);
      this.products! = data;
    })
  }



}
