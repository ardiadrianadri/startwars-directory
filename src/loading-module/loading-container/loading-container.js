import { useSelector } from 'react-redux';

import StarwarsLoadingScreen from '../../components/starwars-loading-screen/starwars-loading-screen';
import { searchLoadingSelector } from '../../search-module/search-selectors';
import { detailLoadingSelector } from '../../detail-module/detail-selectors';

function LoadingContainer() {
  const showLoadingDetail = useSelector(detailLoadingSelector);
  const showLoadingSearch = useSelector(searchLoadingSelector)
  

  return (
    <StarwarsLoadingScreen showLoading={showLoadingSearch || showLoadingDetail}/>
  )
}

export default LoadingContainer;
