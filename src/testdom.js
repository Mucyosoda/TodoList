const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>
<html>
  <body id='test-2'>
    <div id='1'> This is the parent 2
      <div> This is the parent 1
        <input type='checkbox' id='2' value='checkbox'/>
        <div id='event-handler'>child 1</div>
        <input type='text' id='input' value='input'/>
      </div>
    </div>
  </body>
</html>`);

const tasktodo = dom.window.document.getElementById('2');
exports.tasktodo = tasktodo;
