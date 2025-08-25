const {getDatawithId,updateData, getData}=require("../config/database");
const viewReport=async(req,res)=>{
const {id}=req.params;

let reportDetails= await getDatawithId("reports",id);
if(reportDetails.seen=false){

    try {
        const  updated={};
        updated.seen=true;
   await updateData("reports",id,updated);

} catch (error) {
    console.log(error)
}
}
let userreported=reportDetails.email;
let userdata= await getData("users");

res.render("Reports.ejs",{reportDetails});
}
module.exports=viewReport;