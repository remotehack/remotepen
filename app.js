const htmledit = document.querySelector('#html');
const cssedit = document.querySelector('#css');
const jsedit = document.querySelector('#js');


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



const preview = document.querySelector('#preview').contentWindow;


function showPreview() {
  const html = htmledit.value;
  const css = `<style>${cssedit.value}</style>`;
  const js = `<script>${jsedit.value}</script>`;
  
  preview.document.open();
  preview.document.write(html+css+js);
  preview.document.close();
  preview.location.reload();
  // console.log(htmledit.value, cssedit.value, jsedit.value);
}

htmledit.addEventListener('input', showPreview);
cssedit.addEventListener('input', showPreview);
jsedit.addEventListener('input', showPreview);
