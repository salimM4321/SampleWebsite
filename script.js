const countdown = () => {
    const targetDate = new Date("2023-12-31T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    };
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  };
  
  countdown();