const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTQyNmJmOWNhNGQwZDFkZTU4YWYyNGI1YTVkNjFlYSIsIm5iZiI6MTc1MjAxODYzMy41MTksInN1YiI6IjY4NmRhZWM5MjkxMzA3NjU2MzcwM2E1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zax1XZTWUIoT0b0WJWQ30bhRhw2eME0RT61x9rWry7A'
    }
}



fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        // Aqui você pode manipular os dados recebidos da API
    })
