
var tabuleiro_html;
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        tabuleiro_html += '<div"><img id="'+i+'I'+j+'" width="75" height="75" src="" onclick="clicked('+i+','+j+')"/></div>';
    }
}

document.getElementById("jogo").innerHTML = tabuleiro_html;

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        document.getElementById(i + 'I' + j).style.position = "absolute";
        document.getElementById(i + 'I' + j).style.width = 75 + 'px';
        document.getElementById(i + 'I' + j).style.height = 75 + 'px';
        document.getElementById(i + 'I' + j).style.left = 75 * i + 'px';
        document.getElementById(i + 'I' + j).style.top = 75 * j + 'px';

        if (i % 2 == 0) {
            if (j % 2 == 0) {
                document.getElementById(i + 'I' + j).src = "casa_preta.png";
                if (j < 3) {
                    document.getElementById(i + 'I' + j).src = "peca_azul.png";
                }
                if (j > 4) {
                    document.getElementById(i + 'I' + j).src = "peca_vermelha.png";
                }
            } else {
                document.getElementById(i + 'I' + j).src = "casa_branca.png";
            }  
        } else {
            if (j % 2 == 0) {
                document.getElementById(i + 'I' + j).src = "casa_branca.png";
            } else {
                document.getElementById(i + 'I' + j).src = "casa_preta.png";
                if (j < 3) {
                    document.getElementById(i + 'I' + j).src = "peca_azul.png";
                }
                if (j > 4) {
                    document.getElementById(i + 'I' + j).src = "peca_vermelha.png";
                }
            }  
        }
    }
}
var ultima_casa;
var casa_saltada;

var pontos_azul = 0;
var pontos_vermelho = 0;

document.getElementById("pa").innerHTML = pontos_azul;
document.getElementById("pv").innerHTML = pontos_vermelho;

function clicked(i, j){
    if(document.getElementById(i + 'I' + j).src == "http://127.0.0.1:5500/casa_elegivel.png"){
        
        if(document.getElementById(ultima_casa.i+'I'+ultima_casa.j).src=="http://127.0.0.1:5500/peca_azul.png"){
            document.getElementById(i + 'I' + j).src = "http://127.0.0.1:5500/peca_azul.png";
        }
        if(document.getElementById(ultima_casa.i + 'I' + ultima_casa.j).src == "http://127.0.0.1:5500/peca_vermelha.png"){
            document.getElementById(i + 'I' + j).src = "http://127.0.0.1:5500/peca_vermelha.png";
        }
        document.getElementById(ultima_casa.i + 'I' + ultima_casa.j).src = "http://127.0.0.1:5500/casa_preta.png";

        for (var x = 0; x < 8; x++) {
            for (var y = 0; y < 8; y++) {
                if (document.getElementById(x + 'I' + y).src == "http://127.0.0.1:5500/casa_elegivel.png"){
                    document.getElementById(x + 'I' + y).src = "http://127.0.0.1:5500/casa_preta.png";
                }
            }
        }
        document.getElementById(casa_saltada.i + 'I' + casa_saltada.j).src = "http://127.0.0.1:5500/casa_preta.png";
        if(casa_saltada.cor == "ver"){
            pontos_vermelho++;
            document.getElementById("pv").innerHTML = pontos_vermelho;
        }
        if(casa_saltada.cor == "azu"){
            pontos_azul++;
            document.getElementById("pa").innerHTML = pontos_azul;
        }
        return;
    }
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if (document.getElementById(x + 'I' + y).src == "http://127.0.0.1:5500/casa_elegivel.png"){
                document.getElementById(x + 'I' + y).src = "http://127.0.0.1:5500/casa_preta.png";
            }
        }
    }
    
    if (document.getElementById(i + 'I' + j).src == "http://127.0.0.1:5500/peca_azul.png") {
        ultima_casa = {"i":i ,"j":j};

        try{
            if (document.getElementById((i+1)+'I'+(j+1)).src == "http://127.0.0.1:5500/casa_preta.png")
                document.getElementById((i+1)+'I'+(j+1)).src = "http://127.0.0.1:5500/casa_elegivel.png";
        
            if (document.getElementById((i+1)+'I'+(j+1)).src == "http://127.0.0.1:5500/peca_vermelha.png"){
                if (document.getElementById((i+2)+'I'+(j+2)).src == "http://127.0.0.1:5500/casa_preta.png"){
                    document.getElementById((i+2)+'I'+(j+2)).src = "http://127.0.0.1:5500/casa_elegivel.png";
                    casa_saltada = {"i": (i+1), "j": (j+1), "cor": "azu"};
                } 
            }
        
            if (document.getElementById((i-1)+'I'+(j+1)).src == "http://127.0.0.1:5500/casa_preta.png"){
                document.getElementById((i-1)+'I'+(j+1)).src = "http://127.0.0.1:5500/casa_elegivel.png";
            }
        
            if (document.getElementById((i-1)+'I'+ (j+1)).src == "http://127.0.0.1:5500/peca_vermelha.png"){
                if (document.getElementById((i-2)+'I'+(j+2)).src == "http://127.0.0.1:5500/casa_preta.png"){
                    document.getElementById((i-2)+'I'+(j+2)).src = "http://127.0.0.1:5500/casa_elegivel.png";
                    casa_saltada = {"i": (i-1), "j": (j+1), "cor": "azu"};
                }
            }
        }catch(e){
        }
    }
    if (document.getElementById(i + 'I' + j).src == "http://127.0.0.1:5500/peca_vermelha.png") {
        ultima_casa = {"i":i ,"j":j};
        try{
            if (document.getElementById((i-1) + 'I' + (j-1)).src == "http://127.0.0.1:5500/casa_preta.png"){
                document.getElementById((i-1) + 'I' + (j-1)).src = "http://127.0.0.1:5500/casa_elegivel.png";
            }
        
            if (document.getElementById((i-1) + 'I' + (j-1)).src == "http://127.0.0.1:5500/peca_azul.png"){
                if (document.getElementById((i-2)+'I'+(j-2)).src == "http://127.0.0.1:5500/casa_preta.png"){
                    document.getElementById((i-2)+'I'+(j-2)).src = "http://127.0.0.1:5500/casa_elegivel.png";
                    casa_saltada = {"i": (i-1), "j": (j-1),"cor": "ver"};
                }
            }
       
            if (document.getElementById((i+1)+'I'+(j-1)).src == "http://127.0.0.1:5500/casa_preta.png"){
                document.getElementById((i+1)+'I'+(j-1)).src = "http://127.0.0.1:5500/casa_elegivel.png";
            }
        
            if (document.getElementById((i+1)+'I'+(j-1)).src == "http://127.0.0.1:5500/peca_azul.png"){
                if (document.getElementById((i+2)+'I'+(j-2)).src == "http://127.0.0.1:5500/casa_preta.png"){
                    document.getElementById((i+2)+'I'+(j-2)).src = "http://127.0.0.1:5500/casa_elegivel.png";
                    casa_saltada = {"i": (i+1), "j": (j-1), "cor": "ver"};
                } 
            }
        }catch(e){
        }
    }
}