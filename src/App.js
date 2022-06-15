import './App.css';
import data from "./articles.json";



function App() {
  const articleTitle = {
    padding: "10px",
    marginTop: 0,
    marginBottom: 5, 
    fontFamily: "Arial",
  };
  const articleDescription = {
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    zIndex: 1,
    fontSize: "small",
  }
  const articleLink = {
    textDecoration: "none",
  }
  return (
    <div className="App">
        <h1 className="page-title"> Articoli </h1>
        <div className="allArticle">
          {data.articles.map(article => (
              <div className="article">
                <img width={367} height={150} className="articleImage" src={article.urlToImage} alt="foto articolo" />
                <div className="articleInfoCreator">
                  { article.source.name!==null && <p className="articleSource"> {article.source.name} </p> }
                  { article.author!==null && <p className="articleAuthor"> Author: {article.author}</p>}
                </div>
                <h3 style={articleTitle}> {article.title} </h3>
                <p style={articleDescription}> {article.description} </p>
                <a style={articleLink} href={article.url} target='_blank' rel="noopener noreferrer"> <button className="articleButton">  Leggi </button> </a>
              </div>
          ))}
        </div>      
    </div>
  );
}

export default App;
