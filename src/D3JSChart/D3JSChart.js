import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3JSChart = ({ d3JSDataSource }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!d3JSDataSource || d3JSDataSource.length === 0) {
      return;
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); 

    const width = 400;
    const height = 450;
    const radius = Math.min(width, height) / 2;

    const colorScale = d3
      .scaleOrdinal()
      .domain(d3JSDataSource.map((v) => v.label))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);

    const d3Pie = d3.pie().value((d) => d.budget);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const d3Chart = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    d3Chart
      .selectAll("path")
      .data(d3Pie(d3JSDataSource))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colorScale(d.data.label))
      .attr("stroke", "#121926")
      .style("stroke-width", "2px");

    const label = d3.arc().innerRadius(100).outerRadius(radius);

    d3Chart
      .selectAll("text")
      .data(d3Pie(d3JSDataSource))
      .enter()
      .append("text")
      .text((d) => d.data.label)
      .attr("transform", (d) => `translate(${label.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", "15px");
  }, [d3JSDataSource]);

  return (
    <div className="chart-container" style={{ width: 700, height: 450 }}>
      <h3 style={{ textAlign: "center" }}>D3JS Pie Chart</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default D3JSChart;
