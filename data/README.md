# Data Files

This directory contains the data for the Bitcoin Onboarding Leaderboard.

## Files

- `types.ts` - TypeScript type definitions for Player and Business data models
- `players.ts` - List of all players participating in the leaderboard
- `businesses.ts` - List of all businesses being tracked

## How to Update Data

### Adding a New Player

Edit `players.ts` and add a new entry to the `players` array:

```typescript
{ id: "player7", name: "YourPlayerName" }
```

### Adding a New Business

Edit `businesses.ts` and add a new entry to the `businesses` array:

```typescript
{
  id: "biz19",
  name: "Business Name",
  status: "Accepts Bitcoin", // or "Considering Accepting Bitcoin" or "Refuses to Accept Bitcoin"
  visitedBy: "player1", // Player ID who visited
  followUpBitcoinPurchase: "player2", // Optional: Player ID who made purchase
  addedToBTCMap: "player1", // Optional: Player ID who added to BTCMap
  notes: "Optional notes about this business",
}
```

### Updating Business Status

Find the business in `businesses.ts` and update the `status` field:

- `"Refuses to Accept Bitcoin"`
- `"Considering Accepting Bitcoin"`
- `"Accepts Bitcoin"`

## Data Structure

### Player
- `id`: Unique identifier (string)
- `name`: Player's name or nym (string)

### Business
- `id`: Unique identifier (string)
- `name`: Business name (string)
- `status`: Current Bitcoin acceptance status (BusinessStatus)
- `visitedBy`: Player ID who visited (optional string)
- `followUpBitcoinPurchase`: Player ID who made a purchase (optional string)
- `addedToBTCMap`: Player ID who added to BTCMap (optional string)
- `notes`: Additional notes (optional string)

