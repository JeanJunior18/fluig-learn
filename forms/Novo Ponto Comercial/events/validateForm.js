function validateForm(form){
    // if(form.getValue('email') == ''){
    //     throw 'Campo Email não foi preenchido'
    // }

    var stackholders = form.getChildrenIndexes('responsaveisTabela')
    
    if(stackholders.length == 0) {
        throw 'Informe os Stackholders'
    }
}