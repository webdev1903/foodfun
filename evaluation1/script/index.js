document.querySelector("#menu").addEventListener("onclick",menu);

async function menu(){
    let url = "www.themealdb.com/api/json/v1/1/random.php";
    let api = await fetch(url);
    let res = await api.json();
    console.log(res);
}