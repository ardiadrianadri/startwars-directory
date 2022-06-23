import { useParams } from 'react-router-dom';

function StarwarsDetailView() {
  let params = useParams();

  console.log('NNN params: ', params);
  return (
    <h1>This will be the detail view</h1>
  );
}

export default StarwarsDetailView;
