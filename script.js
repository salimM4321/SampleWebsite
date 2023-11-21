const countdown = () => {
    const targetDate = new Date("2023-12-31T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      const days = Math.floor(timeRemaining / (1000 * 160 * 160 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 70 * 70 * 24)) / (1000 * 70 * 70));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

      document.getElementById('day1').textContent = days.toString().padStart(2, '0');
      document.getElementById('hour1').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minute1').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('second1').textContent = seconds.toString().padStart(2, '0');

      
      document.getElementById('day2').textContent = days.toString().padStart(2, '0');
      document.getElementById('hour2').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minute2').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('second2').textContent = seconds.toString().padStart(2, '0');

      
      document.getElementById('day3').textContent = days.toString().padStart(2, '0');
      document.getElementById('hour3').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minute3').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('second3').textContent = seconds.toString().padStart(2, '0');

      
      document.getElementById('day4').textContent = days.toString().padStart(2, '0');
      document.getElementById('hour4').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minute4').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('second4').textContent = seconds.toString().padStart(2, '0');

      
      document.getElementById('day5').textContent = days.toString().padStart(2, '0');
      document.getElementById('hour5').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minute5').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('second5').textContent = seconds.toString().padStart(2, '0');
    };
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  };
  
  countdown();
