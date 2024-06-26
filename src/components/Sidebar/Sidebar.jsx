import React, { useState } from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'
const Sidebar = () => {


    const [extended , setExtented] = useState(false)
    

  return (
    <div className='Sidebar'>
        <div className='top'>
            <img onClick={()=>setExtented(prev=>!prev)} className='menu' src={assets.menu_icon}/>
            <div className='new-chat'>
                <img src={assets.plus_icon} alt='plus-icon'/>

                {extended  ?<p>New Chat</p> : null }
            </div>
           {extended
           ? <div className='recent'>
           <p className='recent-title'>Recent</p>
           <div className='recent-entry'>
               <img src={assets.message_icon} alt=''/>
               <p>What is react ...</p>
           </div>
       </div> : null
           }
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon}/>
                {extended ? <p>help</p> : null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon}/>
                {extended ? <p>Activity</p> : null}
            </div>

            <div className='bottom-item recent-entry'>
                <img src={assets.setting_icon}/>
               {extended ?  <p>Settings</p> : null}
            </div>
        </div>
        </div>
  )
}

export default Sidebar 