async function receitas() {
    try {
        const response = await fetch(`https://api-receitas-delta.vercel.app/receitas/`);
        const data = await response.json();
        console.log(data); 

        const receitasDiv = document.getElementById('receitas_div');
        receitasDiv.innerHTML = '';

        data.forEach(receita => {
            const receitaElement = document.createElement('div');
            receitaElement.classList.add('receita');
            receitaElement.innerHTML = `
                <img class="receita_img" src="${receita.url_imagem}" alt="${receita.nome}">
                <h2 class="receita_h2">${receita.nome}</h2>
                <p class="receita_p"><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
                <p class="receita_p"><strong>Tempo de Preparo:</strong> ${receita.tempo_de_preparo}</p>
                <p class="receita_p"><strong>Modo de Preparo:</strong> ${receita.modo_preparo}</p>
                <a href="${receita.url_video}" target="_blank"><p>Assistir vídeo</p></a>
             `;
            
            receitasDiv.appendChild(receitaElement);
        });

    } catch (error) {
        
        console.error('Erro ao buscar receitas:', error);
    }
}


receitas();
