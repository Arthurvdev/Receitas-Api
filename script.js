
async function receitas() {
    const response = await fetch(`https://api-receitas-iota.vercel.app/receitas`,{
        method: 'GET',
        mode: 'no-cors'
    });
    const data = await response.json();
   console.log(data)
}

