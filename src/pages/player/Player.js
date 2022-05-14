import React, {useState} from 'react'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import './Player.scss'

const Player = () => {
    const [menu, setMenu] = useState('songs');
    const handleChangeMenu = (type)=> {
        setMenu(type)
    }
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar handleChangeMenu={handleChangeMenu}/>
                <Body menu={menu}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
