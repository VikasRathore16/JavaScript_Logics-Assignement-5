const Array=[];
function products(){
    var product = fetch();
    console.log(product);
    console.log(Array);
    Array.push(product);
    var table = document.getElementById('mytable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for(var i=0; i<Array.length ; i++){
        console.log(Array[i][0]);
        
    cell1.innerHTML = Array[i].productId;
    cell2.innerHTML = Array[i].productName;
    cell3.innerHTML = Array[i].productPrice;
    
    }
}

function fetch(){
    var product_id= document.getElementById("productId").value;
    var product_name=document.getElementById("productName").value;
    var product_price = document.getElementById("productPrice").value;
    return {"productId" : product_id,
            "productName" : product_name,
        "productPrice" : product_price};
}

function checkData(){
    var product =fetch();
    if(!Number.isInteger(product.productId)){
        alert("Price should be integer");
    }
    
}

