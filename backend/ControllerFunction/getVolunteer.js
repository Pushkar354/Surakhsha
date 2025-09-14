const {getData}=require("../config/database");
const getVolunteer=async(req,res)=>{
  try {
      const alldata=await getData("users");
  
      res.render("addvolunteers.ejs",{alldata})
     
  } catch (error) {
    console.log(error)
  }

}

module.exports=getVolunteer