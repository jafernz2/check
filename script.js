document.getElementById('checkForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const payee = document.getElementById('payee').value;
  const amount = document.getElementById('amount').value;
  const memo = document.getElementById('memo').value;
  const date = document.getElementById('date').value;

  // Validate input
  if (!payee || !amount || !memo || !date) {
    alert("Please fill in all fields.");
    return;
  }

  // Generate check preview
  const checkOutput = `
    <div class="check-header">
      <h2>Inferno School District</h2>
      <p>2216 Randolph RD, Inferno, Missouri 64521</p>
      <p>Call: 816.816.2220</p>
      <p>Routing Number: 102938593 | Account Number: 110929209</p>
    </div>
    <div class="check-details">
      <div class="row">
        <div class="left">Date: ${date}</div>
        <div class="right">Amount: ${amount}</div>
      </div>
      <div class="row">
        <div class="left">Pay to the order of: ${payee}</div>
      </div>
      <div class="row">
        <div class="left">Memo: ${memo}</div>
      </div>
    </div>
  `;

  // Display the check preview
  document.getElementById('checkOutput').innerHTML = checkOutput;
  document.getElementById('checkPreview').style.display = 'block';
});
