import { generateGrid, getUpdatedState, logStates } from '../utils';
import Constants from '../constants';



export const initialState = {
	currentScreen: 0,
	rows: 3,
	columns: 3,
	currentPlayer: 1,
	scores: [0, 0],
	grid: [],
};

export function reducers(state, action) {
    logStates(state, action);
    
	switch (action.type) {
		case Constants.START_GAME:
            return Object.assign({}, 
                state,
                 action.payload
                 );
            

		case Constants.GENERATE_GRID:

			const grid = generateGrid(state.rows, state.columns);
			return Object.assign(
                {}, state, { grid }
                );
		case Constants.UPDATE_GRID:

            return getUpdatedState(state, action);
            
		case Constants.RESTART_GAME:
			return { ...initialState };
		default:
			return null;
	}
}