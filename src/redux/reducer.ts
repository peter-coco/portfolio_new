import React from "react";
import { useRef } from "react";
import Actions from "./actions";

export interface GlobalState {
  // skillsRef: typeof useRef
  menubarToggle : boolean,
  positionY : number,
  windowWidth : number,
}

const initialState: GlobalState = {
  // skillsRef: (React as any).RefObject<HTMLHeadingElement>
  menubarToggle : false,
  positionY : 0,
  windowWidth : window.innerWidth,
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.TOGGLE_MENU_BAR:
      return {
        ...state,
        menubarToggle: !state.menubarToggle,
      };
    case Actions.SET_WINDOW_WIDTH:
      return{
        ...state,
        windowWidth: action.payload.windowWidth,
      }
  }
  return state;
}

export default reducer;
