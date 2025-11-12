export type BusinessStatus = 
  | "Refuses to Accept Bitcoin"
  | "Considering Accepting Bitcoin"
  | "Accepts Bitcoin";

export interface Player {
  id: string;
  name: string;
}

export interface Business {
  id: string;
  name: string;
  status: BusinessStatus;
  visitedBy?: string; // Player ID
  followUpBitcoinPurchase?: string; // Player ID
  addedToBTCMap?: string; // Player ID
  notes?: string;
}

