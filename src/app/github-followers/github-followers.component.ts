import { ActivatedRoute } from "@angular/router";
import { GithubFollowersService } from "./../services/github-followers.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
// factory method for combining observables
import "rxjs/add/observable/combineLatest";

// importing some more from rxjs
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    // combine observables
    Observable.combineLatest([
      //observable 1, and observable 2
      this.route.paramMap,
      this.route.queryParamMap
      // now we can subscribe to the combined observable (result)
    ])
      .switchMap(combined => {
        // call the server to get the list of followers and then we subscribe to the list of followers
        let id = combined[0].get("id"); // this is the first, paramMap object
        let page = combined[1].get("page");

        // get the data from the server, ask/use the service
        return this.service.getAll();
      })
      .subscribe(followers => {
        this.followers = followers;
      });
  }
}
