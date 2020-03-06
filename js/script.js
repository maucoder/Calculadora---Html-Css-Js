function inserir(numer){
    document.form.textview.value = document.form.textview.value + numer
}

function calcular() {
    let expressao = document.form.textview.value
    document.form.textview.value = eval(expressao)    
}

function limpar(){
    document.form.textview.value = ""
}

function apagar(){
    let expressao = document.form.textview.value
    document.form.textview.value = expressao.substring(0, expressao.length-1)
}