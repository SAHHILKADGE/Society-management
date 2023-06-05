

import './notice-page.css'
import NavbarComponent from '../../components/navbar-component/navbar.component'

export const NoticePage = () => {
  return (
    <div className='background-container-image'>
        <NavbarComponent/>
        <div className="notice-page-head">
        </div>
        {/* <div className='seperator'></div> */}
        <div className="notice-page-head-2">
            <div className='notice-page-head2-div'>
            <h1 className='notice-page-head2-div-h1'>Housing society</h1>
            <p>This my Housing society</p>
            </div>
        </div>
        <div className='notice-content-main'>
            <div id='notice-div'>Notice</div>
        </div>

    </div>
  )
}
