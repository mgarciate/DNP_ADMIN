//  PACKAGES
import * as t from "./actionTypes";
import merge from "deepmerge";

const initialState = {
  fetching: false,
  logs: {},
  systemUpdateAvailable: false,
  coreDeps: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case t.UPDATE_LOG:
      return merge(state, {
        logs: {
          [action.id]: action.logs
        }
      });
    case t.SYSTEM_UPDATE_AVAILABLE:
      return {
        ...state,
        systemUpdateAvailable: action.systemUpdateAvailable
      };
    case t.CORE_DEPS:
      return {
        ...state,
        coreDeps: action.coreDeps
      };
    case t.UPDATE_FETCHING:
      return {
        ...state,
        fetching: action.fetching
      };
    default:
      return state;
  }
}
