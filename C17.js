const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((acc, cv) => (cv[metric] > acc[metric] ? cv : acc)).submitter;
};
