function OpenModal(modal_name) {
    let modal = document.getElementById(modal_name);

    if (typeof modal == 'undefined' || modal === null){
        return;
    }else{
        modal.style.display="Block";
        document.body.style.overflow = "hidden"
    }
    
}


function CloseModal(modal_name){
    let modal = document.getElementById(modal_name);

    if (typeof modal == 'undefined' || modal === null){
        return;
    }else{
        modal.style.display="none";
        document.body.style.overflow = "auto"
    }

}