import React from "react";
import { useRef } from "react";
import Actions from "./actions";

export interface GlobalState {
  // skillsRef: typeof useRef
}

const initialState: GlobalState = {
  // skillsRef: (React as any).RefObject<HTMLHeadingElement>
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.SCROLL_INTO_VIEW_SKILLS:
      return {
        ...state,
        skillsRef: action.payload,
      };
  }
  return state;
}

export default reducer;
