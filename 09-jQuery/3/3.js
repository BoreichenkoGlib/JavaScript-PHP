$('#btn').on('click', function (e) {
    e.preventDefault();

    var val = $('#text1').val();

    if (val.length >= 1) {
        $('#text1').val('');
    }
});