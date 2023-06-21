function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');

    var gabungan = 'Nama%20%3A%20' + nama.value + '%0ANo%20Hp%20%3A%20' + email.value;

    var token = '6281444455:AAFgSqqNWZTjwLFMgEER0Xsy0zKtEHdrgt8'; // Ganti dengan token bot yang kamu buat
    var grup = '5870544361'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}