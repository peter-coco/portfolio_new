import Actions from "./actions";

export interface GlobalState {}

const initialState: GlobalState = {};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
  }
  return state;
}

export default reducer;
