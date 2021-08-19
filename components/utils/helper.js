const test  = (item,flag) =>{
    // console.log(item.offers);

    let activeParcent;
    if(item.offers.length >0 && !flag){
        
        item.offers.map(offer =>{
            if(item.qnt>=offer.min_qnt && item.qnt <= offer.max_qnt){
                activeParcent = offer.parcent
            }
        })
        if(activeParcent){
            return (item.price.amount * item.qnt)- (Math.ceil((item.price.amount*activeParcent)/100) * item.qnt);
        }else{
            return item.price.amount * item.qnt
        }  
    }else{
        return item.price.amount * item.qnt;
    }    
}

const calculateSubTotal =(items,flag) =>{
    let value = items.reduce((acc,item)=> acc+=test(item,flag),0)
    return value;
}

const activeBulkId = (offers,qnt) =>{

    let bulk_id=null ;
    if(offers.length>0){
        offers.map(offer=>{
            if(qnt>=offer.min_qnt && qnt<=offer.max_qnt){
                bulk_id= offer.id
            }
        })
    }
    return bulk_id;
}

const getPrice = (item) =>{
    if(item.offers.length){
        let activeOffer = item.offers.find(offer=> offer.id == item.bulk_id); 
        if(activeOffer){
            return (item.price.amount * item.qnt)- (Math.ceil((item.price.amount*activeOffer.parcent)/100) * item.qnt);
        }  
    }return item.price.amount * item.qnt
}

const priceWithoutDiscount = (items) =>{
    let value = items.reduce((acc,item)=> acc+=item.price.amount*item.qnt,0)
    return value;   
}
const activeParcent=(offers,qnt)=>{
    let activeParcent=null ;
    if(offers.length>0){
        offers.map(offer=>{
            if(qnt>=offer.min_qnt && qnt<=offer.max_qnt){
                activeParcent= offer.parcent
            }
        })
    }
    return  activeParcent;
}
module.exports = {
    test,
    calculateSubTotal,
    activeBulkId,
    getPrice,
    priceWithoutDiscount,
    activeParcent
}