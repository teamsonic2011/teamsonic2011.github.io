
    async function checkStatus() {
      const urlParams = new URLSearchParams(window.location.search);
      const isAdmin = urlParams.get('admin');

      if (isAdmin !== 'true') {
        try {
          const response = await fetch('/down.vari');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const status = await response.text();
          if (status.trim() === '1') {
            window.location.href = '/maintenance.html';
          }
        } catch (error) {
          console.error('Error fetching status:', error);
        }
      }
    }

    checkStatus();
