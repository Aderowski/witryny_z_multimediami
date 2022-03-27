function play(bohater){
    switch(bohater){
        case "ahri": audio = document.getElementById("ahri-voice"); break;
        case "aphelios": audio = document.getElementById("aphelios-voice"); break;
        case "garen": audio = document.getElementById("garen-voice"); break;
        case "jhin":  audio = document.getElementById("jhin-voice"); break;
        case "katarina":  audio = document.getElementById("katarina-voice"); break;
        case "lux":  audio = document.getElementById("lux-voice"); break;
        case "nasus":  audio = document.getElementById("nasus-voice"); break;
        case "rammus":  audio = document.getElementById("rammus-voice"); break;
        case "teemo":  audio = document.getElementById("teemo-voice"); break;
        case "yasuo":  audio = document.getElementById("yasuo-voice"); break;
    }
    audio.play();
}