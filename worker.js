chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {

  if(msg.type === 'execute-script') {
      // Get the current tab.
      const tabs = await chrome.tabs.query({ active: !0, currentWindow: !0 });
      const tabId = tabs[0];
      await chrome.scripting.executeScript({
        target: { tabId: tabId.id },
        function: () => {
          // Apply the style change in the current tab
        const logo = document.querySelector('img[alt="Google"]');
        if (logo) {
            logo.style.transition = 'transform 2s';
            logo.style.transform = 'rotate(360deg)';
         }
        }
      });
      
  }
  sendResponse(true);
})