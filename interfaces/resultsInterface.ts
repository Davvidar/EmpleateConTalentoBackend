export interface Results {
  id?: number;
  userId: number;
  score: string;
  createdAt: Date;
}

export type NewResults = Omit<Results, "id">;
