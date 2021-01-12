import { 
    createVisualization, 
    selectCountry, 
    hideDataTable, 
    changeLayer, 
    disableLayering,
    disableInteractive
} from 'polisci-vis';

const data = JSON.parse(require('./data.json'));

const options = {
    visId: 'visContainer',
    data: data,
    numIncrements: 5,
    minSimilarity: 0,
    maxSimilarity: 1,
    digitsRounded: 2,
    colorScheme: 'schemeBlues',
    defaultMode: 'worldMap',
    enabledModes: ['worldMap', 'force'],
    tableProperties: ['Overall_Similarity'],
    tableColumnNames: ['Similarity'],
    showTable: true,
    worldMapProperties: {
        visibleProperty: 'Overall_Similarity',
        visHeight: '100%',
        defaultFill: '#d3d3d3',
        selectedFill: '#228B22',
        highlightedFill: 'orange',
        highlightBorderWidth: 2,
        selectedCountry: 'USA',
        interactive: true,
    },
    forceProperties: {
        visibleProperty: 'Overall_Similarity',
        visHeight: '100%',
        selectedCountry: 'USA',
        linkMultiplier: 3,
        interactive: true,
    },
};

createVisualization(options);
