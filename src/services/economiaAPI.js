const getEconomyData = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const economyData = await response.json();
  return economyData;
};

export default getEconomyData;
