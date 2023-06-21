const asyncWrapper = (fs) =>{
    return async (res, req, next) => {
        try{
            await fs(res,req,next);
        }catch(err){
            res.status(200).json({msg: err})
        }
    }
}

export default asyncWrapper