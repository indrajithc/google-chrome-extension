const contextMenuItem = {
  id: "spendMoney",
  title: "spendMoney",
  contexts: ["selection"],
};

function isNumber(number) {
  return !isNaN(number);
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addLister(function (eventData) {
  if (eventData.menuItemId === "spendMoney" && clickData.selectionText) {
    if (isNumber(eventData.selectionText)) {
      let total = 0;
      chrome.storage.sync.get(["total", "limit"], function (budget) {
        if (budget.total && !isNaN(budget.total)) {
          total = budget.total;
        }
        const amountValue = parseFloat(eventData.selectionText);

        if (budget.limit && !isNaN(budget.limit)) {
          if (amountValue > budget.limit) {
            const notificationOptions = {
              type: "basic",
              iconUrl: "icon-48.png",
              title: "Limit reached",
              message: "Amount should be less than limit value.",
            };
            chrome.notifications.create("limtiNotif", notificationOptions);
            return;
          }
        }
        if (amountValue) {
          const currentAmount = total + amountValue;
          spend.val(currentAmount);
          chrome.storage.sync.set({ total: currentAmount });
          amount.val("");
        }
      });
    }
  }
});
