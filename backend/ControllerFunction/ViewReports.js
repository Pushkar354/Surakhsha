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
let phonenumber="";
userdata.forEach((e)=>{
    if(e.email==userreported){
        phonenumber=e.phonenumber;
    }
})

res.render("Reports.ejs",{reportDetails,phonenumber});
}
module.exports=viewReport;