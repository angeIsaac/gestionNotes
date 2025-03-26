export const pagination = async (req, model, page, group = null) => {
    try{
        const limit = parseInt(req.query.limit) || 15;
        const offset = (page - 1) * limit;
        //console.log("limit: " +  limit +  " offset :" + offset + " page " + page);
         if(group){
             const { count, rows } = await model.findAndCountAll({
                 where: {
                     ...group
                 },
                 limit,
                 offset: offset,
             })
             return {count, rows};
         }
         const { count, rows } = await model.findAndCountAll({
             limit,
             offset,
         })
        return {count, rows }
    }catch(err){
        throw new err;
    }
}