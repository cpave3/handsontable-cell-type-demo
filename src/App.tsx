import * as React from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

function App() {
  const hotRef = React.useRef(null);

  React.useEffect(() => {
    // @ts-ignore
    const hot = hotRef.current.hotInstance;

    hot.validateCells();
  });

  const data = [
    [1, 'Caddric Lowrie', 47, '1956-07-04', '14:27', false, 'Adaptive'],
    [2, 'Margit Brindley', 74, '1967-05-28', '13:53', true, 'Universal'],
    [
      3,
      'Timotheus McFarland',
      43,
      '1959-05-12',
      '13:17',
      false,
      'bi-directional',
    ],
    [
      4,
      'Jania Rubinsztein',
      70,
      '1997-07-05',
      '16:40',
      false,
      'pricing structure',
    ],
    [5, 'Winonah Cavy', 23, '1977-08-02', '17:11', true, 'human-resource'],
    [6, 'Aimee Bamford', 52, '1981-12-23', '17:58', false, 'benchmark'],
    [7, 'Jammal Drissell', 25, '1955-06-28', '12:10', true, 'Right-sized'],
    [8, 'Ced Hovie', 88, '2003-06-10', '18:24', false, '24/7'],
    [9, 'Nelle Clinkard', 52, '1987-06-01', '14:23', false, 'software'],
    [10, 'Gilburt Saberton', 35, '1968-06-05', '12:50', false, 'parallelism'],
  ];

  return (
    <HotTable
      ref={hotRef}
      data={data}
      rowHeaders={true}
      colHeaders={[
        'id',
        'Name',
        'Number',
        'Date',
        'Time',
        'Bool',
        'Favorite Word',
      ]}
      columns={[
        { readOnly: true },
        { type: 'text' },
        { type: 'numeric' },
        { type: 'date', correctFormat: true },
        { type: 'time', correctFormat: true },
        { type: 'checkbox' },
        { type: 'autocomplete' },
      ]}
      height="auto"
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
  );
}

export default App;
