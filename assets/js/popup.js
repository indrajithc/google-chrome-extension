$(function () {
  console.log("ready");
  const spend = $("#spend");
  const limit = $("#limit");
  const amount = $("#amount");

  let total = 0;
  function getInitialValue() {
    chrome.storage.sync.get(["total"], function (budget) {
      if (budget.total && !isNaN(budget.total)) {
        total = budget.total;
      }
      spend.val(total);
    });
  }

  $("#budget-manager").submit(function (event) {
    event.preventDefault();
    let total = 0;
    chrome.storage.sync.get(["total"], function (budget) {
      if (budget.total && !isNaN(budget.total)) {
        total = budget.total;
      }
      const currentAmount = total + parseFloat(amount.val());
      spend.val(currentAmount);
      chrome.storage.sync.set({ total: currentAmount });
      amount.val("");
    });
  });
  getInitialValue();
});
