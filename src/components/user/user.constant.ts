"use client";
import { User } from "@/services/users/user.models";

export const userColumns = [
  {
    name: "Name",
    selector: (row: User) => row.firstname,
  },
  {
    name: "Email",
    selector: (row: User) => row.email,
  },
];
