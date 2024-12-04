


$(function(){
    $('#searchform').submit(function(){
        var searchterms = $('#searchterms').val();
        getResultsFromOMDB(searchterms);
        return false;
    });
});


function getResultsFromOMDB (searchterms){
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://mangaverse-api.p.rapidapi.com/manga/search?text=' + searchterms + '&nsfw=true&type=all',
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a77567f3c9mshebc6e687dcb4b80p171a63jsne5dbe3300acd',
            'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) {
        addResultsTitles(response);
    });
}

function addResultsTitles(response) {
    var htmlstring = "";

    for (var i=0; i<10; i++){
        var titleResult = response.data[i].title;
        htmlstring += "<li>" + titleResult + "</li>";
    }

    $("#results").html(htmlstring);
}