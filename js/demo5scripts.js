function GetOrders()
{
    var objRequest = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
            
        }
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}


function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {
        displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " + result.GetOrdersForCustomerResult[count].OrderID + "<br>";
    }
    
    document.getElementById("orderdisplay").innerHTML = displaytext;
    
}