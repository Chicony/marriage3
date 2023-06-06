window.onload = function() {
    let countDownDate = new Date("Jule 22, 2023 16:30:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let week = Math.floor(distance / (1000 * 60 * 60 * 24) / 7);
        let days = Math.floor((distance / (1000 * 60 * 60 * 24)) % 7);
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (week < 10) week = '0' + week;
        if (days < 10) days = '0' + days;
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        
        document.getElementById("timer").innerHTML =
        `<div class="box">
          <div class="number">${week}</div>
          <div class="text">недель</div>
        </div>
        <div class="box">
          <div class="number">${days}</div>
          <div class="text">дней</div>
        </div>
        <div class="box">
          <div class="number">${hours}</div>
          <div class="text">часов</div>
        </div>
        <div class="box">
          <div class="number">${minutes}</div>
          <div class="text">минут</div>
        </div>
        <div class="box">
          <div class="number">${seconds}</div>
          <div class="text">секунд</div>
        </div>`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML =
                `<div class="box">
                  <div class="number">0</div>
                  <div class="text">недель</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">дней</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">часов</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">минут</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">секунд</div>
                </div>`;
        }
    }, 1000);
};