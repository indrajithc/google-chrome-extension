$(function () {
  console.log("ready");
  const spend = $("#spend");
  const limit = $("#limit");
  const amount = $("#amount");

  let total = 0;
  function getInitialValue() {
    chrome.storage.sync.get(["total", "limit"], function (budget) {
      if (budget.total && !isNaN(budget.total)) {
        total = budget.total;
      }

      if (budget.limit && !isNaN(budget.limit)) {
        limit.val(budget.limit);
      }

      spend.val(total);
    });
  }

  $("#budget-manager").submit(function (event) {
    event.preventDefault();
    let total = 0;
    chrome.storage.sync.get(["total", "limit"], function (budget) {
      if (budget.total && !isNaN(budget.total)) {
        total = budget.total;
      }
      const amountValue = parseFloat(amount.val());

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
  });
  getInitialValue();
});
