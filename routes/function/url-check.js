function IsInputHasWhiteSpace(url){
    const whitespace = /\s/;
    if (whitespace.test(url)) {
        return true;
    }else{
        return false;
    }
}


function IsInputHasNull(url){
    if(url == null || url.lenght === 0){
        return true;
    }else{
        return false;
    }
}


function IsInputHasNoValue(url){
    if(!url){
        return true;
    }else if(url){
        return false;
    }
}

function IsInputHasSpecialChar(url){
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChar.test(url)) {
        return true;
    }else{
        return false;
    }
}

function IsURLValid(url){    
   if(IsInputHasNull(url) == true){
       return false;
   }
   if(IsInputHasWhiteSpace(url) == false && IsInputHasNoValue(url) == false ){
        return true;
   }else{
        return false;
   }
}

module.exports = {
    IsURLValid,
    IsInputHasNoValue,
    IsInputHasNull,
    IsInputHasWhiteSpace, 
    IsInputHasSpecialChar
}