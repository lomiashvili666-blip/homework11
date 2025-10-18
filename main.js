// const fs = require("fs")
// const https = require("https")

// https.get("https://jsonplaceholder.typicode.com/users", (res) => {
//     let data = ""

//     res.on("data", chunk => data += chunk)
//     res.on("end", () => {
//         const users = JSON.parse(data).map(u => ({
//             id: u.id,
//             name: u.name,
//             username: u.username,
//             email: u.email
//         }))

//         fs.writeFileSync("users.json", JSON.stringify(users, null, 2))
//         console.log("მონაცემები ჩაიწერა users.json ფაილში!!!!!")
//     });
// }).on("error", (err) => {
//     console.error("შეცდომაა:", err.message)
// })
//მაგრა ვწვალობ ამეებზე




// const fs = require('fs')
// const path = require('path')
// const { json } = require('stream/consumers')

// const filePath = path.join(__dirname, "contacts.json")




// //წაკითხვა კონტარქტის
// function readContacts() {
//     if (!fs.existsSync(filePath)) return []
//     const data = fs.readFileSync(filePath, "utf-8")
//     try {
//         return JSON.parse(data)
//     } catch {
//         return []
//     }
// }
// function saveContacts(contacts) {
//     fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2))
// }



// //კონტაქტის ბაზაში დამატება
// function addContact(number, name) {
//     if (!number || !name) {
//         console.log('სწორი ფორმატი: node phone.js add <number> <name>')
//         return
//     }
//     const contacts = readContacts()
//     if (contacts.find(c => c.number === number)) {
//         console.log('ეს ნომერი უკვე არსებობს!!!!')
//         return
//     }
//     contacts.push({ number, name })
//     saveContacts(contacts)
//     console.log('კონტაქტი დაემატა:', number, name)
// }


// function deleteContact(number) {
//     if (!number) {
//         console.log('სწორი ფორმატი: node phone.js delete <number>')
//         return
//     }
//     let contacts = readContacts()
//     const newContacts = contacts.filter(c => c.number !== number)
//     if (newContacts.length === contacts.length) {
//         console.log('ნომერი ვერ მოიძებნა:', number)
//         return
//     }
//     saveContacts(newContacts)
//     console.log('ნომერი წაშლილია:', number)
// }

// function showContacts() {
//     const contacts = readContacts()
//     if (contacts.length === 0) {
//         console.log('კონტაქტები არ არის')
//         return
//     }
//     console.log('ყველა კონტაქტი:')
//     contacts.forEach(c => console.log(`${c.name}: ${c.number}`))
// }


// // CLI toool ის აწყობა
// const [, , command, arg1, arg2] = process.argv;

// switch (command) {
//     case 'add':
//         addContact(arg1, arg2)
//         break
//     case 'delete':
//         deleteContact(arg1)
//         break
//     case 'show':
//         showContacts()
//         break
//     default:
//         console.log('კომანდები: add <number> <name>, delete <number>, show')
// }

//ჯპტ ვიხმარებ ამეებზე



// const fs = require('fs')
// const path = require('path')

// const filePath = path.join(__dirname, 'cars.json')





// function readCars() {
//     if (!fs.existsSync(filePath)) return []
//     try {
//         return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
//     } catch {
//         return []
//     }
// }




// function saveCars(cars) {
//     fs.writeFileSync(filePath, JSON.stringify(cars, null, 2))
// }




// function addCar(name, year, color) {
//     if (!name || !year || !color) {
//         console.log('სწორი ფორმატი: node car.js <carName> <year> <color>')
//         return
//     }
//     const cars = readCars()
//     cars.push({
//         carName: name,
//         carReleaseDate: year,
//         carColor: color
//     });
//     saveCars(cars)
//     console.log('მანქანა დაემატა:', name, year, color)
// }




// function showCars(filter) {
//     const cars = readCars()
//     const filtered = cars.filter(c => c.carReleaseDate === filter || c.carColor === filter)
//     if (filtered.length === 0) return console.log('მანქანები ვერ მოიძებნა')
//     filtered.forEach(c => console.log(`${c.carName} - ${c.carReleaseDate} - ${c.carColor}`))
// }


// const [, , arg1, arg2, arg3] = process.argv

// if (arg1 === 'show' && arg2) {
//     showCars(arg2)
// } else {
//     addCar(arg1, arg2, arg3)
// }

////////////

// const fs = require('fs');


// const text = "დათო დიასამიძე გაციებულია"


// fs.writeFileSync('random.txt', text)


// const content = fs.readFileSync('random.txt', 'utf-8')


// let wordCount = 0
// let inWord = false
// for (let i = 0; i < content.length; i++) {
//     const c = content[i]
//     if (c !== ' ' && c !== '\n' && c !== '\t') {
//         if (!inWord) {
//             wordCount++
//             inWord = true
//         }
//     } else {
//         inWord = false
//     }
// }


// const vowelsArray = ['ა', 'ე', 'ი', 'ო', 'უ']
// let vowelCount = 0
// for (let i = 0; i < content.length; i++) {
//     if (vowelsArray.includes(content[i])) {
//         vowelCount++
//     }
// }


// let charCount = 0
// for (let i = 0; i < content.length; i++) {
//     if (content[i] !== ' ' && content[i] !== '\n' && content[i] !== '\t') {
//         charCount++
//     }
// }


// const result = {
//     word: wordCount,
//     vowel: vowelCount,
//     chars: charCount
// }

// fs.writeFileSync('result.json', JSON.stringify(result, null, 2))

// console.log('მოქმედება დასრულდა. გადაამოწმეთ result.json ფაილი.')
