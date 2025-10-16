const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

app.get('/me', async (req,res)=>{

    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(),6000)

    try{
        const response = await fetch('https://catfact.ninja/fact',{signal: controller.signal})
        clearTimeout(timeout)
        if(!response.ok){
        throw new Error('error')
            
        }
        const data = await response.json()
        res.status(200).json({
            status: 'success',
            user: {
                email: 'jerryrhq@gmail.com',
                name: 'Nwofor Jerry Ikem',
                stack: 'nodeJs/Express'
            },
            timestamp: new Date().toISOString(),
            fact: data.fact
        })

    }catch(error){
        console.error(`error: ${error.message}`)

        res.status(500).json({
            status: 'error',
            message: 'Unable to Fetch cat fact at the moment',
            timestamp: new Date().toISOString()
        })
    }
})

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})