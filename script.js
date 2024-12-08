function display_history(parsed_money,heading){
  const history = document.createElement("div");
  const d = new Date();
  history.innerHTML=`
  <div class="bg-base-200 border shadow-lg rounded-lg mt-2 p-2">
  <h1>${parsed_money} Taka is Donated for ${heading} , Bangladesh</h1>
  <p>${d}</p>
  </div>`
  const history_display = document.getElementById("history");
  history_display.appendChild(history);
}







document.getElementById("donate").addEventListener("click",function(e){
    e.preventDefault();
    const total_donation = document.getElementById("total_donation");
    let parse_total_donation = parseFloat(total_donation.innerText);
    const money = document.getElementById("money").value;
    const parsed_money = parseInt(money);
    if(money=="" || money<0){
        return alert("please give a value")
    }
    if(parse_total_donation<parsed_money){
      return alert("Unsufficient Balance")
    }
    document.getElementById("my_modal_5").showModal()
    
    
    const deposit = document.getElementById("deposit");
    const deposit_value = parseInt(deposit.innerText);
    const total_money = deposit_value+parsed_money;
    deposit.innerText=`${total_money}`
    parse_total_donation -= parsed_money;
    const total_donation_money = parse_total_donation+total_money;
    total_donation.innerText=`${parse_total_donation}`

    //
    const heading = "flood relief in Noakhali";
    display_history(parsed_money,heading);
    
})





document.getElementById("feni").addEventListener("click",function(e){
    e.preventDefault();
    const money = document.getElementById("feni_money").value;
    const parsed_money = parseInt(money);
    
    const deposit = document.getElementById("feni_deposit");
    const deposit_value = parseInt(deposit.innerText);
    const total_money = deposit_value+parsed_money;
    
    const total_donation = document.getElementById("total_donation");
    let parse_total_donation = parseFloat(total_donation.innerText);
    parse_total_donation -= parsed_money;
    if(money=="" || money<0){
      return alert("please give a value")
  }
  if(parse_total_donation<parsed_money){
    return alert("Unsufficient Balance")
  }
  document.getElementById("my_modal_5").showModal()
    deposit.innerText=`${total_money}`
    total_donation.innerText=`${parse_total_donation}`
    const heading = "flood relif in Feni"
    display_history(parsed_money,heading);
})


document.getElementById("quotas").addEventListener("click",function(e){
    e.preventDefault();
    const money = document.getElementById("quota_money").value;
    const parsed_money = parseInt(money);
    const deposit = document.getElementById("quota_deposit");
    console.log(deposit)
    const deposit_value = parseInt(deposit.innerText);
    const total_money = deposit_value+parsed_money;
    
    const total_donation = document.getElementById("total_donation");
    let parse_total_donation = parseFloat(total_donation.innerText);
    parse_total_donation = parse_total_donation-parsed_money;
    if(money=="" || money<0){
      return alert("please give a value")
  }
  if(parse_total_donation<parsed_money){
    return alert("Unsufficient Balance")
  }
  document.getElementById("my_modal_5").showModal()
    deposit.innerText=`${total_money}`
    total_donation.innerText=`${parse_total_donation}`
    const heading = "Aid for injured in Quota Movement";
    display_history(parsed_money,heading);
  })

/* function close(){
  document.getElementById("dia_btn").addEventListener("click",function(e){
    e.preventDefault()
    
    return document.getElementById("my_modal_5").classList.add("hidden")
  })
}
 */
document.getElementById("cls_btn").addEventListener("click",function(e){
  e.preventDefault();
  document.getElementById("my_modal_5").close()
})


function history(){
document.getElementById("history").style.display="block"
document.getElementById("donation").style.display="none"
document.getElementById("h_btn").classList.add("btn-primary")
document.getElementById("d_btn").classList.remove("btn-primary")
} 

function donation(){
document.getElementById("donation").style.display="block"
document.getElementById("history").style.display="none"
document.getElementById("h_btn").classList.remove("btn-primary")
document.getElementById("d_btn").classList.add("btn-primary")
}

function sticky(){
  
    
    if(document.documentElement.scrollTop>10){
      document.getElementById("sticky").classList.add(`transparent-bg`)
      document.getElementById("cards").classList.remove(`bg-orange-50`)
    }else{
      
      document.getElementById("sticky").classList.remove(`transparent-bg`)
      document.getElementById("cards").classList.add(`bg-orange-50`)
    }
  }



