import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Product added to cart");
  }

  ngOnInit() {
    const routeparams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeparams.get("productId"));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
