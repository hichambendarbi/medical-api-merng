import { Count } from "../module/counter";


// export const autoInc: any = (callback : (n : any | number | bigint )=>any) =>Count.findOne({}, (err, count)=>{
//     if(err) throw err;
//     if(typeof count === 'undefined' || count === null) {
        // const Counter = new Count({user : 1 });
        // Counter.save(err=>{
        //     if(err) throw err;
        //     return callback(Counter.user);
        // })
//     } else {
        // Count.findOneAndUpdate({},{$inc: {user:1}}, (err, doc)=>{
        //     if(err) throw err;
        //     if(doc === null) throw new Error("doc is null")
        //     return callback(++doc.user)
        // })
//     }
// })

export const autoInc : any = async () => {
    const newCount = await Count.findOne({}, async (err, count)=>{
        if(typeof count === 'undefined' || count === null) {
            const Counter = new Count({user : 1 });
            return await Counter.save((err, res)=>{
                if(err) throw err;
                return res;
            })
        } else { 
            Count.findOneAndUpdate({},{$inc: {user:1}}, (err, doc)=>{
                if(err) throw err;
                if(doc === null) throw new Error("doc is null")
                return ++doc.user
            })
        }
    })
    
   if(newCount) {
       return newCount.user
   } else {
       return "Somthing Wrong"
   }
}
export const autoIncLabos : any = async () => {

    const countLabo = await Count.findOne({}, async (err, count)=>{
                if(typeof count === 'undefined' || count === null) {
                    const Counter = new Count({labo : 1 });
                    return await Counter.save((err, res)=>{
                        if(err) throw err;
                        return res;
                    })
                } else { 
                    Count.findOneAndUpdate({},{$inc: {labo:1}}, (err, doc)=>{
                        if(err) throw err;
                        if(doc === null) throw new Error("doc is null")
                        return ++doc.user
                    })
                }
            })
    
   if(countLabo) {
       return countLabo.user
   } else {
        throw new Error ("Somthing Wrong")
   }
}
