const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const photo = document.getElementById("photo");

    let currentStream;
    let currentDeviceId = 'front'; // default to front camera

    // Get access to the camera
    async function startCamera(deviceId = null) {
      try {
        const constraints = {
          video: {
            facingMode: deviceId === 'back' ? { exact: 'environment' } : { exact: 'user' },
          },
        };

        if (currentStream) {
          currentStream.getTracks().forEach(track => track.stop()); // Stop any active stream
        }

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        currentStream = stream;
        video.srcObject = stream;
      } catch (err) {
        alert("Unable to access the camera: " + err);
      }
    }

    // Capture the current video frame and display it as an image
    document.getElementById("capture").addEventListener("click", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      photo.src = dataUrl;
      photo.style.display = "block";
    });

    // Switch between the front and back camera
    document.getElementById("toggle-camera").addEventListener("click", () => {
      currentDeviceId = currentDeviceId === 'front' ? 'back' : 'front';
      startCamera(currentDeviceId);
    });

    // Save the captured photo to disk
    document.getElementById("save").addEventListener("click", () => {
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "captured-photo.png";
      a.click();
    });

    // Start the camera when the page loads
    window.onload = startCamera(currentDeviceId);