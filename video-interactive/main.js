var divl = document.getElementById("vleft");
var divr = document.getElementById("vright");
var vl = document.getElementById("videoLeft");
var vr = document.getElementById("videoRight");
var btnl = document.getElementById("btnl")
var btnr = document.getElementById("btnr")
var divbtn = document.getElementById("btn-start")
var evil = 0
var good = 0

function start(){
    /* btnl.style.display = "none"
    btnr.style.display = "none" */
    divbtn.style.display = "none"
    vl.play() 
    setTimeout ( function(){
        vl.pause()
        vr.play();
    }, 8000)
    setTimeout (function (){
        vr.pause()
        btnl.style.display = "block"
        btnr.style.display = "block"
    },25000)
}


function videoLeft() {
    evil++
    console.log(evil)
    if (evil == 1 && good == 0 ) {
    btnl.style.display = "none"
    btnr.style.display = "none"
/*     divl.classList.remove("left")
    divl.classList.add("leftFull") */
    vl.play()
    setTimeout(function() {
        vl.pause()
        btnl.style.display = "block"
        btnr.style.display = "block"
        btnl.innerHTML = "Continuer pour gagner les sous"
        btnr.innerHTML = "Remord et retourne sauver le chien"; }, 24000);
    }
     else if (evil == 1 && good == 1) {
        btnl.style.display = "none"
        btnr.style.display = "none"
        vr.setAttribute("src","video/doghit.mp4")
        vr.play()
        vr.onended= function (){
            vl.play()
            setTimeout(function () {
                vl.pause()
                vl.setAttribute("src","video/minmoney.mp4")
                btnl.style.display = "block"
                btnr.style.display = "block"
                vr.setAttribute("src","video/sanctuarydog.mp4")
                btnl.innerHTML = "Demander plus"
                btnr.innerHTML = "Remord et avec le million achete chenille"
            },24000)
        }
    } else if (evil == 2 && (good == 0 || good == 1 )) {
        btnl.style.display = "none"
        btnr.style.display = "none"
        vr.setAttribute("src","video/doghit.mp4")
        vl.setAttribute("src","video/minmoney.mp4")
        vr.play()
        vr.onended = function (){
            btnl.style.display = "block"
            btnr.style.display = "block"
            vr.setAttribute("src","video/sanctuarydog.mp4")
            btnl.innerHTML = "Demander plus"
            btnr.innerHTML = "Remord et avec le million achete chenille"
        }
        } else if (evil == 3 && (good == 0 || good == 1 )) {
            btnl.style.display = "none"
            btnr.style.display = "none"
            vl.play()
            vl.onended = function (){
                btnl.style.display = "block"
                btnr.style.display = "block"
                btnl.innerHTML = "les retrouver et les tuer"
                btnr.innerHTML = "Prise de conscience et deviens benevole chenille"
            }
        }
    }



function videoRight() {
    good++;
    console.log("good"+good);
    if (evil == 0 && good == 1 ) {
    btnl.style.display = "none"
    btnr.style.display = "none"
/*     divl.classList.remove("left")
    divl.classList.add("leftFull") */
    vr.play()
    setTimeout(function() {
        vr.pause()
        btnl.style.display = "block"
        btnr.style.display = "block"
        btnl.innerHTML = "Laisser le chien et retourner aider l'inconnu"
        btnr.innerHTML = "enmener le chien chez le veto"; }, 5000);
    }
     else if (evil == 1 && good == 1) {
        btnl.style.display = "none"
        btnr.style.display = "none"
        vl.play()
        vl.onended = function() {
            vr.play()
            setTimeout(function() {
                vr.pause()
                btnl.style.display = "block"
            btnr.style.display = "block"
            btnl.innerHTML = "Laisser le chien et retourner aider l'inconnu"
            btnr.innerHTML = "enmener le chien chez le veto";},6000)
        }
    } else if ((evil == 0 || evil == 1) && good == 2) {
        btnl.style.display = "none"
        btnr.style.display = "none"
        vr.setAttribute("src","video/adopt.mp4")
        vr.play()
        vr.onended = function () {
            vr.setAttribute("src","video/dogadopB.mp4")
            vr.play()
            setTimeout (function (){ 
            vr.pause()   
            btnl.style.display = "block"
            btnr.style.display = "block"
            btnl.innerHTML = "Vendre à labo pour argent"
            btnr.innerHTML = "Adopter"},27000)
            }
        } else if ((evil == 0 || evil == 1) && good == 3) {
            btnl.style.display = "none"
            btnr.style.display = "none"
            vr.play()
            vr.onended = function () {
                vr.setAttribute("src","video/dogsave.mp4") 
                btnl.style.display = "block"
                btnr.style.display = "block"
                btnl.innerHTML = "Dresser pour en faire un chien de combat"
                btnr.innerHTML = "Dresser pour etre un chien de sauvetage"}
        } else if ((evil == 0 || evil == 1) && good == 4) {
            btnl.style.display = "none"
            btnr.style.display = "none"
            vr.play()
            }
    }
/* function restoreRight () {
    divr.classList.remove("rightFull")
    divr.classList.add("right")
    vr.pause();
} */
/* 
setTimeout(function(){ alert("Hello"); }, 3000); */

/* vl.onended = function () { 
    setTimeout(function(){ 
        
    
    if (evil == 1) {
        vl.setAttribute("src","video/austinpower.mp4")
        vl.play()
        vl.onended = function () {
            vl.pause()
    }
    } else if (con == 2) {

        vl.setAttribute("src","video/dogsave.mp4")
        vl.onended = function () {
            vl.pause()
    }
    } else if ( con == 3) {
        window.location.href = "modeStar.html"
    } */

    /* function restoreLeft () {
        divl.classList.remove("leftFull")
        divl.classList.add("left")
        vl.pause();
    } */