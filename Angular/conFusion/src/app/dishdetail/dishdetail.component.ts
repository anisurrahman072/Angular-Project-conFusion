import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/Comment';
import { visibility, expand } from '../animations/app.animation';

import {Params, ActivatedRoute } from '@angular/router'; /* ActivatedRoute service gives me permissopn to 
access the URL that come from Menu Component || Params na use korew shob kisu kaj kortecilo*/
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {

  dishCopy: Dish;
  dish: Dish; // dish would carry an object of Dish type & initially dish has nothing
  dishIds: string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  comment: Comment;
  date: string;
  errMss: string;
  visibility = 'shown'; 
  @ViewChild('fform')commentFormDirective;

  formErrors = {
    'comment': '',
    'author': ''
  }
  validationMessages = {
    'comment': {
      'required': 'Comment is required'
    },
    'author': {
      'required': 'Author name is required',
      'minlength': 'Author name must be atleast 2 characters long'
    }
  }
  
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL) /* @Inject comes here for injecting a value within 
    constructor (This value is declared as a service in app.module.ts) ||  BaseURL ke 
    public na dile HTML a use korlei error dekhabe */ { 
      this.createForm();
    }

  ngOnInit(): void {
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds,
        (errmess) => this.errMss = <any>errmess);
    this.route.params /* this params is an observable of ActivatedRoute service */
      .pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.dishservice.getDish(params['id'])})) /* here Params is a 
thing of Angular Router which just fetch id from parameter id || and params is not an observable here*/
      .subscribe((dish) => {this.visibility = 'shown'; this.dish = dish; this.dishCopy = dish; this.setPrevNext(dish.id) },
        (errmess) => this.errMss = <any>errmess);
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    return this.location.back();
  }

  createForm(){
    this.commentForm = this.fb.group({
      'rating': 5,
      'comment': ['', Validators.required],
      'author': ['', [Validators.required, Validators.minLength(2)]]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChange(data));
  }

  onSubmit(){
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      'rating': 5,
      'comment': '',
      'author': ''
    });
    this.comment.date = new Date().toISOString(); /* adding "date" prototype in "comment" object || 
JavaScript method "toISOString()" auto creates current date for me */
    this.dishCopy.comments.push(this.comment);  // pushing "comment" object into comments of Dish class
    this.dishservice.putDish(this.dishCopy)
      .subscribe((dish) => {this.dish=dish; this.dishCopy=dish},
      errMss => {this.dish=null; this.dishCopy=null; this.errMss = <any>errMss})
  }

  onValueChange(data?: any){
    for(const field in this.formErrors){
      const control = this.commentForm.get(field);
      this.formErrors[field] = '';
      if(control.dirty && control.invalid){
        for(const message in control.errors){
          this.formErrors[field] += this.validationMessages[field][message] + ' ';
        }
      }
    }
  }

}