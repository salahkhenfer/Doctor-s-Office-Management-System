function Chart() {
  const styleCharts = (height: string) => {
    return {
      height: height,
    };
  };
  return (
    <div className="Charts">
      <div className="Visits-text">Visits This month</div>
      <div className="contianer-Charts">
        <div className="theChart-x">
          <div className="x">
            <div className="Item-count">0</div>
            <div className="Item-count">10</div>
            <div className="Item-count">20</div>
            <div className="Item-count">30</div>
            <div className="Item-count">40</div>
            <div className="Item-count">50</div>
          </div>

          <div className="y">
            <div className="columns">
              <div
                className="column theBigst "
                style={styleCharts("93%")}
              ></div>

              <div className="Item-count">10</div>
            </div>
            <div className="columns">
              <div className="column" style={styleCharts("50%")}></div>
              <div className="Item-count">20</div>
            </div>
            <div className="columns ">
              <div className="column  " style={styleCharts("30%")}></div>
              <div className="Item-count">30</div>
            </div>
            <div className="columns">
              <div className="column" style={styleCharts("60%")}></div>
              <div className="Item-count">40</div>
            </div>
            <div className="columns">
              <div className="column" style={styleCharts("80%")}></div>
              <div className="Item-count">50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
