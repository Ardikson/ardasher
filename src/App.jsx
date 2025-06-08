import { useState } from 'react'
import './App.css'
import imgWithDog from './assets/img/IMAGE (1).png'
import imgShopbyRoom1 from './assets/img/IMAGE (2).png'
import imgShopbyRoom2 from './assets/img/IMAGE (3).png'
import imgShopbyRoom3 from './assets/img/IMAGE (4).png'
import imgShopbyRoom4 from './assets/img/IMAGE (5).png'
import imgGarageSale from './assets/img/IMAGE (6).png'
import imgDoubled from './assets/img/IMAGE (7).png'
import imgLongHeight from './assets/img/IMAGE (8).png'
import imgtable from './assets/img/IMAGE (9).png'
import imgConsole from './assets/img/IMAGE (10).png'
import imgChair from './assets/img/IMAGE (11).png'
import imgSofa from './assets/img/IMAGE (12).png'
import imgDoubledSofa from './assets/img/IMAGE (13).png'
import imgparidest from './assets/img/frame.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Furniture</li>
          <li>Why Feather</li>
          <li>Feather for Business</li>
        </ul>
        <h1>Feather</h1>
        
        <ul>
          <li>Check if We Deliver</li>
          <li>Search</li>
          <li>Account</li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </nav>

      <section className='sectionFirstHeader'>
      <aside className='asideHeader'>
      <h1>Curated and <br /> Convenient</h1>
      <p>We've built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”</p>
      <button>Get Started</button>
      </aside>
      <img src={imgWithDog} alt="" />
      </section>

      <section className='sectionSecondtHeader'>
        <h2>Shop by Room</h2>
        <aside>
          <div className='shopDiv'>
    <img src={imgShopbyRoom1} alt="" />
    <p>Living Room</p>
          </div>
          <div className='shopDiv'>
    <img src={imgShopbyRoom2} alt="" />
    <p>Bedroom</p>
          </div>
          <div className='shopDiv'>
    <img src={imgShopbyRoom3} alt="" />
    <p>Home Office</p>
          </div>
          <div className='shopDiv'>
    <img src={imgShopbyRoom4} alt="" />
    <p>Dining Room</p>
          </div>
        </aside>
      </section>
    </header>

    <article className='articleAfterHeader'>
      <h2 style={{"font-size":"30px", "font-weight":"400"}}>“Keeping Furniture in Homes and out of Landfills."</h2>
      <p>This isn’t just another rental company - We’re elevating the future of furniture by replacing the commitment of ownership with a culture of sharing in a way that’s curated, convenient, and sustainable.</p>
    </article>

    <section className='sectionMiddle'>
      <aside className='sectionMiddleAside'>
        <h2>Enjoy a fully furnished <br /> space in less than week</h2>
        <p>Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.</p>
        <p style={{"color":"#E9672B"}}>Explore Furniture</p>
      </aside>
      <img src={imgWithDog} alt="" />
    </section>

    <section className='sectionMiddle sectionMiddleRev'>
      <aside className='sectionMiddleAside'>
        <h2>Garage Sale - 40% & Up</h2>
        <p>Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.</p>
        <p>Terms and conditions apply. View here.</p>
        <p style={{"color":"#E9672B"}}>Shop Now</p>
      </aside>
      <img src={imgGarageSale} alt="" />
    </section>

    <section className='sectionMiddle' style={{"padding":"100px 0"}}>
      <aside className='sectionMiddleAside'>
        <h2>Furniture for business, <br /> made simple.</h2>
        <p>Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.</p>
        <p style={{"color":"#E9672B"}}>Visit Feather For Business</p>
      </aside>
      <img src={imgDoubled} alt="" />
    </section>

    <section className='sectionMiddle' style={{"flexDirection":"row-reverse"}}>
      <aside className='sectionMiddleAside'>
        <h2>Never assemble furniture <br /> again.</h2>
        <p>We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.</p>
        <p style={{"color":"#E9672B"}}>How Feather Works</p>
      </aside>
      <img src={imgLongHeight} alt="" />
    </section>

    <section className='sectionSecondtHeader' style={{"padding":"100px 0", "backgroundColor":"#FBF8F5", "margin":"100px 0 0 0"}}>
        <h2 style={{"fontSize":"30px"}}>Shop our Bestsellers</h2>
        <aside style={{"justifyContent":"center"}}>
          <div className='shopDiv withoutBorder'>
    <img src={imgtable} alt="" />
    <p className='pFontWeight'>Cooper Dining Table</p>
    <p className='pFlex'>rent for <span style={{"color":"#E9672B"}}>$15</span>/mo <br /> or buy for $359 <br /> $314</p>
          </div>
          <div className='shopDiv withoutBorder'>
    <img src={imgConsole} alt="" />
    <p className='pFontWeight'>Croft Media <br /> Console</p>
    <p className='pFlex'>rent for <span style={{"color":"#E9672B"}}>$35</span>/mo <br /> or buy for $839 <br /> $739</p>
          </div>
          <div className='shopDiv withoutBorder'>
    <img src={imgChair} alt="" />
    <p className='pFontWeight'>Essex Dining Chair</p>
    <p className='pFlex'>rent for <span style={{"color":"#E9672B"}}>$18</span>/mo <br /> or buy for $429 <br /> $379</p>
          </div>
          <div className='shopDiv withoutBorder'>
    <img src={imgSofa} alt="" />
    <p className='pFontWeight'>Ludlow Sofa</p>
    <p className='pFlex'>rent for <span style={{"color":"#E9672B"}}>$52</span>/mo <br /> or buy for $1249 <br /> $1099</p>
          </div>
        </aside>
          <p style={{"color":"#E9672B"}}>Shop All Furniture</p>
      </section>
    
    <article style={{"color":"white", "display":"flex", justifyContent:"center", backgroundColor:"#FBF8F5"}}>
      <img style={{"width":"680px","display":"flex", "flexDirection":"column","alignItems":"start", "textAlign":"center"}} src={imgDoubledSofa} alt="" />
      <div style={{"backgroundColor":"#E9672B", "display":"flex", "flexDirection":"column", alignItems:"center", justifyContent:"space-between", gap:"20px", textAlign:"center", "gap":"15px", "padding":"40px 20px"}}>
          <p style={{"display":"flex", "alignItems":"center", gap:"7px"}}>feather <span style={{"fontSize":"10px"}}>x</span> FLOYD</p>
          <h2 style={{"fontSize":"30px"}}>Floyd Furniture Meets <br /> Feather Flexibility</h2>
          <button style={{"backgroundColor":"white", padding:"13px 30px", border:"none", borderRadius:"50px"}}>Explore Floyd Furniture</button>
      </div>
    </article>

    <main style={{display:"flex", flexDirection:"column", gap:"40px", alignItems:"center", padding:"100px 0", backgroundColor:"#FBF8F5"}}>
      <h2 style={{"fontSize":"30px", fontWeight:"400"}}>The Reviews are In</h2>
      <section style={{display:"flex", gap:"20px"}}>
        <article style={{display:"flex", flexDirection:"column", gap:"20px", lineHeight:"27px", border:"1.5px solid #E9672B", padding:"20px", boxShadow:"5px -5px 5px 1px #CBC6F4", maxWidth:"300px"}}>
          <div style={{color:"#CBC6F4", display:"flex", gap:"5px"}}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>Honestly BEST EXPERIENCE moving ever.</p>
          <p>- Julie, San Francisco, CA</p>
        </article>

        <article style={{display:"flex", flexDirection:"column", gap:"20px", lineHeight:"27px", border:"1.5px solid #225DCA", padding:"20px", boxShadow:"5px -5px 5px 1px #E7CB43", maxWidth:"300px"}}>
          <div style={{color:"#E7CB43", display:"flex", gap:"5px"}}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>Extremely easy! Browsed for furniture and it was in my new apartment within a week.</p>
          <p>- Anthony, Los Angeles, CA</p>
        </article>

        <article style={{display:"flex", flexDirection:"column", gap:"20px", lineHeight:"27px", border:"1.5px solid #242947", padding:"20px", boxShadow:"5px -5px 5px 1px #A2D4C5", maxWidth:"300px"}}>
          <div style={{color:"#A2D4C5", display:"flex", gap:"5px"}}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>THIS JUST MAKES SENSE. Truly obsessed with Feather.</p>
          <p>- Wesley, New York City, NY</p>
        </article>
      </section>
    </main>

    <section style={{backgroundColor:"#F6CFCA", padding:"50px 70px", display:"flex", flexDirection:"column", gap:"40px", alignItems:"center", textAlign:"center"}}>
      <h1 style={{"fontSize":"55px", fontWeight:"500",maxWidth:"400px"}}>Ease the pain of moving from apartment to apartment.</h1>
      <article style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%", fontSize:"25px"}}>
        <p>PureWon</p>
        <p>MYDOMAINE</p>
        <p>minbodygreen</p>
        <p style={{fontWeight:"600"}}>Forbs</p>
        <p>FAST@OMPANY</p>
      </article>
    </section>

    <section style={{backgroundColor:"#FBF8F5", padding:"100px 0", display:"flex", flexDirection:"column", gap:"30px", alignItems:"center", textAlign:"center"}}>
      <img src={imgparidest} alt="" />
      <p style={{"lineHeight":"22px", maxWidth:"190px", fontWeight:"600"}}>Feather is the stress-free way to furnish your home</p>
      <button style={{backgroundColor:"#E9672B", padding:"13px 35px", border:"none", borderRadius:"50px"}}>Shop Furniture</button>
    </section>

    <footer style={{display:"flex", alignItems:"start", justifyContent:"space-between", gap:"20px", borderTop:"1px solid lightgreen", padding:"50px 50px 100px 50px", backgroundColor:"#F3F0EC"}}>
      <article style={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <p style={{fontSize:"20px"}}>Furniture</p>
        <div style={{display:"flex", flexDirection:"column" , gap:"10px"}}>
         <p>Packages</p>
         <p>Living Room</p>
         <p>Bedroom</p>
         <p>Dining</p>
         <p>Home Office</p>
         <p>Decor</p>
         <p>Lighting</p>
         <p>Outdoor</p>
         <p>All Furniture</p>
         <p>Sample Sale</p>
        </div>
      </article>
      
      <article style={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <p style={{fontSize:"20px"}}>About</p>
        <div style={{display:"flex", flexDirection:"column" , gap:"10px"}}>
         <p>How it Works</p>
         <p>About Feather</p>
         <p>Feather Furniture</p>
         <p>Reviews</p>
         <p>Feather for WeWork </p>
         <p>Feather for Business</p>
         <p>Feather for Staging</p>
         <p>Affiliate Program</p>
         <p>Careers </p>
         <p>In Your Area </p>
        </div>
      </article>

    <article style={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <p style={{fontSize:"20px"}}>Help</p>
        <div style={{display:"flex", flexDirection:"column" , gap:"10px"}}>
         <p>FAQs</p>
         <p>Contact us </p>
         <p>Privacy Policy</p>
         <p>Terms</p>
         <p>FloorFound Terms </p>
        </div>
      </article>

      <section style={{display:"flex", flexDirection:"column", gap:"50px"}}>
        <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
        <p style={{fontSize:"20px"}}>Feather on Social Media</p>
        <article style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-solid fa-envelope"></i>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-brands fa-pinterest-p"></i>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-brands fa-twitter"></i>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-brands fa-instagram"></i>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-brands fa-linkedin-in"></i>
          <i style={{padding:"9px 10px", border:"1.6px solid black", borderRadius:"50%", fontSize:"18px"}} class="fa-brands fa-facebook-f"></i>
        </article>
        </div>
        <p style={{fontSize:"20px"}}>Join our newsletter</p>
        <hr style={{border:"1px solid"}} />
      </section>

    </footer>

    </>
  )
}
export default App
