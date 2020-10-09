import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductServices} from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any = {id: 0, name: '', description: '', image: ''};

  constructor(private productServices: ProductServices) {

  }

  ngOnInit() {

  }

}
