import './starwars-render-data.css';

function StarwarsRenderData({data}) {
  const dataInCells = Object.entries(data).map(pair => (
    <>
      <div className="render-data_cell key">{pair[0]}:</div>
      <div className="render-data_cell data">{pair[1]}</div>
    </>
  ));

  return (
    <div className="render-data_container">
      {dataInCells}
    </div>
  );
}

export default StarwarsRenderData;