window.onload = () => {
    var sb = document.createElement('button');
    sb.innerHTML = '&#128512';
    sb.addEventListener('click', () => {
        bal++;
    })
    var resetv = document.getElementById('reset');
    resetv.addEventListener('click', () => {
        reset();
    });
    sb.title = "Per click: 1";
    document.body.getElementsByTagName('div')[0].appendChild(sb);
    var clicker1 = document.getElementById('bal');
    var spsc = document.getElementById('spsc');
    let c2 = false;
    let c3 = false;
    let c4 = false;
    let c5 = false;
    let c6 = false;
    let c7 = false;
    let c8 = false;
    let c9 = false;
    let bal = 0;
    let sps = 0;

    load();


    function load() {
        if (localStorage.bal) {
            bal = parseFloat(localStorage.bal);
        }
        if (localStorage.sps) {
            sps = parseFloat(localStorage.sps);
        }
    }

    setInterval(gameLoop, 75);

    setInterval(ps, 1000);

    function ps () {
        bal += sps;
    }
    function gameLoop () {
        clicker1.innerHTML = formatCount(bal, true) + " &#x1F911";
        localStorage.sps = sps;
        localStorage.bal = bal;
        spsc.innerHTML = `(${formatCount(sps, true)} &#x1F911 per second)`;
        if (bal > 9 && !c2) {
            c2 = true;
            var clicker2 = document.createElement('button');
            clicker2.innerHTML = '&#128513';
            clicker2.addEventListener('click',function () {
                c2f();
            })
            clicker2.title = "Cost: 10. Per second: 1";
            document.body.getElementsByTagName('div')[0].appendChild(clicker2);
        }
        if (bal > 49 && !c3) {
            c3 = true;
            var clicker3 = document.createElement('button');
            clicker3.innerHTML = '&#128517';
            clicker3.addEventListener('click',function () {
                c3f();
            })
            clicker3.title = "Cost: 50. Per second: 5";
            document.body.getElementsByTagName('div')[0].appendChild(clicker3);
        }
        if (bal > 99 && !c4) {
            c4 = true;
            var clicker4 = document.createElement('button');
            clicker4.innerHTML = '&#128514';
            clicker4.addEventListener('click',function () {
                c4f();
            })
            clicker4.title = "Cost: 100. Per second: 15";
            document.body.getElementsByTagName('div')[0].appendChild(clicker4);
        }
        if (bal > 249 && !c5) {
            c5 = true;
            var clicker5 = document.createElement('button');
            clicker5.innerHTML = '&#129315';
            clicker5.addEventListener('click',function () {
                c5f();
            })
            clicker5.title = "Cost: 250. Per second: 30";
            document.body.getElementsByTagName('div')[0].appendChild(clicker5);
        }
        if (bal > 499 && !c6) {
            c6 = true;
            var clicker6 = document.createElement('button');
            clicker6.innerHTML = '&#129322';
            clicker6.addEventListener('click',function () {
                c6f();
            })
            clicker6.title = "Cost: 500. Per second: 75";
            document.body.getElementsByTagName('div')[0].appendChild(clicker6);
        }
        if (bal > 999 && !c7) {
            c7 = true;
            var clicker7 = document.createElement('button');
            clicker7.innerHTML = '&#128541';
            clicker7.addEventListener('click',function () {
                c7f();
            })
            clicker7.title = "Cost: 1000. Per second: 100";
            document.body.getElementsByTagName('div')[0].appendChild(clicker7);
        }
        if (bal > 4999 && !c8) {
            c8 = true;
            var clicker8 = document.createElement('button');
            clicker8.innerHTML = '&#128536';
            clicker8.addEventListener('click',function () {
                c8f();
            })
            clicker8.title = "Cost: 5000. Per second: 250";
            document.body.getElementsByTagName('div')[0].appendChild(clicker8);
        }
        if (bal > 14999 && !c9) {
            c9 = true;
            var clicker9 = document.createElement('button');
            clicker9.innerHTML = '&#128525';
            clicker9.addEventListener('click',function () {
                c9f();
            })
            clicker9.title = "Cost: 15000. Per second: 1000";
            document.body.getElementsByTagName('div')[0].appendChild(clicker9);
        }
    }

    function c2f() {
        if (bal >= 10) {
            bal -= 10;
            sps++;
        }
    }

    function c3f() {
        if (bal >= 50) {
            bal -= 50;
            sps += 5;
        }
    }
    function c3f() {
        if (bal >= 50) {
            bal -= 50;
            sps += 5;
        }
    }
    function c4f() {
        if (bal >= 100) {
            bal -= 100;
            sps += 15;
        }
    }
    function c5f() {
        if (bal >= 250) {
            bal -= 250;
            sps += 30;
        }
    }
    function c6f() {
        if (bal >= 500) {
            bal -= 500;
            sps += 75;
        }
    }
    function c7f() {
        if (bal >= 1000) {
            bal -= 1000;
            sps += 100;
        }
    }
    function c8f() {
        if (bal >= 5000) {
            bal -= 5000;
            sps += 250;
        }
    }
    function c9f() {
        if (bal >= 15000) {
            bal -= 15000;
            sps += 1000;
        }
    }
    function reset() {
        if (!confirm('Are you sure you want to reset?')) return;
        localStorage.clear;
        bal = 0;
        sps = 0;
        document.location.reload();
    }
}

var suffixes = ['',' thousand',' million',' billion',' trillion',' quadrillion',' quintillion',' sextillion',' septillion',' octillion',' nonillion',' decillion',' vigintillion',' trigintillion',' quadragintillion',' quinquagintillion',' sexagintillion',' septuagintillion',' octogintillion',' nonagintillion'];

function formatCount(count, withAbbr = false, decimals = 1) {
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals)).toLocaleString('en-US');
    if(withAbbr) {
        result += `${suffixes[i]}`; 
    }
    return result;
}