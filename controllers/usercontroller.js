const users=require("../users.json")
function getAllUsers(req,res){
    try{
        res.json(users)


    }catch(err) {
        console.log(err)
    }
}
function getParticularUser(req,res){
    try{
        let id=req.params.id;
        let user=users.find((user)=>user.id===parseInt (id));
        res.json(user);

    }
    catch(err){

    }
}
module.exports={
    getAllUsers,
    getParticularUser
}