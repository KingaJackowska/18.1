var movies = [
    {
        id: 0,
        title: "Mission: Impossible - Fallout",
        desc: "Konsekwencje zako�czonej niepowodzeniem misji IMF mo�e odczu� ca�y �wiat. Aby zapobiec katastrofie, Ethan Hunt i jego zesp� musz� stan�� do wy�cigu z czasem.",
        picture: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
    },
    {
        id: 1,
        title: "Kr�l Lew",
        desc: "Targany nies�usznymi wyrzutami sumienia po �mierci ojca ma�y lew Simba skazuje si� na wygnanie, rezygnuj�c z przynale�nego mu miejsca na czele stada.",
        picture: "https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg"
    },
    {
        id: 2,
        title: "Gra o wszystko",
        desc: "By�a narciarka Molly Bloom zak�ada najbardziej ekskluzywny, nielegalny klub pokerowy w USA. Pewnego dnia do drzwi bohaterki pukaj� agenci FBI.",
        picture: "https://images-na.ssl-images-amazon.com/images/I/91QIcXonmyL._SY445_.jpg"
    },
    {
        id: 3,
        title: "The Place",
        desc: "Tajemniczy m�czyzna pomaga nieznajomym w spe�nieniu ich najskrytszych marze�.",
        picture: "https://ssl-gfx.filmweb.pl/po/68/31/796831/7819952.6.jpg"
    }
];
var moviesElements = movies.map(function(movie){
    return React.createElement('li',{key: movie.id},
        React.createElement('h2',{},movie.title),
        React.createElement('p',{},movie.desc),
        React.createElement('img',{src: movie.picture})
    );
});
var element2 = React.createElement('div',{},
    React.createElement('h1',{},'Lista film�w'),
    React.createElement('ul',{},moviesElements)
);
ReactDOM.render(element2, document.getElementById('app2'));