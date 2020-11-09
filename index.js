import { InteroperabilityVisualization } from '@lbhattac/interoperability-viz';

const data = JSON.parse(require('./data.json'));

InteroperabilityVisualization({
    visId: 'visContainer',
    data: data,
    numIncrements: 5,
    minSimilarity: 0,
    maxSimilarity: 1,
    digitsRounded: 2,
    colorScheme: 'schemeBlues',
    defaultMode: 'worldMap',
    enabledModes: ['worldMap', 'force'],
    tableProperties: ['similarity'],
    showTable: true,
    worldMapProperties: {
        visHeight: '100%',
        defaultFill: '#d3d3d3',
        selectedFill: '#228B22',
        highlightedFill: 'orange',
        highlightBorderWidth: 2,
        selectedCountry: 'USA',
        interactive: true,
    },
    forceProperties: {
        visHeight: '100%',
        selectedCountry: 'CHN',
        linkMultiplier: 3,
        interactive: true,
    },
});
