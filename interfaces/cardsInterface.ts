export interface Cards {
    id?: number;
    title: string;
    description: string;
    image: string;
  }
  
  export type NewCard = Omit<Cards, "id">;