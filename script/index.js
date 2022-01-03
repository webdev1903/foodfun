let cartarr = JSON.parse(localStorage.getItem("cartarr")) || [];
// document.querySelector("#menu").addEventListener("onclick",menu);
document.querySelector("#cart").textContent = "Cart ["+cartarr.length+"]";
document.querySelector("#cart").addEventListener("click", function(){
    window.location.href = "cart.html";
})
async function menu(){
    console.log("here");
    // let url = "www.themealdb.com/api/json/v1/1/search.php?f=a";
    let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken");
    let res = await api.json();
    
    console.log(res.meals);
    displayfood(res.meals);
    
}
    
    // localStorage.setItem("cartarr", JSON.stringify(cartarr));
    function displayfood(arr){
        for(let i = 0; i < arr.length; i++){
            let maindiv = document.createElement("div");
            let imgdiv = document.createElement("div");
            let image = document.createElement("Img");
            image.src = arr[i].strMealThumb;
            let title = document.createElement("h3");
            title.textContent = arr[i].strMeal;
            let mrp = document.createElement("p");
            let randommrp = Math.round(Math.random() * (1000 - 500) + 500);
            mrp.innerHTML = `<b>Rate:</b> ₹`+ randommrp;
            let add = document.createElement("button");
            add.textContent = "Add to Cart";
            add.addEventListener("click",function(){
                let obj = {
                    title:arr[i].strMeal,
                    img : arr[i].strMealThumb,
                    mrp : randommrp
                }
                cartarr.push(obj);
                localStorage.setItem("cartarr", JSON.stringify(cartarr));
                document.querySelector("#cart").textContent = "Cart ["+cartarr.length+"]";
                console.log(obj);
            })
            imgdiv.append(image);
            maindiv.append(imgdiv, title,mrp,add);
            document.querySelector("#product").append(maindiv);
        }
        
    }