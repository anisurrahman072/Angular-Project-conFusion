import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMss: string;
  leaderErrMss: string;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL)/* @Inject comes here for injecting a value within 
    constructor (This value is declared as a service in app.module.ts) || BaseURL ke 
    public na dile HTML a use korlei error dekhabe */ { }

  ngOnInit(): void {
    this.dishService.getFeatureDish()
    .subscribe((dish) => this.dish=dish,
      (dishErrMess) => this.dishErrMess = <any>dishErrMess);

    this.promotionService.getFeaturePrmotion()
    .subscribe((promotion) => this.promotion=promotion,
      (promotionErrMss) => this.promotionErrMss = <any>promotionErrMss);

    this.leaderService.getLeader('3')
    .subscribe((leader) => this.leader=leader,
        (leaderErrMss) => this.leaderErrMss=leaderErrMss);
  }

}
