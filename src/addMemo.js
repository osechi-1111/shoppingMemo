const dialogMask = document.querySelector('.dialogMask');
const memoTitleDialog = document.querySelector('.memoTitleDialog');
const memoList = document.querySelector('.memoList');
const backToMemoListBtn = document.querySelector('.backToMemoListBtn');
const memos = document.getElementById('memos');
let memoTitles = document.querySelectorAll('.memoTitle');
let memoDeleteButtons = document.querySelectorAll('.memoDeleteButton');

for(let i =0; i < memoTitles.length; i++){
  memoTitles[i].addEventListener("click", pageControl);
}

for(let i =0; i < memoDeleteButtons.length; i++){
  memoDeleteButtons[i].addEventListener("click", deleteMemo);
}

// ページコントロール
function pageControl(){  
  let memo = document.querySelectorAll('.memo');
  
  let memoArr = Array.from(memoTitles);

  let index = memoArr.indexOf(this);

  memo[index].classList.add('show');

  memoList.classList.add('hidden');
  backToMemoListBtn.classList.add('active');
}

// リストに戻る
function backToMemoList(){
  const memo = document.querySelectorAll('.memo');

  memo.forEach(content => {
    content.classList.remove('show');
  });
  
  memoList.classList.remove('hidden');
  backToMemoListBtn.classList.remove('active');
}

// ダイアログ系統
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

dialogMask.addEventListener('click',closeDialog);

function newMemo(){
  const memoTitleInput = document.getElementById('memoTitleInput');
  const createMemoListLi = document.createElement('li');
  const createMemoTitle = document.createElement('span');
  const createMemoDeleteButton = document.createElement('button');
  const memoListUl = document.getElementById("memoListUl");

  const createMemo = document.createElement('div');
  const createMemoContentTitle = document.createElement('h2');
  const createAchievement = document.createElement('div');
  const createGauge = document.createElement('div');
  const createBar = document.createElement('div');
  const createRatio = document.createElement('span');
  const createMemoContent = document.createElement('div');
  const createMemoList = document.createElement('ul');

  createMemoListLi.classList.add('memoListLi');
  createMemoTitle.classList.add('memoTitle');
  createMemoTitle.textContent = memoTitleInput.value;
  createMemoDeleteButton.classList.add('memoDeleteButton');
  createMemoDeleteButton.textContent = "削除";

  createMemo.classList.add('memo');
  createMemoContentTitle.classList.add('memoContentTitle');
  createMemoContentTitle.textContent = memoTitleInput.value;
  createAchievement.classList.add('achievement');
  createGauge.classList.add('gauge');
  createBar.classList.add('bar');
  createRatio.classList.add('ratio');
  createMemoContent.classList.add('memoContent');
  createMemoList.setAttribute('id','memoList');

  createGauge.appendChild(createBar);
  createAchievement.appendChild(createGauge);
  createAchievement.appendChild(createRatio);
  createMemoContent.appendChild(createMemoList);
  createMemo.appendChild(createMemoContentTitle);
  createMemo.appendChild(createAchievement);
  createMemo.appendChild(createMemoContent);
  memos.insertBefore(createMemo,memos.firstChild);
  
  createMemoListLi.appendChild(createMemoTitle);
  createMemoListLi.appendChild(createMemoDeleteButton);
  memoListUl.insertBefore(createMemoListLi, memoListUl.firstChild);
  
  memoTitles = document.querySelectorAll('.memoTitle');

  for(let i =0; i < memoTitles.length; i++){
    memoTitles[i].addEventListener("click", pageControl);
  }

  memoDeleteButtons = document.querySelectorAll('.memoDeleteButton');

  for(let i =0; i < memoDeleteButtons.length; i++){
    memoDeleteButtons[i].addEventListener("click", deleteMemo);
  }
  
  closeDialog();
}

// メモを削除する
function deleteMemo(){
  let memoListLis = document.querySelectorAll('.memoListLi');
  let memo = document.querySelectorAll('.memo');

  let memoDeleteButtonsArr = Array.from(memoDeleteButtons);

  let index = memoDeleteButtonsArr.indexOf(this);

  memoListLis[index].remove();
  memo[index].remove();

  memoTitles = document.querySelectorAll('.memoTitle');

  for(let i =0; i < memoTitles.length; i++){
    memoTitles[i].addEventListener("click", pageControl);
  }

  memoDeleteButtons = document.querySelectorAll('.memoDeleteButton');

  for(let i =0; i < memoDeleteButtons.length; i++){
    memoDeleteButtons[i].addEventListener("click", deleteMemo);
  }
}
