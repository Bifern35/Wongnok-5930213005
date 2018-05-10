$(function () {

    $('#search').click(function () {
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var Strings = {};
                Strings.rate = function (num) {
                    var rate ="";
                    for(var j=0; j<num; j++){
                        rate += 
                        '<span class="fa fa-star checked"></span>';   
                         
                }
                    return rate;
                };

                var row =
                    '<a href="detail.html?placeid=' + data[i].id + '">' +
                    '<div class="row">' +
                    '<div class="col"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                    '<div class="col text-dark">' + data[i].name + '</div>' +
                    '<div class="col text-dark">' + Strings.rate(data[i].rating) + '</div>' +
                    '</div>' +
                    '</a>' +
                    '<hr>';
                $('#searchresult').append(row);
            }
        });
    });
});