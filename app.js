var ho = document.getElementById('ho');
var me = document.getElementById('me');
var sec = document.getElementById('sec');

let jsHo = 0;
let jsMe = 0;
let jsSec = 0;
let a = null;

function start() {
    if (a !== null) return; 

    a = setInterval(() => {
        jsSec++;

        if (jsSec == 60) {
            jsSec = 0;
            jsMe++;
            
            if (jsMe == 60) {
                jsMe = 0;
                jsHo++;
            }

            me.innerHTML = jsMe;
            ho.innerHTML = jsHo;
        }

        sec.innerHTML = jsSec;

    }, 1000);
}

function stop() {
    clearInterval(a);
    a = null;
}

function reset() {
    clearInterval(a);
    a = null;
    jsHo = 0;
    jsMe = 0;
    jsSec = 0;
    ho.innerHTML = 0;
    me.innerHTML = 0;
    sec.innerHTML = 0;
}
