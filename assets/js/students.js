let girlsList = document.querySelector('.girls');
let manList = document.querySelector('.man');
let girls = document.querySelector('.girlslist ol');

let students = [
  {
      id: 1,
      name: "Arda",
      lastname: "Toraman",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Aysu",
      lastname: "Aşçı",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Berat",
      lastname: "Dimen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Berk",
      lastname: "Uçar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Doğa",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Doğukan",
      lastname: "Sarı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Ece",
      lastname: "Ceylan",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Emre",
      lastname: "Özçalkap",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Fatih Can",
      lastname: "Kaya",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Furkan",
      lastname: "Coşar",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Gökhan",
      lastname: "Ünlü",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 12,
      name: "Halil İbrahim",
      lastname: "Korkmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 13,
      name: "Kemal",
      lastname: "Özalp",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 14,
      name: "Kerem",
      lastname: "Kaçmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 15,
      name: "Melek",
      lastname: "Dal",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 16,
      name: "Muhammed Baki",
      lastname: "Çağlayan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 17,
      name: "Muhammed",
      lastname: "Yazıcı",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 18,
      name: "Muhammet Hasan",
      lastname: "Türkmen",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 19,
      name: "Ömer",
      lastname: "Fırat",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 20,
      name: "Sema",
      lastname: "Bekdemir",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 21,
      name: "Sıla",
      lastname: "Kara",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 22,
      name: "Sudenur",
      lastname: "Taştekin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 23,
      name: "Tunahan",
      lastname: "Orak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];

let girlsCount = document.querySelector('.girlsCount');
let mansCount = document.querySelector('.manCount');

let girlsCounter = 0;
let mansCounter = 0;

for(let i = 0; i < students.length; i++) {
  if(students[i].gender === 'Kadın' ) {
    girlsList.innerHTML += '<li>' + 'id: ' + students[i].id + '<br>' + 'Ad: ' + students[i].name + '<br>' +
    'Soyad: ' +  students[i].lastname + '<br>' + 'Cinsiyet: ' +  students[i].gender + '<br>' +
    'Bölüm: ' + students[i].section + '<br>' + 'Rol: ' + students[i].role + '</li>';
    girlsCounter++;
  }
  else if(students[i].gender === 'Erkek') {
    manList.innerHTML += '<li>' + 'id: ' + students[i].id + '<br>' + 'Ad: ' + students[i].name + '<br>' +
    'Soyad: ' +  students[i].lastname + '<br>' + 'Cinsiyet: ' + students[i].gender + '<br>' + 
    'Bölüm: ' + students[i].section + '<br>' + 'Rol: ' + students[i].role + '</li>';
    mansCounter++;
  }
  
}
girlsCount.innerHTML += girlsCounter;
mansCount.innerHTML += mansCounter;


