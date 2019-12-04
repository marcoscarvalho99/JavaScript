function validar() {

    if (Document.form.nome.value != "") {

        alert("campo nome concluido");
        document.form.nome.focus();
        return false;
    }
}