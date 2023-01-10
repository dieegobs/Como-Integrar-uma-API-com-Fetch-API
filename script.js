/* Mandando o nome como POST */

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Diego',
    }),
})
    .then((res) => res.json())
    .then((data) => console.log(data))




/* Pegando o nome do usuário 

fetch('https://reqres.in/api/users')
.then((res) => res.json())
.then(data => console.log(data.data[0].first_name)) 
.catch(err => console.log(err))                           */


/* Fazendo um tratamento se não tiver usuários

fetch('https://reqres.in/api/users/1000')
.then((res) => {
    console.log(res)
    if(res.ok){
        console.log('Success')
    }else{
        console.log('Erro')
    }
}
)
.then(data => console.log(data))
.catch(err => console.log(err))

*/