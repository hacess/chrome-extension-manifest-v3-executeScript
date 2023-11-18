
// Function to send message to worker.js
var listData = async () => {
  chrome.runtime.sendMessage({type:'execute-script'},function(resp){
    window.close();
  });
};



document.addEventListener('DOMContentLoaded', function () {
  // Button event listeners
  document.getElementById("execBtn").addEventListener("click", listData);

});