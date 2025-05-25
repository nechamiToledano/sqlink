import type { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";
import { LoginGuard } from "./core/guards/login.guard";

export const routes: Routes = [
  // {
  //   path: "login",
  //   loadComponent: () => import("./auth/components/login/login.component").then((m) => m.LoginComponent),
  //   canActivate: [LoginGuard],
  // },
 
  {
    path: "",
    loadComponent: () => import("./dashboard/dashboard/dashboard.component").then((m) => m.DashboardComponent),
    // canActivate: [authGuard],
    children: [
      // { path: "", redirectTo: "users", pathMatch: "full" },
     
      // {
      //   path: "users",
      //   children: [
      //     {
      //       path: "",
      //       loadComponent: () =>
      //         import("./users/components/user-list/user-list.component").then((m) => m.UserListComponent),
      //     },
      //     {
      //       path: "new",
      //       loadComponent: () =>
      //         import("./users/components/user-form/user-form.component").then((m) => m.UserFormComponent),
      //     },
      //     {
      //       path: "edit/:id",
      //       loadComponent: () =>
      //         import("./users/components/user-form/user-form.component").then((m) => m.UserFormComponent),
      //     },
      //   ],
      // },
      {
        path: "tickets",
        children: [
          {
            path: "",
            loadComponent: () =>
              import("./music-files/components/ticket-list/ticket-list.component").then(
                (m) => m.TicketListComponent,
              ),
          },
          {
            path: ":id",
            loadComponent: () =>
              import("./music-files/components/ticket-form/ticket-form.component").then(
                (m) => m.TicketFormComponent,
              ),
          },
          {
            path: "new",
            loadComponent: () =>
              import("./music-files/components/ticket-form/ticket-form.component").then(
                (m) => m.TicketFormComponent,
              ),
          },
        ],
      },
      
    
    ],
  },
  { path: "**", redirectTo: "" },
];
