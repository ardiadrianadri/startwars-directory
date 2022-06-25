export function detailLoadingSelector(state) {
  return state.detail.loading;
}

export function detailErrorSelector(state) {
  return state.detail.error;
}

export function detailDataSelector(state) {
  return {
    name: state.detail.name,
    picture: state.detail.picture,
    favorite: state.detail.favorite,
    detailData: state.detail.detailData
  };
}