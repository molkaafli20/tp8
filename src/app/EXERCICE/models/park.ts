export interface Park {
  id: string;
  name: string;
  photo: string;
  nbLikes: number;
  openingDate: Date;
  hours?: string;
  location?: string;
}
