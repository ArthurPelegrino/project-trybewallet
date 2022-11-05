// Coloque aqui suas actions
import getEconomyData from '../../services/economiaAPI';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_ECONOMY_DATA = 'REQUEST_ECONOMY_DATA';
export const RECEIVE_ECONOMY_DATA = 'RECEIVE_ECONOMY_DATA';
export const SAVE_BUTTON_DATA = 'SAVE_BUTTON_DATA';
export const RECEIVE_COMPLETE_ECONOMY_DATA = 'RECEIVE_COMPLETE_ECONOMY_DATA';

export const emailAction = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const saveButtonData = (payload) => ({
  type: SAVE_BUTTON_DATA,
  payload,
}
);

// Actions para realizar o meu fetch

// const requestEconomyData = () => ({
//   type: REQUEST_ECONOMY_DATA,
// });

const recieveEconomyDataSuccess = (payload) => ({
  type: RECEIVE_ECONOMY_DATA,
  payload,
});

const fetchEconomyData = async (dispatch) => {
  try {
    // console.log('Fazendo a requisição');
    // dispatch(requestEconomyData());
    const economyData = await getEconomyData();
    // console.log(economyData);
    dispatch(recieveEconomyDataSuccess(economyData));
  } catch (error) {
    console.log(error);
  }
};

export const actionFetchEconomyData = () => fetchEconomyData;

// const recieveCompleteEconomyDataSuccess = (payload) => ({
//   type: RECEIVE_COMPLETE_ECONOMY_DATA,
//   payload,
// });

// const fetchCompleteEconomyData = async (dispatch) => {
//   try {
//     // dispatch(requestEconomyData());
//     const completeEconomyData = await getEconomyData();
//     dispatch(recieveCompleteEconomyDataSuccess(completeEconomyData));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const actionFetchCompleteEconomyData = () => fetchCompleteEconomyData;
