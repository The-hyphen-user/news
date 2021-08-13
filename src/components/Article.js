
import { useHistory, useParams } from 'react-router-dom'
import React, { useState} from 'react';
import '../index.css';


const Article = ({articleList}) => {
    const {id} = useParams()
    const[title, setTitle] = useState(articleList[id].title);
    const[text, setText] = useState(articleList[id].text);

    return (
        <div className='article'>
        <h5>
            Photo 
        </h5>
        <h2>
            {title}
        </h2>

        <p>
        {text}
        </p>
            
        </div>
    )
}

export default Article
