//1. Buatlah function expression yang bertugas untuk menambahkan data diatas

//jawaban:

const jalankanData = function(array, newData) {
    array.push(newData);
    return array;
};

//contoh cara penggunaannya

let users1 = [
    { id: 1, username: 'prabu2006', email: 'prabu2006@gmail.com', hoby: 'ngegame' },
    { id: 2, username: 'kimjongun', email: 'kimjongun@gmail.com', hoby: 'main rudal' },
    { id: 3, username: 'vladimirussr', email: 'vladimirussr@gmail.com', hoby: 'perang' }
];

const prabuNew = { id: 4, username: 'prabuNew', email: 'prabuNew@gmail.com', hoby: 'drawing' };

let updatedUsers1= jalankanData(users1, prabuNew);
console.log(updatedUsers1);

//2. Tambahkan properti role dengan value 'user' pada objek dari data array diatas
// jawaban:

let users2 = [
    { id: 1, username: 'jokowi1970', email: 'jokowi1972@gmail.com', hoby: 'mainps' },
    { id: 2, username: 'prabowo1965', email: 'prabowo1965@gmail.com', hoby: 'tembak-tembakan' },
    { id: 3, username: 'megawati1960', email: 'megawati1960@gmail.com', hoby: 'ngetrill' }
];

const updatedUsers2 = users2.map(user => {
    return {
        ...user,
        role: 'user'
    };
});

console.log(updatedUsers2);

//3 Diketahui sebuah segitiga memiliku alas 4 dan tinggi 3, buatlah function yang bertugas untuk menghitung luas segitiga
// note Rumus Luas Segetiga = 1/2 X alas X tinggi atau (alas X tinggi) / 2

//jawaban:

function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

const alas = 4;
const tinggi = 3;
const luas = hitungLuasSegitiga(alas, tinggi);

console.log('Luas segitiga =', luas);

//Luas segitiga = 6

//ini kerana luas segitiga dengan 4 dan tinggi 3 adalah; ukuran 4 x 3 per _ 2 = 6


//4. Tukar nilai data dari variabel yang tersedia

//jawabsn

function test() {
    let a = 1;
    let b = 2;

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    // Swap values
    let temp = a;
    a = b;
    b = temp;

    console.log('a final = ', a);
    console.log('b final = ', b);
}

test();

//a awal =  1
//b awal =  2
//a final =  2
//b final =  1

//5. Buatlah fungsi untuk melakukan pengecekan terhadap sebuah string bernilai palindrome atau tidak.
// note: Palindrome adalah kata, frasa, angka, atau urutan karakter yang dapat dibaca sama dari depan maupun belakang. Contoh yang paling sederhana adalah kata "malam" atau "level"

//jawban;

//belum di bahas