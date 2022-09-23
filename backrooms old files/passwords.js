function validatePass(){
    if(document.getElementById('password').value == 'Lost?'){
        return true;
    }else{
        alert('You seem Lost? need Help!');
        return false;
    }
}