import navstyles from "../navbar/navstyles.module.css";

function Navbar() {
  return (
    <div className={navstyles.nav_outer_div}>
      <div className={navstyles.inner_nav_div}>
        <div className={navstyles.left}>
          <div id="categroies" className={navstyles.categroies}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20} style={{marginTop:"22px"}}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            <select style={{ backgroundColor: '#ffd333' }} className={navstyles.dropdown} >

              <option value="" className={navstyles.selected} style={{fontFamily:"900"}}> Categories</option>
               
              <option value="dresses">Dresses</option>
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="swimwear">Swimwear</option>
              <option value="sleepwear">Sleepwear</option>
              <option value="sportswear">Sportswear</option>
              <option value="jumpsuits">Jumpsuits</option>
              <option value="blazers">Blazers</option>
              <option value="jackets">Jackets</option>
              <option value="shoes">Shoes</option>
            </select>
          </div>

          <div id="menu" className={navstyles.menu}></div>

            <ul className={navstyles.listitems}>
              <li style={{color:"#ffd333"}}>Home</li>
              <li>Shop</li>
              <li><span>Shop Detail</span></li>
              <li>Pages ⬇️ </li>
              <li>Contact</li>
            </ul>

        </div>

        <div className={navstyles.right}>

          
        <div className={navstyles.cart}>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} height={20}><path fill="#FFD43B" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>

        <div className={navstyles.zero}>
              <p>0</p>
            </div>

        </div>

          <div className={navstyles.love}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path fill="#FFD43B" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>

            <div className={navstyles.zero}>
              <p>0</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
