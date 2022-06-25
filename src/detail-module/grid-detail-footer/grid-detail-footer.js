import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

import { useDetailFooterList } from '../../helpers/customHooks';

function GridDetailFooter ({size, type}) {
  const {
    dataList,
    isTherePrevPage,
    isThereNextPage,
    goPrevPage,
    goNextPage
   } = useDetailFooterList(type, size);

   return (
    <>
      <StarwarsResultsGrid
        dataList={dataList}
      />
      <StarwarsPaginationBar
        isThereNextPage={isThereNextPage}
        isTherePrevPage={isTherePrevPage}
        goNext={goNextPage}
        goPrev={goPrevPage}
      />
    </>
   );
}

export default GridDetailFooter;