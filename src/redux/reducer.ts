import { useRef } from "react";
import Actions from "./actions";

export interface GlobalState {
  skillsRef: typeof useRef;
}

const initialState: GlobalState = {
  skillsRef: useRef,
};

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
