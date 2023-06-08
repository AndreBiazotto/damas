

function criarTabuleiro(){
    var tabuleiro_html = "";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            tabuleiro_html +="<div id=\""+i+"C"+j+"\" class=\"casa\" onclick=\"mover("+i+","+j+")\"></div>";
        }
    }
    document.getElementById("tabuleiro").innerHTML = tabuleiro_html;
}

function pintarTabuleiro(){
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            document.getElementById(i + 'C' + j).style.width = tamanho + 'px';
            document.getElementById(i + 'C' + j).style.height = tamanho + 'px';
            document.getElementById(i + 'C' + j).style.top = (30 + i * tamanho) + 'px';
            document.getElementById(i + 'C' + j).style.left = (30 + j * tamanho) + 'px';

            if (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) {
                document.getElementById(i + 'C' + j).style.backgroundColor = "black";
            } else {
                document.getElementById(i + 'C' + j).style.backgroundColor = "bisque";
            }
            
        }
    } 
}

function criarPeca(){
    var pecas = "";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            pecas +="<div id=\""+i+"P"+j+"\" class=\"peca\" onclick=\"clicked("+i+", "+j+")\"></div>";
        }
    }

    
    document.getElementById("pecas").innerHTML = pecas;
}
function pintarPecas(){
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            document.getElementById(i + 'P' + j).style.width = (tamanho - 10) + 'px';
            document.getElementById(i + 'P' + j).style.height = (tamanho - 10) + 'px';
            document.getElementById(i + 'P' + j).style.top = (30 + i * tamanho) + 5 + 'px';
            document.getElementById(i + 'P' + j).style.left = (30 + j * tamanho) + 5 + 'px';
            document.getElementById(i + 'P' + j).style.borderRadius = (30+i*(tamanho-10))+'px';

            if (i < 3) {
                if (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) {
                    document.getElementById(i + 'P' + j).style.backgroundColor = "blue";
                }
            }
           
            if (i > 4) {
                if (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) {
                    document.getElementById(i + 'P' + j).style.backgroundColor = "red";
                }
            }
        }
    } 
}

var turno = "vermelho";
const ultima_casa = {"i": 0, "j": 0, "cor": "branco"}

var tamanho = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 8 - 120 / 8;

criarTabuleiro();
pintarTabuleiro();
criarPeca();
pintarPecas();

function limpar(){
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if (document.getElementById(x + 'C' + y).style.backgroundColor == "green") {
                document.getElementById(x + 'C' + y).style.backgroundColor = "black";
            }
        }
    }
}

function clicked(i, j){
    if (document.getElementById(i + 'P' + j).style.backgroundColor == "black") {
        mover(i, j);
        return;
    }

    limpar();
    if (turno == "vermelho" && document.getElementById(i + 'P' + j).style.backgroundColor == "red") {
        if (j == 7) {
            if (document.getElementById((i - 1) + 'C' + (j - 1)).style.backgroundColor == "black") {
                document.getElementById((i - 1) + 'C' + (j - 1)).style.backgroundColor = "green";
            }
        } else {
            if (j == 0) {
                if (document.getElementById((i - 1) + 'C' + (j + 1)).style.backgroundColor == "black") {
                    document.getElementById((i - 1) + 'C' + (j + 1)).style.backgroundColor = "green";
                }
            } else {
                if (document.getElementById((i - 1) + 'C' + (j + 1)).style.backgroundColor == "black") {
                    document.getElementById((i - 1) + 'C' + (j + 1)).style.backgroundColor = "green";
                }
                if (document.getElementById((i - 1) + 'C' + (j - 1)).style.backgroundColor == "black") {
                    document.getElementById((i - 1) + 'C' + (j - 1)).style.backgroundColor = "green";
                }
            }
        }  
        ultima_casa.cor = "vermelho";
    }
    if (turno == "azul" && document.getElementById(i + 'P' + j).style.backgroundColor == "blue") {
        if (j == 7) {
            if (document.getElementById((i + 1) + 'C' + (j - 1)).style.backgroundColor == "black") {
                document.getElementById((i + 1) + 'C' + (j - 1)).style.backgroundColor = "green";
            }
        } else {
            if (j == 0) {
                if (document.getElementById((i + 1) + 'C' + (j + 1)).style.backgroundColor == "black") {
                    document.getElementById((i + 1) + 'C' + (j + 1)).style.backgroundColor = "green";
                }
            } else {
                if (document.getElementById((i + 1) + 'C' + (j + 1)).style.backgroundColor == "black") {
                    document.getElementById((i + 1) + 'C' + (j + 1)).style.backgroundColor = "green";
                }
                if (document.getElementById((i + 1) + 'C' + (j - 1)).style.backgroundColor == "black") {
                    document.getElementById((i + 1) + 'C' + (j - 1)).style.backgroundColor = "green";
                }
            }
        } 
        ultima_casa.cor = "azul";
    }
    ultima_casa.i = i;
    ultima_casa.j = j;
}

function mover(i, j){
    alert(turno);
    if (document.getElementById(i + 'C' + j).style.backgroundColor == "green") {
        document.getElementById(i + 'C' + j).style.backgroundColor = "black";
        alert(turno);
        if (turno == "vermelho"){
            document.getElementById(i + 'I' + j).style.backgroundColor = "red";
            turno = "azul";
        }
        if (turno == "azul"){
            document.getElementById(i + 'I' + j).style.backgroundColor = "blue";
            turno = "vermelho";
        }
        document.getElementById(ultima_casa.i + 'I' + ultima_casa.j).style.backgroundColor = "black"
        limpar();
    }
}
