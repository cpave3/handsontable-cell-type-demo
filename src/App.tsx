import * as React from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

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
  const hotRef = React.useRef(null);

  React.useEffect(() => {
    // @ts-ignore
    const hot = hotRef.current.hotInstance;

    hot.validateCells();
  });

  const data = [
    ['Susi Judson', 67, '1950-04-26', '17:05', true, 'groupware', '#a15c91'],
    ['Anetta Torrance', 8, '1950-12-22', '17:08', true, 'Diverse', '#f13981'],
    [
      'Jean Bolderson',
      89,
      '1951-07-27',
      '20:48',
      true,
      'Graphical User Interface',
      '#9383d4',
    ],
    [
      'Phyllys McCray',
      48,
      '1988-01-06',
      '17:55',
      true,
      'context-sensitive',
      '#c3eab8',
    ],
    [
      'Charmaine Tapenden',
      91,
      '1993-08-23',
      '19:46',
      false,
      'Reduced',
      '#73696e',
    ],
    [
      'Dex Fleckness',
      43,
      '1979-03-16',
      '10:08',
      false,
      'object-oriented',
      '#d6ced3',
    ],
    [
      'Alexei Ballach',
      75,
      '1961-10-27',
      '14:05',
      false,
      'algorithm',
      '#683958',
    ],
    ['Timmi Gabbidon', 86, '2000-04-29', '17:57', true, 'coherent', '#c6ea4a'],
    ['Latrena Juris', 11, '1991-01-15', '11:46', true, 'project', '#154204'],
    [
      'Angela Bimrose',
      5,
      '1999-04-27',
      '21:09',
      false,
      'Customer-focused',
      '#819adc',
    ],
  ];

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
        {},
      ]}
      height="auto"
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
  );
}

export default App;
