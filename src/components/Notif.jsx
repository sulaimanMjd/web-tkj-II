function CreateNotification() {
  if ("Notification" in window && Notification.permission === "granted") {
    const notification = new Notification("Judul Notifikasi", {
      body: "Ini adalah pesan notifikasi.",
    });

    // Anda dapat menambahkan logika lain di sini untuk menangani notifikasi.
  }
}

// Panggil fungsi createNotification() ketika Anda ingin membuat notifikasi.
export default CreateNotification