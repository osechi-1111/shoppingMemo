const editBtn = document.querySelector('.editBtn');
const editCheckBtn = document.querySelector('.editCheckBtn');

function edit(){
  const memoDeleteButton = document.querySelectorAll('.memoDeleteButton');
  
  for(i = 0; i < memoDeleteButton.length; i++){
    memoDeleteButton[i].classList.add('active');
  }
  
  editBtn.classList.add('hidden');
  editCheckBtn.classList.add('active');
}

function editCheck(){
  const memoDeleteButton = document.querySelectorAll('.memoDeleteButton');
  
   for(i = 0; i < memoDeleteButton.length; i++){
    memoDeleteButton[i].classList.remove('active');
  }

  editBtn.classList.remove('hidden');
  editCheckBtn.classList.remove('active');
}
