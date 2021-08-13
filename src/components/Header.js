import Button from './Button'
import {useHistory} from 'react-router-dom'
import '../index.css';

const Header = () => {
    const history = useHistory()


    const toHomePage = () =>{
        history.push('/home')
    }
    const toCombatPage = () =>{
        history.push('/combat')
    }
    const toCCPPage = () =>{
        history.push('/ccp')
    }
    const toInterviewsPage = () =>{
        history.push('/interviews')
    }
    const toScoopPage = () =>{
        history.push('/scoop')
    }
    


    return (
        <div className='header'>
        <Button text={"On Tether"} onClick={toHomePage} className='btn'/>
        <Button text={"The Scoop"} onClick={toScoopPage} className='btn'/>
        <Button text={"Combat"} onClick={toCombatPage} className='btn'/>
        <Button text={"CCP"} onClick={toCCPPage} className='btn'/>
        <Button text={"Interviews"} onClick={toInterviewsPage} className='btn'/>
        </div>
    )
}

export default Header


{/* <div className='header'>
<table className='table'>
<tr>
<td className='td'>
<Button text={"On Tether"} onClick={toHomePage} className='btn'/>
</td>
<td>
<Button text={"Combat"} onClick={toCombatPage} className='btn'/>
</td>
<td>
<Button text={"CCP"} onClick={toCCPPage} className='btn'/>
</td>
<td>
<Button text={"Interviews"} onClick={toInterviewsPage} className='btn'/>
</td>
</tr>
</table>
</div> */}
