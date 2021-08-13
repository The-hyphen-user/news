import './App.css';
import {BrowserRouter as Router, Route, Switch, useHistory, Link} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Button from './components/Button';
import interviewArticles from './Articles/interviewArticles.json'
import articles from './Articles/onionArticles.json'
import onionArticles from './Articles/onionArticles.json'
import CCPArticles from './Articles/CCPArticles.json'
import combatArticles from './Articles/combatArticles.json'


function App() {

  return (
    <div className='all'>
    <Router>
    <Header/>
    <div className="App">
      <h1> Welcome to On Tether</h1>
      <h3>A cool graphic design goes here</h3>
      <p>
        premium source of eve related news 
      </p>
      
    </div>
    
    <Route exact path='/home'>
    <Home/>
    </Route>
    <Route exact path ='/scoop'>
    <ArticleList articles = {articles} articleType={'articles'}/>
    </Route>
    <Route path='/article/scoop/:id'>
    <Article articleList = {articles}/>
    </Route>

    <Route exact path='/ccp'>
    <ArticleList articles = {CCPArticles} articleType={'ccp'}/>
    </Route>
    <Route path='/article/ccp/:id'>
    <Article articleList = {CCPArticles}/>
    </Route>

    <Route exact path='/combat'>
    <ArticleList articles = {combatArticles} articleType={'combat'}/>
    </Route>
    <Route path='/article/combat/:id'>
    <Article articleList = {combatArticles}/>
    </Route>

    <Route exact path='/interviews'>
    <ArticleList articles = {interviewArticles} articleType={'interviews'}/>
    </Route>
    <Route path='/article/interviews/:id'>
    <Article articleList = {interviewArticles}/>
    </Route>

    <Footer className='footer'/>
    </Router>
    </div>
  );
}

export default App;



/*





,
    {
      "title": "",
      "id":,
      "type":"news",
      "text":""
    }








*/