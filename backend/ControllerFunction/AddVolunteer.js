
const { uuid } = require("uuidv4");
const {addData}=require("../config/database")


const addVolunteer= async(req,res)=>{
    try {
        
        const{name,number,email,password}=req.body
        
       if(!name||!number||!email||!password){
        res.redirect("volunteers");
       }else{
        //database query for adding volunteer to database.
        try {
            const id=uuid();

            
            const data={
                id,
                name:name,
                number:number,
                email:email,
                password:password,
                isactive:false,
                role:"volunteer"
            }
         addData("users",data,id).then( res.redirect("/user/volunteers"));
           
   } catch (error) {
       console.log(error);
       
    }

    
       }
} catch (error) {
    console.log(error);
}
}
module.exports=addVolunteer