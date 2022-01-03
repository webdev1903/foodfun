let sum = 0;
    let cartarr = JSON.parse(localStorage.getItem("cartarr"));
    let total = document.createElement("p");
    total.textContent = "Total Amount: "+sum;
    let checkoutbutton = document.createElement("button");
    checkoutbutton.textContent = "Checkout";
    checkoutbutton.addEventListener("click",checkout);
    document.querySelector("#total").append(total,checkoutbutton);
    displaycart(cartarr);
    function displaycart(arr){
        sum = 0;
        arr.map(function(elem,index){
            let maindiv = document.createElement("div");
            let imgdiv = document.createElement("div");
            let image = document.createElement("Img");
            image.src = elem.img;
            let title = document.createElement("h3");
            title.textContent = elem.title;
            let mrp = document.createElement("p");
            mrp.textContent = elem.mrp;
            sum += +(elem.mrp);
            let rem = document.createElement("button");
            rem.textContent = "Remove";
            rem.addEventListener("click",function(){
                // let i = index;
                // console.log(i);
                // removeitem(i);
                removeitem(elem,index);
            })
            imgdiv.append(image);
            maindiv.append(imgdiv, title,mrp,rem);
            document.querySelector("#cartitems").append(maindiv);
        })
        total.textContent = "Total Amount: "+sum;
    }
    function removeitem(elem,i){
        console.log(elem.mrp);
        // sum -= elem.mrp;
        cartarr.splice(i,1);
        localStorage.setItem("cartarr",JSON.stringify(cartarr));
        document.querySelector("#cartitems").innerHTML = "";
        // total.textContent = "Total Amount: "+sum;
        displaycart(cartarr);
    }

    function checkout(){
        let cartvalue = sum;
        localStorage.setItem("cartvalue", JSON.stringify(cartvalue));
        window.location.href = "checkout.html";
    }
