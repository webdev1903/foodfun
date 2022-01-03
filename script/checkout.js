let totalvalue = JSON.parse(localStorage.getItem("cartvalue"));
    document.querySelector("#total").innerHTML = `<b>Total Cart Value</b>: ${totalvalue}`;

    function notification(){
        let cartarr = [];
        localStorage.setItem("cartarr", JSON.stringify(cartarr));
        setTimeout(function(){
            alert("Order Placed Successfully");
        },3000)
        setTimeout(function(){
            alert("Order is being cooked");
        },8000)
        setTimeout(function(){
            alert("Order out for delivery");
        },10000)
        setTimeout(function(){
            alert("Order Delivered Succesfully");
        },12000)
        setTimeout(function(){
            window.location.href = "index.html";
        },13000)
    }