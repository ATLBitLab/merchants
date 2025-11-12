import { Player, Business } from "@/data/types";

export interface PlayerScore {
  player: Player;
  count: number;
}

// Top Players: Businesses with Status = "Accepts Bitcoin" AND Visited By = Player
export function getTopPlayers(
  players: Player[],
  businesses: Business[]
): PlayerScore[] {
  const scores = new Map<string, number>();

  businesses.forEach((business) => {
    if (
      business.status === "Accepts Bitcoin" &&
      business.visitedBy
    ) {
      const current = scores.get(business.visitedBy) || 0;
      scores.set(business.visitedBy, current + 1);
    }
  });

  return players
    .map((player) => ({
      player,
      count: scores.get(player.id) || 0,
    }))
    .filter((score) => score.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Supporting Spenders: Businesses with Status = "Accepts Bitcoin" AND Follow-up Bitcoin Purchase = Player
export function getSupportingSpenders(
  players: Player[],
  businesses: Business[]
): PlayerScore[] {
  const scores = new Map<string, number>();

  businesses.forEach((business) => {
    if (
      business.status === "Accepts Bitcoin" &&
      business.followUpBitcoinPurchase
    ) {
      const current = scores.get(business.followUpBitcoinPurchase) || 0;
      scores.set(business.followUpBitcoinPurchase, current + 1);
    }
  });

  return players
    .map((player) => ({
      player,
      count: scores.get(player.id) || 0,
    }))
    .filter((score) => score.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Top Mappers: Businesses with Status = "Accepts Bitcoin" AND Added to BTC Map = Player
export function getTopMappers(
  players: Player[],
  businesses: Business[]
): PlayerScore[] {
  const scores = new Map<string, number>();

  businesses.forEach((business) => {
    if (
      business.status === "Accepts Bitcoin" &&
      business.addedToBTCMap
    ) {
      const current = scores.get(business.addedToBTCMap) || 0;
      scores.set(business.addedToBTCMap, current + 1);
    }
  });

  return players
    .map((player) => ({
      player,
      count: scores.get(player.id) || 0,
    }))
    .filter((score) => score.count > 0)
    .sort((a, b) => b.count - a.count);
}

// Top Visitors: Businesses Visited By = Player (regardless of status)
export function getTopVisitors(
  players: Player[],
  businesses: Business[]
): PlayerScore[] {
  const scores = new Map<string, number>();

  businesses.forEach((business) => {
    if (business.visitedBy) {
      const current = scores.get(business.visitedBy) || 0;
      scores.set(business.visitedBy, current + 1);
    }
  });

  return players
    .map((player) => ({
      player,
      count: scores.get(player.id) || 0,
    }))
    .filter((score) => score.count > 0)
    .sort((a, b) => b.count - a.count);
}

