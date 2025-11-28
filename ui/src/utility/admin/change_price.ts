import { Transaction } from "@mysten/sui/transactions";

export const changePrice = (packageId: string, listHeroId: string, newPriceInSui: string, adminCapId: string) => {
  const tx = new Transaction();
  
  // TODO: Convert SUI to MIST (1 SUI = 1,000,000,000 MIST)
    // Hints:
    // const newPriceInMist = ?
    const newPriceInMist=BigInt(parseFloat(newPriceInSui) * 1_000_000_000);
  // TODO: Add moveCall to change hero price (Admin only)
  // Function: `${packageId}::marketplace::change_the_price`
  // Arguments: adminCapId (object), listHeroId (object), newPriceInMist (u64)
    // Hints:
    // Use tx.object() for objects
    // Use tx.pure.u64() for the new price
    // Convert price from SUI to MIST before sending

  tx.moveCall({
     target:`${packageId}::marketplace::change_the_price`,
     arguments:[
      tx.object(adminCapId),
      tx.object(listHeroId),
      tx.pure.u64(newPriceInMist),
    ],
});
   return tx;
};
