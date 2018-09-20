// Const
export const SIMPLE_ACTION = 'SIMPLE_ACTION';

// Action Creators
export function simpleAction(){
  return dispatch => {
    dispatch({
      type: 'SIMPLE_ACTION',
      payload: 'result_of_simple_action'
    })
  }
}

// Reducer
const initialState = {
  result: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIMPLE_ACTION: {
      return Object.assign({}, initialState, {
        result: payload,
      });
    }
    default: {
      return state;
    }
  }
}