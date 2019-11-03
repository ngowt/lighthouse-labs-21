const castVote = (name, votes) => {
  const candidate = {
    Tim: 0,
    Sally: 1,
    Beth: 2
  };
  votes[candidate[name]] += 1;
  return votes;
};
