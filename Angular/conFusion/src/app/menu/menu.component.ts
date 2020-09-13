import { Component, OnInit, Inject} from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {
  dishes: Dish[]; // dishes = DISHES
  errMss: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') public BaseURL) /* @Inject comes here for injecting a value within 
    constructor (This value is declared as a service in app.module.ts) || BaseURL ke 
    public na dile HTML a use korlei error dekhabe */{}

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes=dishes,
    (error) => this.errMss = <any>error);
  }
}
