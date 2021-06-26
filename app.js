const htmledit = document.querySelector('#html');
const cssedit = document.querySelector('#css');
const jsedit = document.querySelector('#js');

const runButton = document.querySelector('#run');

const doctype = '<!doctype html>\n';

// so here we need to get file contents and add it to the textarea, rather than use what is loaded

async function getFileInputValue(url, input) {
  const response = await fetch(url);
  input.value = await response.text();
}

Promise.all([
  getFileInputValue('./demo/index.html', htmledit),
  getFileInputValue('./demo/style.css', cssedit),
  getFileInputValue('./demo/script.js', jsedit),
])
.then(showPreview);

const result = document.querySelector('#result');
let preview = document.querySelector('#preview');

function reloadIframe() {
  result.removeChild(preview);
  preview = document.createElement('iframe');
  preview.id = 'preview';
  result.appendChild(preview);

  showPreview();
}
runButton.addEventListener('click', reloadIframe);


function showPreview() {
  const html = htmledit.value;
  const css = `<style>${cssedit.value}</style>`;
  const js = `<script>${jsedit.value}</script>`;

  preview.contentWindow.document.open();
  preview.contentWindow.document.write(doctype+html+css+js);
  preview.contentWindow.document.close();
}


