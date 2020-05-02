$(function () {
  console.log("options ready");

  const limit = $("#limit");

  function getInitialValue() {
    chrome.storage.sync.get(["limit"], function (budget) {
      if (budget.limit && !isNaN(budget.limit)) {
        limit.val(budget.limit);
      }
    });
  }

  $("#budget-manager").submit(function (event) {
    event.preventDefault();
    const limitValue = parseFloat(limit.val());
    if (limitValue && !isNaN(limitValue)) {
      chrome.storage.sync.set({ limit: limitValue });
      alert(`${limitValue} set as new limit value`);
    }
  });

  $("#reset-total").click(function (event) {
    event.preventDefault();
    chrome.storage.sync.set({ total: 0 });
    alert(`Limit set as 0`);
  });

  getInitialValue();
});
