const smartGarbage = (trash, bins) => {
  return {...bins, [trash]: bins[trash] ? bins[trash] +=1 : 1 };
}