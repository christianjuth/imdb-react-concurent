import { serverActions } from '../../../server';
import types from './types';
import { debounce } from 'lodash';



const search = debounce(async (dispatch: any, getState: any) => {
  let { movies } = getState();
  const data = await serverActions.search({name: movies.search});

  dispatch({
    type: types.SEARCH_UPDATE_RESULTS,
    payload: data
  })
}, 600);


function searchDebounced({ name }: { name: string }) {
  return (dispatch: any) => {
    dispatch({
      type: types.SEARCH,
      payload: name
    });

    dispatch(search);
  };
}

export {
  searchDebounced
};