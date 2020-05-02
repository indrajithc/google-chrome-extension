$(function () {
  console.log("ready");
  let total = 0;
  const spend = $("#spend");
  const limit = $("#limit");
  const amount = $("#amount");

  $("#budget-manager").submit(function (event) {
    event.preventDefault();
    const currentAmount = total + parseFloat(amount.val());
    spend.val(currentAmount);
  });
});
