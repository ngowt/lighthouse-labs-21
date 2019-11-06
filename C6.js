const voterTurnout = (voter_signatures, voter_ids) => {
  if (voter_signatures.length !== voter_ids.length) return false;

  return voter_signatures.every((voter, index) => voter === voter_ids[index])
    ? "All clear, we can count the votes!"
    : "FRAUD!";
};
