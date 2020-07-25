import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    console.log(this.users);
  }
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.SetToActive(id);
  }
}
