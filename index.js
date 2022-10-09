"strict mode";


document.addEventListener("keydown", function(e){
    console.log(e);

    if (e.key === "`"){
        document.getElementById("backtick").style.backgroundColor = "green";
    } else if(e.key === "1"){
        document.getElementById("one").style.backgroundColor = "green";
    }else if(e.key === "2"){
        document.getElementById("two").style.backgroundColor = "green";
    }else if(e.key === "3"){
        document.getElementById("three").style.backgroundColor = "green";
    }else if(e.key === "4"){
        document.getElementById("four").style.backgroundColor = "green";
    }else if(e.key === "5"){
        document.getElementById("five").style.backgroundColor = "green";
    }else if(e.key === "6"){
        document.getElementById("six").style.backgroundColor = "green";
    }else if(e.key === "7"){
        document.getElementById("seven").style.backgroundColor = "green";
    }else if(e.key === "8"){
        document.getElementById("eight").style.backgroundColor = "green";
    }else if(e.key === "9"){
        document.getElementById("nine").style.backgroundColor = "green";
    }else if(e.key === "0"){
        document.getElementById("zero").style.backgroundColor = "green";
    } else if(e.key === "-"){
        document.getElementById("minus").style.backgroundColor = "green";
    }else if(e.key === "="){
        document.getElementById("equal").style.backgroundColor = "green";
    }else if(e.key === "["){
        document.getElementById("squareOpen").style.backgroundColor = "green";
    }else if(e.key === "]"){
        document.getElementById("squareClose").style.backgroundColor = "green";
    }else if(e.key === "\\"){
        document.getElementById("backSlash").style.backgroundColor = "green";
    }else if(e.key === ";"){
        document.getElementById("colun").style.backgroundColor = "green";
    }else if(e.key === "'"){
        document.getElementById("quotation").style.backgroundColor = "green";
    }else if(e.key === "."){
        document.getElementById("greaterThan").style.backgroundColor = "green";
    }else if(e.key === ","){
        document.getElementById("lessThan").style.backgroundColor = "green";
    }else if(e.key === "/"){
        document.getElementById("questionMark").style.backgroundColor = "green";
    }else if(e.code === "Space"){
        document.getElementById("Space").style.backgroundColor = "green";
    } else{
        document.querySelector(`#${e.key}`).style.backgroundColor = "green";
    }
})

document.addEventListener("keyup", function(e){

    if (e.key === "`"){
        document.getElementById("backtick").style.backgroundColor = "white";
    } else if(e.key === "1"){
        document.getElementById("one").style.backgroundColor = "white";
    }else if(e.key === "2"){
        document.getElementById("two").style.backgroundColor = "white";
    }else if(e.key === "3"){
        document.getElementById("three").style.backgroundColor = "white";
    }else if(e.key === "4"){
        document.getElementById("four").style.backgroundColor = "white";
    }else if(e.key === "5"){
        document.getElementById("five").style.backgroundColor = "white";
    }else if(e.key === "6"){
        document.getElementById("six").style.backgroundColor = "white";
    }else if(e.key === "7"){
        document.getElementById("seven").style.backgroundColor = "white";
    }else if(e.key === "8"){
        document.getElementById("eight").style.backgroundColor = "white";
    }else if(e.key === "9"){
        document.getElementById("nine").style.backgroundColor = "white";
    }else if(e.key === "0"){
        document.getElementById("zero").style.backgroundColor = "white";
    } else if(e.key === "-"){
        document.getElementById("minus").style.backgroundColor = "white";
    }else if(e.key === "="){
        document.getElementById("equal").style.backgroundColor = "white";
    }else if(e.key === "["){
        document.getElementById("squareOpen").style.backgroundColor = "white";
    }else if(e.key === "]"){
        document.getElementById("squareClose").style.backgroundColor = "white";
    }else if(e.key === "\\"){
        document.getElementById("backSlash").style.backgroundColor = "white";
    }else if(e.key === ";"){
        document.getElementById("colun").style.backgroundColor = "white";
    }else if(e.key === "'"){
        document.getElementById("quotation").style.backgroundColor = "white";
    }else if(e.key === "."){
        document.getElementById("greaterThan").style.backgroundColor = "white";
    }else if(e.key === ","){
        document.getElementById("lessThan").style.backgroundColor = "white";
    }else if(e.key === "/"){
        document.getElementById("questionMark").style.backgroundColor = "white";
    }else if(e.code === "Space"){
        document.getElementById("Space").style.backgroundColor = "white";
    } else{
        document.querySelector(`#${e.key}`).style.backgroundColor = "white";
    }
})