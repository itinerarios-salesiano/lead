var id0 = 0
function adicionarNota(){
    var elemento0 = document.getElementById('lista-notas');
    var titulo = prompt("Título da nota", "Título");
    var texto = prompt("Conteúdo da nota", "Texto");
    var nota = "<div class='notas' id='note"+id0+"'> <span class='x1' onclick=deleteNote('note"+id0+"')>x</span>"
    nota+= "<p class='titulon'>"+titulo+"</p>"
    nota+= "<p class='nota'>"+texto+"<p>"
    nota+= "</div>"
    elemento0.innerHTML = elemento0.innerHTML+nota
    id0+=1
}

function deleteNote(apagar){
    var element0 = document.getElementById(apagar);
    element0.parentNode.removeChild(element0);
}

var id1 = 0
function adicionarLista(){
    var elemento1 = document.getElementById('lista-listas');
    var titulol = prompt("Título da lista", "Título")
    var n = prompt("Número de itens na lista")
      if(Math.abs(Math.ceil(n)) > 0){
        var lista = "<div class='notas' id='list"+id1+"'> <span class='x1' onclick=deleteList('list"+id1+"')>x</span>"
        lista+= "<p class='titulon'>"+titulol+"</p>"
        lista+= "<ol>";

        var itens = ""
        for (var i = 0; i< n; i++){
            itens += "<li>"+ prompt("Digite o Item "+i)+"</li>"
        }
        
        lista+= itens
        lista+= "</ol>"
        lista+= "</div>"
        elemento1.innerHTML = elemento1.innerHTML+lista
        id1+=1
      }
      else {
        var aviso = "<alert>"
        aviso+= "O número não é válido"
        aviso+= "</alert>"
      }
}

function deleteList(apagar){
    var element1 = document.getElementById(apagar);
    element1.parentNode.removeChild(element1);
}

var id2 = 0
function adicionarLink(){
    var elemento2 = document.getElementById('lista-links');
    var titulon = prompt("Título do link", "Título");
    var texton = prompt("Conteúdo do link", "texto");
    var link = "<div class='lin' id='link"+id2+"'> <span class='x2' onclick=deleteLink('link"+id2+"')>x</span>"
    link+= "<a href='"+texton+"', target='_blank'>"
    link+= "<div class='links'>"
    link+= "<p>"+titulon+"</p>"
    link+= "</div>"
    link+= "</div>"
    link+= "</a>"
    elemento2.innerHTML = elemento2.innerHTML+link
    id2+=1
}

function deleteLink(apagar){
    var element2 = document.getElementById(apagar);
    element2.parentNode.removeChild(element2);
}