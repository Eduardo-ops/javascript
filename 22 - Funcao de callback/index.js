function exibirArtigo(id, successCallback, errorCallback) {
    // Lógica para recuperar id
    if (true) {
        successCallback('Operation executed with success')
    } else {
        errorCallback('Operation executed with error')
    }
}

var successCallback = function (title, description) {
    document.write('<h1>' + title + '</h1>')
    document.write('<hr>')
    document.write('<p>' + description + '</p>')
}

var errorCallback = function (message) {
    document.write('<p>' + message + '</p>')
}

exibirArtigo(8, successCallback, errorCallback)