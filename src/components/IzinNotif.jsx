function RequestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Izin notifikasi diberikan!");
      }
    });
  }
}

// Panggil fungsi requestNotificationPermission() saat komponen dimuat.
export default RequestNotificationPermission