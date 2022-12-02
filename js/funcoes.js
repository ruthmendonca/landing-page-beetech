/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

let p = xmlDoc.getElementsByTagName("postagem");

/* Exibe o conteúdo */
function funcaoTitulo() {
		document.write("<h1 style='color: #f8d030; font-size: 50px;border-bottom: #e8a820 4px solid; width: auto;'>" + x[0].getElementsByTagName("tituloinicio")[0].childNodes[0].nodeValue + "</h1>");
}

function funcaoSubtituloInicio(){
	document.write(x[0].getElementsByTagName("subTitulo_inicio")[0].childNodes[0].nodeValue);
}

function funcaoTextoInicio(){
	document.write(x[0].getElementsByTagName("texto_inicio")[0].childNodes[0].nodeValue);
}

function funcaoTituloProjeto(){
	document.write(x[0].getElementsByTagName("titulo_projeto")[0].childNodes[0].nodeValue);
}

function funcaoTextoProjeto(){
	document.write(x[0].getElementsByTagName("texto_projeto")[0].childNodes[0].nodeValue);
}


function funcaoInformacao1(){
	document.write(x[0].getElementsByTagName("informacao1_projeto")[0].childNodes[0].nodeValue);
}
function funcaoInformacao2(){
	document.write(x[0].getElementsByTagName("informacao2_projeto")[0].childNodes[0].nodeValue);
}
function funcaoInformacao3(){
	document.write(x[0].getElementsByTagName("informacao3_projeto")[0].childNodes[0].nodeValue);
}
function funcaoInformacao4(){
	document.write(x[0].getElementsByTagName("informacao4_projeto")[0].childNodes[0].nodeValue);
}
function funcaoInformacao5(){
	document.write(x[0].getElementsByTagName("informacao5_projeto")[0].childNodes[0].nodeValue);
}
function funcaoInformacao6(){
	document.write(x[0].getElementsByTagName("informacao6_projeto")[0].childNodes[0].nodeValue);
}



function funcaoTituloIntegrantes(){
	document.write(x[0].getElementsByTagName("titulo_integrantes")[0].childNodes[0].nodeValue);
}

function funcaoTextoFooter(){
	document.write(x[0].getElementsByTagName("texto_footer")[0].childNodes[0].nodeValue);
}


function funcaoLink1(){
	document.write(x[0].getElementsByTagName("link1_footer")[0].childNodes[0].nodeValue);
}

function funcaoLink2(){
	document.write(x[0].getElementsByTagName("link2_footer")[0].childNodes[0].nodeValue);
}

function funcaoLink3(){
	document.write(x[0].getElementsByTagName("link3_footer")[0].childNodes[0].nodeValue);
}


function funcaoImagem1(){
	document.write("<img class='card-img-top' src='img/" + x[0].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' alt='Card image'></img>");
}
function funcaoImagem2(){
	document.write("<img class='card-img-top' src='img/" + x[0].getElementsByTagName("imagem_2")[0].childNodes[0].nodeValue + "' alt='Card image'></img>");
}
function funcaoImagem3(){
	document.write("<img class='card-img-top' src='img/" + x[0].getElementsByTagName("imagem_3")[0].childNodes[0].nodeValue + "' alt='Card image'></img>");
}

function funcaoTituloBlog(){
	document.write(x[0].getElementsByTagName("titulo_blog")[0].childNodes[0].nodeValue);
}

//blog			
function funcaoBlog(){
	  
	n = p.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<div class='accordion-item' ><h2 class='accordion-header' id='heading"+i+"'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapse"+i+"' style='color:black;font-size:20px;background-color:#f5f0d4;border-top-left-radius : 2%;border-top-right-radius : 2%;border-bottom-right-radius : 2%;border-bottom-left-radius : 2%;'>"+ p[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</button></h2><div style='background-color:#212529;color:white;font-size:20px;text-align:justify;' id='collapse"+i+"'  class='accordion-collapse collapse' aria-labelledby='heading"+i+"' data-bs-parent='#accordionExample'><div class='accordion-body' >"+ p[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</div></div></div>");}
}
