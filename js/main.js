console.log("Hello World");

const writeValues = () => {
  console.log('inside the writeValues function');
  const dob = $('#dob').val();
  console.log(dob);

  const now = moment();
  const then = moment(dob);
  const duration = moment.duration(now.diff(then));

  $('#years-value').text(duration.as('years').toFixed(2));
  $('#months-value').text(duration.as('months').toFixed(2));
  $('#weeks-value').text(duration.as('weeks').toFixed(2));
  $('#days-value').text(duration.as('days').toFixed(2));
}

$('#dob-button').on('click', writeValues);

