import '../index.css'




const Button = ({text, onClick}) => {

    const Click = (e)=>{
        e.preventDefault()
        onClick()
    }

    return (
        <div >
            <button onClick={Click} className='button'>
            {text}
            </button>
        </div>
    )
}

export default Button
