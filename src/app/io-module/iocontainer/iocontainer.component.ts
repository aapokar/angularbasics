import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iocontainer',
  templateUrl: './iocontainer.component.html',
  styleUrls: ['./iocontainer.component.css']
})
export class IocontainerComponent implements OnInit {
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];


  addItem(newItem: string) {
    this.items.push(newItem);
  }


  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
