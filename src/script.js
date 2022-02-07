const Array=[];

//adding new product in the products function
function products(){
    var product = fetch();
    if(checkData(product.productId,product.productName,product.productPrice)==0){
            Array.push(product);
            var table = document.getElementById('mytable');
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            for(var i=0; i<Array.length ; i++){
                cell1.innerHTML = Array[i].productId;
                cell2.innerHTML = Array[i].productName;
                cell3.innerHTML = "USD " + Array[i].productPrice;
            
            }
        }
}


//fetching input field data
function fetch(){
    var product_id= document.getElementById("productId").value;
    var product_name=document.getElementById("productName").value;
    var product_price = document.getElementById("productPrice").value;
    
    return {"productId" : product_id,
            "productName" : product_name,
        "productPrice" : product_price};
}

//checking Data types of input field

function checkData(productId,productName, productPrice){
    var flag=0;
    if(isNaN(productId)){
        flag=1;
        alert("Product Id should be integer");
    }
    console.log(typeof(productName))
    if(!isNaN(productName)){
        flag=1;
        alert("Product Name should be String")
    }
    if(isNaN(productPrice)){
        flag=1;
        alert("Product Price should be Number")
    }
    console.log(flag);
    return flag ;
    

}

