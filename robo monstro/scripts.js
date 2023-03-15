const monstro = [
    {
        id: 1,
        nome: 'osvaldo',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet pariatur, nesciunt vero eius quas sint similique obcaecati quisquam laboriosam fugiat architecto! Officia labore delectus quas officiis fugiat animi sit?',
        foto: 'https://robohash.org/osvaldo'
    },

{
    id: 2,
        nome: 'megamente',
            altura: 3,
                habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet pariatur, nesciunt vero eius quas sint similique obcaecati quisquam laboriosam fugiat architecto! Officia labore delectus quas officiis fugiat animi sit?',
                    foto: 'https://robohash.org/megamente'
},
{
    id: 3,
        nome: 'devinho',
            altura: 7,
                habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet pariatur, nesciunt vero eius quas sint similique obcaecati quisquam laboriosam fugiat architecto! Officia labore delectus quas officiis fugiat animi sit?',
                    foto: 'https://robohash.org/devinho'
},
{
    id: 4,
        nome: 'pedrinho',
            altura: 1.4,
                habilidade: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eveniet pariatur, nesciunt vero eius quas sint similique obcaecati quisquam laboriosam fugiat architecto! Officia labore delectus quas officiis fugiat animi sit?',
                    foto: 'https://robohash.org/pedrinho'
},
]


const secao = document.querySelector('.md')
const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
   document.documentElement.classList.toggle('dark') 
})
const todosOsMonstros = monstro.map(mons => {
    return `<div> 
<p>Nome: ${mons.nome}</p>
<p>Altura: ${mons.altura}</p>
<img src="${mons.foto}">
<p>Habilidades: ${mons.habilidades}</p>
</div>`
})

secao.innerHTML = todosOsMonstros





