
import {BrowserRouter as Router, Route, Switch, useHistory, Link} from 'react-router-dom'
//import React, { useState} from 'react';




export const ArticleList = ({articles, articleType}) => {
 //   const [list, setList] = useState()
    return (
        <div className='articleList'>
        <h3>Article List
        </h3>
            <div>
    {
      articles.map((item) =>
      <div>
      <Link 
      to={`/article/${articleType}/${item.id}`}>
      {item.title}
      </Link>
      </div>
      )}
    </div>
            
        </div>
    )
}

export default ArticleList


//        <Link to = {'/:article/' + item.id}>{item.title + prefix}
//</Link>