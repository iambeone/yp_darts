enum GenderEnum {
  MALE = "male",
  FEMALE = "female",
}

enum LeadHandEnum {
  LEFT = "left",
  RIGHT = "right",
}

export type Tplayer = {
  id: number;
  surname: string;
  name: string;
  patronymic?: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  address?: string;
  email: string;
  phone?: number;
  seriesAndNumber?: number;
  dateOfIssue?: Date;
  issuedBy?: string;
  divisionCode?: string;
  snils?: string;
  INN?: string;
  subjectRF?: string;
  category?: string;
  аssigned?: Date;
  nameOfTrainer?: string;
  leadingHand?: LeadHandEnum;
  producerOfDart?: string;
  weightOfDart?: number;
  policyNumber?: number;
  startOfAction?: Date;
  endOfAction?: Date;
  weightOfPlayer?: number;
  heightOfPlayer?: number;
  clothingSize?: string;
  hobby?: string;
  educationalInstitution?: string;
  endOfEducation?: Date;
  educationLevel?: string;
  speciality?: string;
  image?: string;
  events?: Event[];
};

export type Tplayers = {
  id: number;
  surname: string;
  name: string;
  email: string;
};
