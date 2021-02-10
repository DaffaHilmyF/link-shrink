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
    if(url === '' || url === []){
        return true;
    }else if(url){
        return false;
    }
}


function IsURLValid(url){


    console.log(IsInputHasNull(url), IsInputHasWhiteSpace(url), IsInputHasNoValue(url))

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
    IsInputHasWhiteSpace
}