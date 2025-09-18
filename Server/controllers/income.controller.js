export const  addIncome=async()=>{
    const{userId}=req.auth
    console.log(userId)
    res.status(200).json({
        success:true,
        message:"Income added successfully"
    })
}
export  const getAllIncome=async()=>{}
export const deleteIncome=async()=>{}
export const downloadIncomeExcel=async()=>{}
