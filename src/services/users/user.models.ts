export interface User {
  id?: string;
  name: string;
  age: number;
  gender: GENDER;
}

enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
