// Scenario 1: Online Food Delivery



function OrderReceived (){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Order is received")
        }, 1000)
    })
}

function preparingFood(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Food is preparing")
        }, 3000)
    })
}

function packingFood(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Food is packing")
        },2000)
    })
}


function assignPerson(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Assigning a delivery person")
        },2000)
    })
}


function deliveringFood(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            resolve('Food is delivered')
        },4000)
    })
}

OrderReceived()
    .then( res => { console.log(res);    return preparingFood() })
    .then( res => { console.log(res);    return packingFood()   })
    .then( res=>  { console.log(res);    return assignPerson()  })
    .then( res=>  { console.log(res);    return deliveringFood()})
    .then( res=>   console.log(res))


// Scenario 2: Movie Ticket Booking


function selectingSeats (){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Selecting the seats")
        }, 2000)
    })
}

function processingPayment(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Payment is processing")
        }, 3000)
    })
}

function generatingTicket(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ticket is generating")
        },1000)
    })
}


function sendingMail(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Confirmation Mail is sending")
        },2000)
    })
}


selectingSeats()
    .then( res => { console.log(res);    return processingPayment()   })
    .then( res=>  { console.log(res);    return generatingTicket()  })
    .then( res => { console.log(res);    return sendingMail() })
    .then( res=>   console.log(res))



// Scenario 3: Car Service Center



function carCheckin (){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Car check in")
        }, 1000)
    })
}

function oilChange(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Oil changed")
        }, 2000)
    })
}

function engineCheck(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Engine checked")
        },3000)
    })
}


function carWash(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Car is washing")
        },2000)
    })
}


function finalQuality(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            resolve('Final quality checked')
        },2000)
    })
}

carCheckin()
    .then( res => { console.log(res);    return oilChange() })
    .then( res => { console.log(res);    return engineCheck()   })
    .then( res=>  { console.log(res);    return carWash()  })
    .then( res=>  { console.log(res);    return finalQuality()})
    .then( res=>   console.log(res))




// Scenario 4: Laptop Repair Service



function diagnosing (){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Diagnosing an issue")
        }, 3000)
    })
}

function replacingParts(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Replacing fault parts")
        }, 4000)
    })
}

function updatingSoftwre(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Updating software")
        },2000)
    })
}


function finalTesting(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Final testing")
        },2000)
    })
}


function returnCustomer(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            resolve('Returning to customer')
        },1000)
    })
}

diagnosing()
    .then( res => { console.log(res);    return replacingParts() })
    .then( res => { console.log(res);    return updatingSoftwre()   })
    .then( res=>  { console.log(res);    return finalTesting()  })
    .then( res=>  { console.log(res);    return returnCustomer()})
    .then( res=>   console.log(res))



// Scenario 5: Online Course Enrollment



function checkingcourse (){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Checking course availability")
        }, 1000)
    })
}

function processingPayments(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve("Payment is processing")
        }, 3000)
    })
}

function generateId(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Enrollment ID is generating")
        },1000)
    })
}


function sendingmaterials(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Sending course materials")
        },2000)
    })
}


function grantingclasses(){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            resolve('Granting access to live classes')
        },2000)
    })
}

checkingcourse()
    .then( res => { console.log(res);    return processingPayments() })
    .then( res => { console.log(res);    return generateId()   })
    .then( res=>  { console.log(res);    return sendingmaterials()  })
    .then( res=>  { console.log(res);    return grantingclasses()})
    .then( res=>   console.log(res))
