const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 100; i++){
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  for(let p of particles){
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,136,0.7)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if(p.x < 0 || p.x > w) p.dx *= -1;
    if(p.y < 0 || p.y > h) p.dy *= -1;
  }
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

 