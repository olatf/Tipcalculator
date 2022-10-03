




    const Bill = document.getElementById("BillAmount")
    const Tip = document.getElementById("TipAmount")
    const Totalcost = document.getElementById("Totalcost")
    const Numberofppl = document.getElementById("Numberofpeople")
     let number =Number(Numberofppl.innerText)


     const calBIll=()=>{
        Amount = Number(Bill.value)
        Tipped = Number(Tip.value)/100
        Pay= Amount*Tipped
        Total = Amount + Pay
        MustPay = Total/number
        Totalcost.innerText = `$${MustPay.toFixed(2)}`
     }


    const increase =()=>{
        number+=1
        Numberofppl.innerText=number

        calBIll()

    }
    const dreace =()=>{
        if(number<=1){
            return
        }
        number-=1
        Numberofppl.innerText=number

        calBIll()

    }







