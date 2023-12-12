window.addEventListener("load", function(){
    var date = new Date();

    var time = date.getHours();
    var elem = document.querySelector(".DnD-container");

    if(6 <= time && time < 10){ 
        elem.style.background = "aliceblue";
    }
    else if(10 <= time && time < 16){
        elem.style.background = "#404040";
        elem.style.color = "white";
    }
    else if(16 <= time && time < 20){
        elem.style.background = "#D2A298";
        elem.style.color = "white";
    }
    else if(20 <= time && time < 24){
        elem.style.background = "#A8B9D4";
    }
    else if(0 <= time && time < 6){
        elem.style.background = "#D7D3F1";
    }

    var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");

            ctx.beginPath();
            ctx.arc(125, 50, 40, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.font = "25px Arial";
            ctx.fillText("Star awarded to us", 10, 110);
            ctx.fillText("\u00C7far\u00EB Na \u00CBsht\u00EB Dhuruar:", 10, 135);

            function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
                var rot = Math.PI / 2 * 3;
                var x = cx;
                var y = cy;
                var step = Math.PI / spikes;

                ctx.strokeSyle = "#000";
                ctx.beginPath();
                ctx.moveTo(cx, cy - outerRadius)
            
                for (i = 0; i < spikes; i++) {
                    x = cx + Math.cos(rot) * outerRadius;
                    y = cy + Math.sin(rot) * outerRadius;
                    ctx.lineTo(x, y)
                    rot += step

                    x = cx + Math.cos(rot) * innerRadius;
                    y = cy + Math.sin(rot) * innerRadius;
                    ctx.lineTo(x, y)
                    rot += step
                }

                ctx.lineTo(cx, cy - outerRadius)
                ctx.closePath();
                ctx.lineWidth=5;
                ctx.strokeStyle='yellow';
                ctx.stroke();
                ctx.fillStyle='lightyellow';
                ctx.fill();
            }

            drawStar(125, 50, 5, 30, 15);

            let c1 = document.getElementById('myCanvas2');
            let ctxx = c1.getContext('2d');

            var grd = ctxx.createLinearGradient(0, 0, 200, 0);
            grd.addColorStop(0, "orange");
            grd.addColorStop(1, "white");

            ctxx.fillStyle = grd;
            ctxx.fillRect(0, 0, 250, 150);

            let newImage = new Image();
            newImage.src = './assets/images/aba.png';

            newImage.onload = () => {
                ctxx.drawImage(newImage, 50, 50, 150, 50);
            }
});
