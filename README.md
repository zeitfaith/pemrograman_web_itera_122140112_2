# Personal Dashboard - Jadwal Kuliah

## Penjelasan Singkat

Aplikasi Personal Dashboard - Jadwal Kuliah adalah aplikasi web sederhana yang dirancang untuk membantu pengguna mengatur dan melihat jadwal kuliah mingguan mereka. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, dan menghapus mata kuliah atau sesi kelas dari jadwal mereka. Data jadwal disimpan secara lokal di peramban menggunakan Local Storage, sehingga data akan tetap ada meskipun peramban ditutup.

## Fitur-fitur

* **Menampilkan Jadwal Mingguan:** Menampilkan daftar mata kuliah atau sesi kelas yang telah ditambahkan.
* **Menambah Kelas Baru:** Pengguna dapat menambahkan kelas baru ke jadwal dengan informasi nama kelas, hari, waktu mulai, dan waktu selesai.
* **Mengedit Kelas:** Pengguna dapat mengubah detail informasi kelas yang sudah ada.
* **Menghapus Kelas:** Pengguna dapat menghapus kelas tertentu dari jadwal.
* **Penyimpanan Lokal:** Data jadwal disimpan secara lokal menggunakan Local Storage, memungkinkan akses data tanpa koneksi internet dan data tetap ada di peramban pengguna.
* **Tampilan Responsif:** Desain antarmuka yang sederhana dan responsif.
* **Header Selamat Datang:** Menampilkan sapaan "Welcome User" di bagian atas dashboard.

## Screenshot Aplikasi

Berikut adalah tampilan screenshot aplikasi yang sudah jadi:

![Screenshot Aplikasi Personal Dashboard - Jadwal Kuliah] C:\Users\hanba\Desktop\Muhammad Fatih Hanbali_122140112_pertemuan2\image.png


## Fitur ES6+ yang Diimplementasikan

Aplikasi ini memanfaatkan beberapa fitur ECMAScript 2015 (ES6) dan yang lebih baru untuk penulisan kode yang lebih modern dan ringkas:

* **`import` dan `export` (Modul):** Digunakan untuk mengorganisir kode ke dalam modul-modul terpisah (`app.js` dan `schedule.js`) dan mengelola dependensi antar file.
* **`class`:** Sintaks `class` digunakan untuk membuat struktur objek `ScheduleManager` yang mengelola data jadwal dan logika terkait.
* **Arrow Functions (`=>`):** Ekspresi fungsi panah digunakan untuk penulisan fungsi yang lebih ringkas, terutama untuk fungsi-fungsi sederhana seperti rendering item daftar dan *event listeners*. Contoh:
    ```javascript
    const renderClassItem = (kelas) => `...`;
    ```
* **`const` dan `let`:** Deklarasi variabel menggunakan `const` untuk variabel yang nilainya tidak akan diubah dan `let` untuk variabel yang nilainya mungkin diubah, menggantikan penggunaan `var` untuk cakupan yang lebih jelas.
* **Template Literals (`` ` ``):** Digunakan untuk membuat string dengan interpolasi variabel yang lebih mudah dibaca dan ditulis, terutama dalam fungsi `renderClassItem`. Contoh:
    ```javascript
    `<div class="class-item" data-id="${kelas.id}">...</div>`
    ```
* **Async/Await (`async`, `await`):** Meskipun dalam aplikasi ini penyimpanan ke Local Storage bersifat sinkron, sintaks `async/await` digunakan untuk mensimulasikan operasi asinkron (misalnya, untuk demonstrasi atau potensi integrasi dengan backend di masa depan) dalam fungsi seperti `handleFormSubmit`, `handleEditClick`, dan `handleDeleteClick`.
* **Default Parameters:** Digunakan dalam fungsi seperti `openModal` untuk memberikan nilai default pada parameter `kelas` jika tidak ada argumen yang diberikan. Contoh:
    ```javascript
    const openModal = (kelas = null) => { ... };
    ```
* **Spread Syntax (`...`):** Digunakan untuk menggabungkan properti objek saat menambahkan atau memperbarui kelas dalam `ScheduleManager`. Contoh:
    ```javascript
    this.schedule.push({ id: Date.now(), ...newClass });
    this.schedule[index] = { id: parseInt(id), ...updatedClass };
    ```

---

Dibuat dengan ❤️ oleh Muhammad Fatih Hanbali