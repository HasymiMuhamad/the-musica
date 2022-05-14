import React from 'react'
import './SidebarOption.scss'

const SidebarOption = ({option,Icon, handleChangeMenu, name}) => {
    return (
        <div className='sidebarOption' onClick={()=> handleChangeMenu(name)}>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOption
