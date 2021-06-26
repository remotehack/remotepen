const htmledit = document.querySelector('#html');
const cssedit = document.querySelector('#css');
const jsedit = document.querySelector('#js');

const runButton = document.querySelector('#run');


// so here we need to get file contents and add it to the textarea, rather than use what is loaded

fetch('./demo/index.html')
  .then(response => response.text())
  .then(data => {
    htmledit.value = data;
  });

fetch('./demo/style.css')
  .then(response => response.text())
  .then(data => {
    cssedit.value = data;
  });

fetch('./demo/script.js')
  .then(response => response.text())
  .then(data => {
    jsedit.value = data;
  });


// fetch into file object
// async function getText(fileURL) {

// }

const result = document.querySelector('#result');
let preview = document.querySelector('#preview');

function reloadIframe() {
  result.removeChild(preview);
  preview = document.createElement('iframe');
  result.appendChild(preview);

  showPreview();
}
runButton.addEventListener('click', reloadIframe);


function showPreview() {
  const html = htmledit.value;
  const css = `<style>${cssedit.value}</style>`;
  const js = `<script>${jsedit.value}</script>`;

  preview.contentWindow.document.open();
  preview.contentWindow.document.write(html+css+js);
  preview.contentWindow.document.close();
}

showPreview();
