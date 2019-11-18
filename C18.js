const countTickets = (tickets) => {
  return tickets.reduce((acc, cv) => {
    return {...acc, [cv]: acc[cv] + 1 }
  }, { red: 0, green: 0, blue: 0 })
}

const bestOdds = (tickets, raffleEntries) => {
  const ticketCounts = countTickets(tickets);
  const winningColor = Object.keys(ticketCounts).reduce((acc, cv) => {
    return ticketCounts[cv] / raffleEntries[cv] > ticketCounts[acc] / raffleEntries[acc] ? cv : acc;
  });
  return `You have the best odds of winning the ${winningColor} raffle.`
}