import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -1],
        scale: 1600
      }}
      style={{width: "100%", height: '100%' }}
    >
      <Geographies
        geography="/features.json"
        fill="#7562e0"
        stroke="#fff"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[17.0000, 59.3293]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Stockholm"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
