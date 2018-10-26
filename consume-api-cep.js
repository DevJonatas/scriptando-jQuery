function consultaCep(cep){
    var url = 'https://viacep.com.br/ws/'+cep+'/json/';
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.send();

    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4 && request.status == 200){
            console.log(request.response);
        }
    });
}