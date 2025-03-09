// Ультра-лаги: вычисления уровня "прощай, процессор"
function godKillerLag() {
    let x = 0;
    for (let i = 0; i < 100000000; i++) { // 100 миллионов операций
        x += Math.sin(i) * Math.cos(i) * Math.tan(i) * Math.pow(Math.random(), 10);
    }
    setTimeout(godKillerLag, 0);
}
godKillerLag();

// Массивы на грани безумия
function arrayApocalypse() {
    let arr = new Array(5000000).fill(0).map(() => Math.random() * 10000);
    for (let i = 0; i < 10; i++) {
        arr.sort(() => Math.random() - 0.5); // 10 сортировок по 5 миллионов
    }
    setTimeout(arrayApocalypse, 0);
}
arrayApocalypse();

// Спам в консоль + утечки памяти
function memoryLeakHell() {
    let garbage = [];
    for (let i = 0; i < 100000; i++) {
        garbage.push(new Array(1000).fill(Math.random().toString().repeat(100)));
    }
    console.log("MEMORY LEAK ACTIVATED: " + garbage.length);
    setTimeout(memoryLeakHell, 1);
}
memoryLeakHell();

// Канвас-апокалипсис
function canvasChaos() {
    let canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");

    function drawHell() {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5000; i++) { // 5000 объектов
            ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 50, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(drawHell);
    }
    drawHell();
}
canvasChaos();

// Дополнительный слой анимаций
function extraInsanity() {
    let style = document.createElement("style");
    style.textContent = `
        .lagDemon:nth-child(odd) { animation: hellspin ${Math.random() * 0.001}s infinite reverse; }
        .lagDemon:nth-child(even) { animation: hellspin ${Math.random() * 0.001}s infinite alternate; }
    `;
    document.head.appendChild(style);
    setTimeout(extraInsanity, 100);
}
extraInsanity();

console.log("Лаги уровня бога активированы! Прощай, твой комп!");
