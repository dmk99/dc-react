# @david.kucsai/dc-react

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

### Status

A marked checkbox indicates that all the setter props have been specified in the component props.
Which indicates that it should be functionally complete.

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
