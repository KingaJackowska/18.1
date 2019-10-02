var movies = [
    {
        id: 0,
        title: "Mission: Impossible - Fallout",
        desc: "Konsekwencje zakoñczonej niepowodzeniem misji IMF mo¿e odczuæ ca³y œwiat. Aby zapobiec katastrofie, Ethan Hunt i jego zespó³ musz¹ stan¹æ do wyœcigu z czasem.",
        picture: "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
    },
    {
        id: 1,
        title: "Król Lew",
        desc: "Targany nies³usznymi wyrzutami sumienia po œmierci ojca ma³y lew Simba skazuje siê na wygnanie, rezygnuj¹c z przynale¿nego mu miejsca na czele stada.",
        picture: "https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg"
    },
    {
        id: 2,
        title: "Gra o wszystko",
        desc: "By³a narciarka Molly Bloom zak³ada najbardziej ekskluzywny, nielegalny klub pokerowy w USA. Pewnego dnia do drzwi bohaterki pukaj¹ agenci FBI.",
        picture: "https://images-na.ssl-images-amazon.com/images/I/91QIcXonmyL._SY445_.jpg"
    },
    {
        id: 3,
        title: "The Place",
        desc: "Tajemniczy mê¿czyzna pomaga nieznajomym w spe³nieniu ich najskrytszych marzeñ.",
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
    React.createElement('h1',{},'Lista filmów'),
    React.createElement('ul',{},moviesElements)
);
ReactDOM.render(element2, document.getElementById('app2'));