import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

import {
  useDetailFooterList,
  useNavigateToDetail
} from '../../helpers/customHooks';
import { updateFavoriteFromFooter } from '../detail-thunks';

function GridDetailFooter ({size, type}) {
  const dispatch = useDispatch();
  const { id: parentId, type: parentType } = useParams();
  const {
    dataList,
    isTherePrevPage,
    isThereNextPage,
    goPrevPage,
    goNextPage
   } = useDetailFooterList(type, size);

   const onElementSelected = useNavigateToDetail();
   const onFavoriteSelected = (event) => {
      dispatch(updateFavoriteFromFooter(parentId, parentType, event));
   }

   return (
    <>
      <StarwarsResultsGrid
        dataList={dataList}
        elementSelected={onElementSelected}
        elementFavorite={onFavoriteSelected}
      />
      <StarwarsPaginationBar
        isThereNextPage={isThereNextPage()}
        isTherePrevPage={isTherePrevPage()}
        goNext={goNextPage}
        goPrev={goPrevPage}
      />
    </>
   );
}

export default GridDetailFooter;