const htmledit = document.querySelector('#html');
const cssedit = document.querySelector('#css');
const jsedit = document.querySelector('#js');

const preview = document.querySelector('#preview').contentWindow.document;


function showPreview() {
  const html = htmledit.value;
  const css = `<style>${cssedit.value}</style>`;
  const js = `<script>${jsedit.value}</script>`;
  
  preview.open();
  preview.write(html+css+js);
  preview.close();
  // console.log(htmledit.value, cssedit.value, jsedit.value);
}

htmledit.addEventListener('input', showPreview);
cssedit.addEventListener('input', showPreview);
jsedit.addEventListener('input', showPreview);
