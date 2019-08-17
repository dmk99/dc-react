# @david.kucsai/dc-react

**This project is still a WIP.**

The goal of this library is to provide a React-styled wrapper around the great DC.js library.

[![npm version](http://img.shields.io/npm/v/@david.kucsai/dc-react.svg?style=flat)](https://npmjs.org/package/@david.kucsai/dc-react "View this project on npm")

To get started run:

```
npm install @david.kucsai/dc-react
```

You will need:

```
    "crossfilter2": "^1.4.7",
    "dc": "^3.1.0"
```

## Documentation

### Notes

- Refer to [DC.js documentation](http://dc-js.github.io/dc.js/docs/html/index.html) for the associated properties on most of the charts.
    - Generally properties will have the same name as the original documentation.
    - There are a few extra properties which have been added that hook into underlying DC.js properties. These are the following (which can be found in `src/props/BaseProps.ts`)
        - Event Listeners. Corresponds with the `on` function calls:
            ```typescript
                onRenderlet?: (chart: AllDcCharts, filter: any) => void;
                onPretransition?: (chart: AllDcCharts, filter: any) => void;
                onPreRender?: (chart: AllDcCharts) => void;
                onPostRender?: (chart: AllDcCharts) => void;
                onPreRedraw?: (chart: AllDcCharts) => void;
                onFiltered?: (chart: AllDcCharts, filter: any) => void;
                onZoomed?: (chart: AllDcCharts, filter: any) => void;
            ```
        
        - Chart reference. This will return the chart reference once the component is mounted. Use this to call `filterAll()` or any other relevant functions. 
            ```typescript
                  getChart?: (chart: AllDcCharts) => void;
            ```
        

### Status

A marked checkbox indicates that all the setter props have been specified in the component props.
Which indicates that all the settable properties have been added to the property definitions.

- [x] DataCount
- [x] DataGrid
- [x] DataTable
- [x] NumberDisplay
- [ ] SelectMenu
- [ ] CboxMenu
- [ ] TextFilterWidget
- [ ] BubbleOverlay
- [ ] HeatMap
- [ ] GeoChoroplethChart
- [x] RowChart
- [x] PieChart
- [ ] SunburstChart
- [ ] BubbleChart
- [x] BoxPlot
- [ ] CompositeChart - *partially complete* 
- [x] ScatterPlot
- [x] SeriesChart
- [x] BarChart
- [ ] LineChart - *partially complete*

## Running Locally

To run the storybook:
```
yarn start
```

Compile to typescript: 
```
yarn recompile
```

Build (Clean & Compile):
```
yarn build
```

Run tests:
```
yarn test
```
