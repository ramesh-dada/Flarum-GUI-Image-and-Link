function rameshimageGUI(){
    (async () => {

        const { value: formValues } = await Swal.fire({
          title: 'Add an Image',
          showCancelButton: true,
          html:
            '<input id="swal-input1" placeholder="Image Title" class="swal2-input">' +
            '<input id="swal-input2" placeholder="Image URL" class="swal2-input">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          }
        })
      
        if (formValues) {
            var text = document.querySelector('.FormControl .Composer-flexible .TextEditor-editor');
            var imagetitle = document.getElementById('swal-input1').value
            var imageurl = document.getElementById('swal-input2').value
            text.value += `![${imagetitle}](${imageurl})`;
        }
      
        })()
}

function rameshlinkGUI(){
    (async () => {

        const { value: formValues } = await Swal.fire({
          title: 'Add a Link',
          showCancelButton: true,
          html:
            '<input id="swal-input1" placeholder="Title" class="swal2-input">' +
            '<input id="swal-input2" placeholder="URL" class="swal2-input">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          }
        })
      
        if (formValues) {
            var text = document.querySelector('.FormControl .Composer-flexible .TextEditor-editor');
            var linktitle = document.getElementById('swal-input1').value
            var linkurl = document.getElementById('swal-input2').value
            text.value += `[${linktitle}](${linkurl})`;
        }
      
        })()
}