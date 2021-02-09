function IsInputHasWhiteSpace(url){
    const whitespace = /\s/;
    if (whitespace.test(url)) {
        return true;
    }else{
        return false;
    }
}


function IsInputHasNull(url){
    if(url == null){
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


function IsURLValid(url){

   if(IsInputHasNull(url) == true){
       return false;
   }

   if(IsInputHasWhiteSpace && IsInputHasNoValue != true ){
        return true;
   }else{
        return false;
   }
}

module.exports = {
    IsURLValid,
    IsInputHasNoValue,
    IsInputHasNull,
    IsInputHasWhiteSpace
}