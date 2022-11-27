
let number = document.querySelector(".number");
let submit = document.querySelector(".submit");
let tipecolor = {
    normal:["ノーマル","#A8A878"],
    fire:["ほのお","#F08030"],
    water:["みず","#6890F0"],
    grass:["くさ","#78C850"],
    electric:["でんき","#F8D030"],
    ice:["こおり","#98D8D8"],
    fighting:["かくとう","#C03028"],
    poison:["どく","#A040A0"],
    ground:["じめん","#E0C068"],
    flying:["ひこう","#A890F0"],
    psychic:["エスパー","#F85888"],
    bug:["むし","#A8B820"],
    rock:["いわ","#B8A038"],
    ghost:["ゴースト","#705898"],
    dragon:["ドラゴン","#7038F8"],
    dark:["あく","#705848"],
    steel:["はがね","#B8B8D0"],
    fairy:["フェアリー","#EE99AC"],
};
let list = document.querySelector(".pokemonlist");
let ul = document.createElement("ul");

console.log(list)
for (let i = 1;i<899;i++){
    const listurl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
    let li = document.createElement("li");
    li.classList.add("pokelist")
    let link = document.createElement("a");
    let listimg = document.createElement("img");
    let p = document.createElement("p");
    fetch(listurl)
    .then(function(response){
        return response.json();
    })
    .then(function(list){
        let listname = list.name;
        let nameurl = list.species.url;
        listimg.setAttribute("src",list.sprites.front_default)
        fetch(nameurl)
        .then(function(pname){
            return pname.json();
        })
        .then(function(namedate){
            // console.log(namedate.names[0])
            let japanname = namedate.names[0].name;
            p.innerHTML = japanname
            
        })
        li.appendChild(p);
        li.appendChild(listimg)
        ul.appendChild(li)

    })
}
list.appendChild(ul)


submit.addEventListener("click",function(){
    let pokenumber = number.value;
    let namenumber = pokenumber -1;
    
    console.log(namenumber)
    console.log(pokenumber);
    // let janame = pokemonname[namenumber]["ja"]
    let janame = pokemonname[namenumber]["ja"]
    const url = `https://pokeapi.co/api/v2/pokemon/${pokenumber}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(deta){
        let nameurls = deta.species.url;
        console.log(nameurls)
        fetch(nameurls)
        .then(function(responsename){
            return responsename.json();
        })
        .then(function(nadeta){
            let japanname = nadeta.names[0].name;
            name.innerHTML = japanname
        })
        let name = document.querySelector(".pokemon_name");
        let img = document.querySelector(".pokemon_img");
        img.setAttribute("src",deta.sprites.front_default);
        let ul = document.querySelector(".pokemon_type");
        ul.innerHTML = "";
        for(let i = 0;i<deta.types.length;i++){
            let li = document.createElement("li");
            let colorname= deta.types[i].type.name;
            console.log(colorname);
            li.innerHTML = tipecolor[colorname][0];
            li.setAttribute("style","background-color:"+tipecolor[colorname][1])
            ul.appendChild(li);
        }
    })
})
