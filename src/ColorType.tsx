import Handsontable from 'handsontable';

// Use the default HTML color picker as the editor
class ColorEditor extends Handsontable.editors.BaseEditor {
  init() {
    this.picker = this.hot.rootDocument.createElement('input');
    this.picker.setAttribute('type', 'color');
    this.picker.setAttribute('width', '10px');

    this.picker.style.width = '10px';
    this.picker.classList.add('htSelectEditor');
    this.picker.style.display = 'none';

    this.hot.rootElement.appendChild(this.picker);
  }

  getValue() {
    return this.picker.value;
  }

  setValue(value) {
    this.picker.value = value;
  }

  open() {
    const { top, start, width, height } = this.getEditedCellRect();
    const pickerStyle = this.picker.style;

    this._opened = true;

    pickerStyle.height = `${height}px`;
    pickerStyle.minWidth = `${width}px`;
    pickerStyle.top = `${top}px`;
    pickerStyle[this.hot.isRtl() ? 'right' : 'left'] = `${start}px`;
    pickerStyle.margin = '0px';
    pickerStyle.padding = '0px';
    pickerStyle.borderWidth = '0px';
    pickerStyle.display = '';
  }

  focus() {
    this.picker.focus();
  }

  close() {
    this._opened = false;
    this.picker.style.display = 'none';
  }
}

// Render the value as a colored ddiv
function colorRenderer(instance, td, row, col, prop, value, cellProperties) {
  // Create a div to represent your color
  const div = document.createElement('div');

  // Style the div
  div.style.backgroundColor = value;
  div.style.width = '100%';
  div.style.height = '100%';

  // remove any existing children, and set the div into the cell
  td.innerText = '';
  td.appendChild(div);

  return td;
}

// Use RegExp to check that the value is a hex color
function colorValidator(value, callback) {
  if (/^#([0-9A-F]{6})$/.test(value)) {
    callback(true);
  } else {
    callback(false);
  }
}

// Register all the pieces under the name "color"
Handsontable.cellTypes.registerCellType('color', {
  editor: ColorEditor,
  renderer: colorRenderer,
  validator: colorValidator,
});
