const mongoose=require('mongoose');
const Person=require('./model');
const connectDB =()=>{
    mongoose.connect("mongodb://localhost/foodieslist",()=>{
        try {
            console.log('database is connected')
        } catch {
            console.log('database is not connected')
        }
    })
}
connectDB();
//create new data
const person = new Person (
    {
        name: "helga",
        age: "18",
        favoriteFood : ['Pizza, salads, tacos']
    }
);

person.save(()=>{
try {
   console.log('new person added sucessfully') 
} catch {
    console.log('error')
}
})
Person.create([
    {
        name:"elena",
        age: 25,
        favoriteFood:['pasta, "chinese food']
    },
    {
        name:"Mary",
        age:21,
        favoriteFood:["roast chickens", "donuts","sausages"]

    },
    {
        name:"elena",
        age:30,
        favoriteFood:["sea fruit", "french fries"]
    },
    {
        name:"astrid",
        age:24,
        favoriteFood:["mac and cheese", "rice", "pancakes"]

    },
    {  name:"sebatian",
       age:27,
       favoriteFood:["fruits, vegetables"]}
   

], (err, res)=>{
try {
    console.log('person added')
} catch  {
    console.log('error') 
}
});
Person.find({name:"helga"}, (err, res)=>{
try {
   console.log(res) 
} catch (error) {
   console.log(error) 
}
});
Person.findOne({favoriteFood:{$in:['Pizza']}},(err, res)=>{
    try {
        console.log(res)
    } catch (error) {
        console.log('error')
        
    }
}
)
Person.findById('61b10c24d7451face419fce6',(err,res)=>
{
    try {
        console.log(res)
    } catch (error) {
       console.log('error') 
    }
})
// var findEditThenSave = (_id,done) =>
// {
//         Person.findById('61b10c24d7451face419fce6', (err,res)=>{
//             try {
//                 console.log(res)
//                 Person.favoriteFood.push('Hamburger');
//                 Person.save((err,res)=>{
//                     try {
//                        console.log(res) 
//                     } catch (error) {
//                      console.log('error')   
//                     }
//                 })
//             } catch (error) {
//                 console.log(error)
//             }
//         })
//     }
 Person.findOneAndUpdate({name:'Mary'},{age:20}, (err,res)=>{
try {
    console.log(res)
} catch (error) {
    console.log('error')
}
 })
 Person.remove({name:'astrid'},(err,res)=>{
     try {
         console.log(res)
     } catch (error) {
         consloe.log('error')
     }
 })
 Person.findOneAndRemove({name:'sebatian'}, (err,res)=>{
     try {
         console.log(res)
     } catch (error) {
         console.log('error')
     }
 })