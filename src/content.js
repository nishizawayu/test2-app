window.alert('アプリ開いたね！');

// メッセージを受信したときの処理
const popupScript = document.createElement('script');
popupScript.src = chrome.runtime.getURL('popup.js');
document.head.appendChild(popupScript);

popupScript.onload = function () {
  chrome.runtime.sendMessage({ action: 'contentScriptLoaded' });
};

  
  
  
  
  