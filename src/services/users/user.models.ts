export interface User {
  id: 1;
  firstname: string;
  lastname: string;
  email: string;
  gender: GENDER;
  phone: string;
  birthDate: string;
  birthPlace: string;
  isDisable: boolean;
  avatar: string;
}

enum GENDER {
  MALE = "Male",
  FEMALE = "Female",
}
