import { createVisualization, selectCountry, hideDataTable } from '@lbhattac/interoperability-viz';

const data = JSON.parse(require('./data.json'));

const options = {
    visId: 'visContainer',
    data: data,
    numIncrements: 4,
    minSimilarity: 0,
    maxSimilarity: 1,
    digitsRounded: 2,
    colorScheme: 'schemeBlues',
    defaultMode: 'force',
    enabledModes: ['force', 'worldMap'],
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
};

createVisualization(options);

selectCountry("Turkey", options);

hideDataTable(options);
