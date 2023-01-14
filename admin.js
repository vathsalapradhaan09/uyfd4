async function login(e){
    try{
        e.preventDefault();
        console.log(e.target.name)
        const loginDetails={
            email:e.target.email.value,
            password:e.target.password.value
        }
        console.log(loginDetails)
        await axios.post('http://localhost:3000/user/login',loginDetails)
        if(response.status===200){
            alert(response.data.message)
        }else{
            throw new Error(response.data.message)
        }

    }
    catch{
        console.log(JSON.stringify(err))
       document.body.innerHTML+=`<div style="color:red;">${err.message}<div>`
    }
}
