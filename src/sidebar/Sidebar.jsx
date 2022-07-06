import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebaritem">
        <span className='sidebartitle'>ABOUT ME</span>
        <img src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe repellendus, praesentium enim provident quaerat, dolor esse, officia tempore vel eligendi! Commodi praesentium, incidunt officia nam iusto cumque rem, ab facilis non, exercitationem consequatur minima in laboriosam. Mollitia nemo in repudiandae eaque aperiam voluptates eveniet?</p>
      </div>
      <div className="sidebaritem">
        <span className='sidebartitle'>CATEGORIES</span>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Sports</li>
            <li className="sidebarlistitem">Trending</li>
            <li className="sidebarlistitem">Bollywood</li>
            <li className="sidebarlistitem">Technology</li>
        </ul>
      </div>
      <div className="sidebar">
      <span className='sidebartitle'>FOLLOW US</span>
      <div className="sidebarsocial">
            <i className="sidebartopicon fa-brands fa-twitter"></i>
            <i className="sidebartopicon fa-brands fa-facebook"></i>
            <i className="sidebartopicon fa-brands fa-instagram"></i>
            <i className="sidebartopicon fa-brands fa-pinterest"></i>
      </div>
      </div>

    </div>
  )
}
