import * as React from 'react';
import './ColorType';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { data } from './data';

// register Handsontable's modules
registerAllModules();

const autocompleteWords = [
  'groupware',
  'Diverse',
  'Graphical User Interface',
  'context-sensitive',
  'Reduced',
  'object-oriented',
  'algorithm',
  'coherent',
  'project',
  'Customer-focused',
];

function App() {
  const hotRef = React.useRef<HotTable | null>(null);

  React.useEffect(() => {
    const hot = hotRef.current?.hotInstance;

    hot?.validateCells();
  });

  return (
    <HotTable
      ref={hotRef}
      data={data}
      rowHeaders={true}
      colHeaders={[
        'Name',
        'Number',
        'Date',
        'Time',
        'Bool',
        'Favorite Word',
        'Color',
      ]}
      columns={[
        { type: 'text' },
        { type: 'numeric' },
        { type: 'date', correctFormat: true },
        { type: 'time', correctFormat: true },
        { type: 'checkbox' },
        { type: 'autocomplete', source: autocompleteWords },
        {
          type: 'color',
        },
      ]}
      height="auto"
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
  );
}

export default App;
