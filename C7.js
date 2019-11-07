const termTopics = (interviews) => {
  const count = interviews.reduce((acc, cv, index) => {
    return {...acc, [cv]: acc[cv] ? acc[cv]+1 : 1}
  }, {})
  return [count['smart city'], count['arts funding'], count['transportation']];
}
