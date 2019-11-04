const registerToVote = (name, unregisteredVoters) => {
  return unregisteredVoters.filter(el => el !== name);
}