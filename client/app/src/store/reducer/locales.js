export const HANDLE_LOCALE = "HANDLE_LOCALE";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case HANDLE_LOCALE: {
      return {
        ...state,
        [payload.localeIndex]: payload.locale
      };
    }
    default:
      return state;
  }
};