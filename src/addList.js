const dialogMask = document.querySelector('.dialogMask');
const memoTitleDialog = document.querySelector('.memoTitleDialog');

function addList(){
  dialogMask.classList.add('active');
  memoTitleDialog.classList.add('active');
}

function closeDialog(){
  dialogMask.classList.remove('active');
  memoTitleDialog.classList.remove('active');
  const memoTitleInput = document.getElementById('memoTitleInput');
  memoTitleInput.value = "";
}

dialogMask.addEventListener('click',closeDialog)