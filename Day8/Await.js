
const validateUser = ({userId,password}) =>{
    return new Promise((resolve,reject) =>{
        if(userId && password){
            resolve('Authenticated');
        }else{
            reject({message: 'userId or Paswword'})
        }
    })
}

const app = async () =>{
    const data ={
        userId : '',
        password: ''
    }
    try{
        const result = await validateUser(data);
        console.log(result);
    }
    catch(e){
        console.log(e.message);
    }
    
}
app()