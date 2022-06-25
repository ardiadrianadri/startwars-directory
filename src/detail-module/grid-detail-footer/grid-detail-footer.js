import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

import {
  useDetailFooterList,
  useNavigateToDetail
} from '../../helpers/customHooks';

function GridDetailFooter ({size, type}) {
  const {
    dataList,
    isTherePrevPage,
    isThereNextPage,
    goPrevPage,
    goNextPage
   } = useDetailFooterList(type, size);

   const onElementSelected = useNavigateToDetail();

   return (
    <>
      <StarwarsResultsGrid
        dataList={dataList}
        elementSelected={onElementSelected}
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