import './example-footer.css';

import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

function ExampleFooter({cardData}) {
  return (
    <>
      <StarwarsResultsGrid dataList={[cardData]}/>
      <StarwarsPaginationBar isThereNextPage={true} isTherePrevPage={true}/>
    </>
  );
}

export default ExampleFooter;