// Мега-лаги: вычисления и хаос
function ultraLag() {
    let x = 0;
    for (let i = 0; i < 50000000; i++) { // 50 миллионов операций
        x += Math.sin(i) * Math.cos(i) * Math.tan(i) + Math.random();
    }
    setTimeout(ultraLag, 0);
}
ultraLag();

// Массивы и сортировки
function arrayHell() {
    let arr = new Array(2000000).fill(0).map(() => Math.random() * 1000);
    arr.sort(() => Math.random() - 0.5); // Хаотичная сортировка
    setTimeout(arrayHell, 0);
}
arrayHell();

// Бесконечный спам в консоль
function consoleSpam() {
    console.log("LAG LAG LAG" + Math.random().toString().repeat(1000));
    setTimeout(consoleSpam, 1);
}
consoleSpam();

// Дополнительные анимации
function moreChaos() {
    let canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");
    
    function draw() {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 1000; i++) {
            ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
            ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
        }
        requestAnimationFrame(draw);
    }
    draw();
}
moreChaos();

console.log("Лаги активированы, братан! Твой комп сейчас взорвётся!");
