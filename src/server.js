import http from 'http'

const users = []

const server = http.createServer((req, res) =>{
    const {method, url} = req

    if(method == 'GET' && url == '/users'){
        return res.end(JSON.stringify(users))
    }


    if(method == 'POST' && url == '/users'){
        users.push ({
            id: 1,
            name: 'Jhon Doe',
            email: 'johndoe@example.com'
        })
    }

    return res.end('Usuário criado com sucesso')
}) 

server.listen(3333)