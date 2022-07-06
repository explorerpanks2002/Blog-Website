import  './topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
      
      <div className="topleft">
            <i className="topicon fa-brands fa-twitter"></i>
            <i className="topicon fa-brands fa-facebook"></i>
            <i className="topicon fa-brands fa-instagram"></i>
            <i className="topicon fa-brands fa-pinterest"></i>
      </div>

      <div className="topcentre">
           <ul className="toplist">
            <li className="toplistitem">HOME</li>
            <li className="toplistitem">ABOUT</li>
            <li className="toplistitem">CONTACT US</li>
            <li className="toplistitem">WRITE</li>
            <li className="toplistitem">LOGOUT</li>
           </ul>
      </div>

      <div className="topright">
        <img className='topimg' src="https://images.pexels.com/photos/12604485/pexels-photo-12604485.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
