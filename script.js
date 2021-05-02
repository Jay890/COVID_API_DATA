const refresh = document.getElementById('refresh');

$(document).ready(function () {
  init();

  function init() {
    var url = 'https://api.covid19api.com/summary';

    let data = '';

    $.get(url, function (data) {
      console.log(data.Global);

      data = `
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.NewConfirmed}</td>
        <td>${data.Global.TotalRecovered}</td>
        `;

      //acess the data by jquery, add it to ifd #data and attach as html, pass the data
      $('#data').html(data);
    });
  }

  function refreshData() {
    clearData();
  }

  function clearData() {
    //   clear the exisitng data and call init again
    // makes a new call to the API and attach the new data to the table
    $('#data').empty();
    init();
  }

  refresh.addEventListener('click', refreshData);
});
