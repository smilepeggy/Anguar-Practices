import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // providers:[UsersService]
})
export class AppComponent implements OnInit {
  // activeUsers = [];
  // inactiveUsers = [];

  // constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // this.activeUsers = this.usersService.activeUsers;
    // this.inactiveUsers = this.usersService.inactiveUsers;
    // console.log(this.activeUsers);

  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
