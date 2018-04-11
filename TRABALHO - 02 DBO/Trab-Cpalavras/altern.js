function stats(text){
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
    let vet_sw=['de','a','o','que','e','do','da','em','um','para','é','com','não','uma','os','no','se','na','por','mais','as','dos','como','mas','foi','ao','ele','das','tem','á','seu','sua','ou','ser','quando','muito','há','nos','já','está','eu','também','só','pelo','pela','até','isso','ela','entre','era','depois','sem','mesmo','aos','ter','seus','quem','nas','me','esse','eles','estão','você','tinha','foram','essa','num','nem','suas','meu','ás','minha','têm','numa','pelos','elas',"'self'",'havia','seja','qual','será','nós',"'this'",'tenho','lhe','deles','essas','esses','pelas','este','fosse','dele','tu','te','vocês','vos','lhes','meus','minhas','teu','tua','teus','tuas','nosso','nossa','nossos','nossas','dela','delas','esta','estes','estas','aquele','aquela','aqueles','aquelas','isto','aquilo','estou','está','estamos','estão','estive','esteve','estivemos','estiveram','estava','estávamos','estavam','estivera','estivéramos','esteja','estejamos','estejam','estivesse','estivéssemos','estivessem','estiver','estivermos','estiverem','hei','há','havemos','hão','houve','houvemos','houveram','houvera','houvéramos','haja','hajamos','hajam','houvesse','houvéssemos','houvessem','houver','houvermos','houverem','houverei','houverá','houveremos','houverão','houveria','houveríamos','houveriam','sou','somos','são','era','éramos','eram','fui','foi','fomos','foram','fora','fôramos','seja','sejamos','sejam','fosse','fôssemos','fossem','for','formos','forem','serei','será','seremos','serão','seria','seríamos','seriam','tenho','tem','temos','tém','tinha','tínhamos','tinham','tive','teve','tivemos','tiveram','tivera','tivéramos','tenha','tenhamos','tenham','tivesse','tivéssemos','tivessem','tiver','tivermos','tiverem','terei','terá','teremos','terão','teria','teríamos','teriam'];
for(i=0;i<new_text.length;i++){
for(j=0;j<=vet_sw.length;j++){
if(new_text[i]===vet_sw[j]){
    new_text[i]='';
}
}
}
vet = new_text.split(' ');
return vet;
}
const texto = "Programação Orientada a Objetos (também conhecida pela sua sigla POO) é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'. A POO é um dos 4 principais paradigmas de programação (as outras são programação imperativa, funcional e lógica). Os objetos são operados com o conceito de 'this' (isso) ou 'self' (si), de forma que seus métodos muitas vezes modifiquem os dados da própria instância. Os programas são arquitetados na forma de objetos que interagem entre si. Dentre as várias abordagens da POO, as baseadas em classes são as mais comuns: objetos são instâncias de classes, o que em geral também define o tipo do objeto. Assim, na POO, implementa-se um conjunto de classes. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento com outros objetos. A alternativa mais usual ao uso de classes é o uso de protótipos. Neste caso, objetos são copias de outros objetos, não instâncias de classes. Javascript e Lua são exemplos de linguagens cuja POO é realizada por protótipos. A diferença mais prática mais evidente é que na POO baseada em protótipos apenas a herança simples é implementada pela cópia do objeto.";
const result = stats(texto);
console.log(result.length > 50);
console.log(result[0][0] === 'programação');
console.log(result[0][1] === 4);
console.log(result[1][0] === 'orientada');
console.log(result[1][1] === 1);
console.log(result[2][0] === 'objetos');
console.log(result[2][1] === 9);
console.log(result[3][0] === 'também');
console.log(result[3][1] === 2);
console.log(vet);