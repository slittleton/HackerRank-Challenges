let myArr = [1,2,3,4,5]

// ------------- PROMISE -------------
let prom = new Promise((resolve,reject)=> {
  setTimeout(()=> resolve(myArr), 300)
})

prom
  .then((item)=>{ console.log(item)}) // [1,2,3,4,5]

console.log('?????',prom) // ?????, Promise {<pending>}


const url = `https://pokeapi.co/api/v2/pokemon/pikachu/`

// -------- PROMISE USING FETCH ----------
// Use fetch() to return a promise
let x = fetch(url)
let y;
x
  .then(res=>res.json()) //resolves response into promise
  .then(res => y = res) // gives variable y the values held in the returned promise
  .catch(err=>console.log(err))

 setTimeout(()=> console.log(y.species), 500) 
// returns {name: pikachu} because the setTimeout() gave enough time
// for the api to return a value

console.log(y)  // undefined because it ran before data was received from api


// ---------- ASYNC AWAIT ----------------
// Use async await to return promise
let getthings = async() => {
 try{
  let z = await fetch(url) // waits for data to come back from api
  
  z
  .json() // resovles data into promise
  .then(x=>console.log(x.species.name)) //=> pikachu,  handles promise once it is received
 } catch(err){
   console.log('My Problem Message: ', err)
 }
 


}
getthings();