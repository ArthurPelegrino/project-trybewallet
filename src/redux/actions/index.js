// Coloque aqui suas actions
import getEconomyData from '../../services/economiaAPI';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_ECONOMY_DATA = 'REQUEST_ECONOMY_DATA';
export const RECEIVE_ECONOMY_DATA = 'RECEIVE_ECONOMY_DATA';

export const emailAction = (payload) => ({
  type: USER_EMAIL,
  payload,
});

const requestEconomyData = () => ({
  type: REQUEST_ECONOMY_DATA,
});

const recieveEconomyDataSuccess = (payload) => ({
  type: RECEIVE_ECONOMY_DATA,
  payload,
});

const fetchEconomyData = async (dispatch) => {
  try {
    // console.log('Fazendo a requisição');
    dispatch(requestEconomyData());
    const economyData = await getEconomyData();
    // console.log(economyData);
    dispatch(recieveEconomyDataSuccess(economyData));
  } catch (error) {
    console.log(error);
  }
};

export const actionFetchEconomyData = () => fetchEconomyData;
