import { Component } from "@angular/core"; // defined in libraries
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"]
})
export class GithubProfileComponent {
  // inject the router service
  constructor(private router: Router) {}

  // implement the submit method:
  submit() {
    this.router.navigate(["/followers"], {
      // naviagation extra object
      // remember, these params are optional!!!
      queryParams: {
        page: 1,
        order: "newest"
      }
    });
  }
}
