/* BLUEFLIX - JAVASCRIPT */

/* FILMES MAIS PROCURADOS */

const popular = [
    {
        title: "Duna: Parte Dois",
        year: "2024",
        age: "12",
        rating: "8.6",
        genre: "Ficção científica",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Interestelar",
        year: "2014",
        age: "10",
        rating: "8.7",
        genre: "Ficção científica",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Oppenheimer",
        year: "2023",
        age: "16",
        rating: "8.6",
        genre: "Drama",
        image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Homem-Aranha",
        year: "2021",
        age: "12",
        rating: "8.2",
        genre: "Ação",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "A Origem",
        year: "2010",
        age: "14",
        rating: "8.8",
        genre: "Mistério",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"
    }
];

/* MELHOR CLASSIFICADOS */

const topRated = [
    {
        title: "Um Sonho de Liberdade",
        year: "1994",
        age: "16",
        rating: "9.3",
        genre: "Drama",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "O Poderoso Chefão",
        year: "1972",
        age: "16",
        rating: "9.2",
        genre: "Crime",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "O Cavaleiro das Trevas",
        year: "2008",
        age: "12",
        rating: "9.0",
        genre: "Ação",
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "A Viagem de Chihiro",
        year: "2001",
        age: "Livre",
        rating: "8.6",
        genre: "Animação",
        image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Matrix",
        year: "1999",
        age: "12",
        rating: "8.7",
        genre: "Ação",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80"
    }
];

/* SÉRIES */

const series = [
    {
        title: "Stranger Things",
        year: "2016",
        age: "14",
        rating: "8.6",
        genre: "Mistério",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "The Last of Us",
        year: "2023",
        age: "16",
        rating: "8.7",
        genre: "Drama",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Arcane",
        year: "2021",
        age: "14",
        rating: "9.0",
        genre: "Animação",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Dark",
        year: "2017",
        age: "16",
        rating: "8.7",
        genre: "Mistério",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "The Bear",
        year: "2022",
        age: "16",
        rating: "8.5",
        genre: "Comédia",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80"
    }
];

/* CRIAR CARDS */

function renderCards(elementId, movies) {
    const container = document.getElementById(elementId);

    container.innerHTML = movies.map(movie => `
        <article class="card" data-title="${movie.title.toLowerCase()}">
            <div class="poster" style="background-image: url('${movie.image}')">
                <span class="age">${movie.age}</span>
                <span class="rating">★ ${movie.rating}</span>
            </div>

            <div class="info">
                <h3>${movie.title}</h3>

                <div class="meta">
                    ${movie.year} • Classificação ${movie.age}
                </div>

                <div class="tags">
                    <span class="tag">${movie.genre}</span>
                    <span class="tag">HD</span>
                </div>
            </div>
        </article>
    `).join("");
}

/* PESQUISA */

function filterCards() {
    const searchValue = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.dataset.title;

        card.style.display = title.includes(searchValue)
            ? "block"
            : "none";
    });
}

/* INICIAR SITE */

renderCards("popular", popular);
renderCards("top", topRated);
renderCards("seriesGrid", series);