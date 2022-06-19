import { useSelector } from 'react-redux';

import StarwarsLoadingScreen from '../../components/starwars-loading-screen/starwars-loading-screen';
import { searchLoadingSelector } from '../../search-module/search-selectors';

function LoadingContainer() {
  let showLoading = useSelector(searchLoadingSelector);

  return (
    <StarwarsLoadingScreen showLoading={showLoading}/>
  )
}

export default LoadingContainer;
