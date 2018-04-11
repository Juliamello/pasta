function downcase(text){
let new_text ='';
for(i=0;i<text.length;i++){
    if(text.charCodeAt(i)>47 && text.charCodeAt(i)<58){
        new_text+=text[i]
    }else if(text.charCodeAt(i)>64 && text.charCodeAt(i)<91){
        new_text+=String.fromCharCode(text.charCodeAt(i)+32);
    }else if(text.charCodeAt(i)>191 && text.charCodeAt(i)<256){
        new_text+=String.fromCharCode(text.charCodeAt(i)+32);
    } else {
        new_text+=text[i];
    }
}
return new_text;
}
console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');