import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <img 
            src="/images/iteration-1-images/logo.svg" 
            alt="Teknolojik Yemekler" 
            className="hero-logo"
          />
          <div className="hero-text">
            <p className="firsat-text">fırsatı kaçırma</p>
            <h1>KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>
          </div>
          <Link to="/pizza">
            <button className="cta-btn">ACIKTIM</button>
          </Link>
        </div> 
        <img 
            src="/images/iteration-1-images/home-banner.png" 
            alt="Pizza Banner" 
            className="hero-pizza" 
        />
      </header>
      <nav className="category-menu">
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/1.svg" alt="Kore" />
          <span>YENİ! Kore</span>
        </div>
        <div className="category-item active"> 
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
          <span>Pizza</span>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
          <span>Burger</span>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
          <span>Kızartmalar</span>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food" />
          <span>Fast Food</span>
        </div>
        <div className="category-item">
          <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" />
          <span>Gazlı İçecek</span>
        </div>
      </nav>

      <section className="campaigns-container">
        <div className="campaign-card card-lezzetus">
          <div className="card-info">
            <h2>Özel<br />Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <button className="order-btn-small">SİPARİŞ VER</button>
          </div>
          
          <img src="/images/iteration-2-images/pictures/food-2.png" alt="Pizza" className="card-img" />
        </div>

        
        <div className="campaign-card card-hackathlon">
          <div className="card-info">
            <h2>Hackathlon<br />Burger Menü</h2>
            <button className="order-btn-small">SİPARİŞ VER</button>
          </div>
        </div>

        
        <div className="campaign-card card-kurye">
            <div className="card-info">
                <h2 className="kurye-text">
                    <span className="red-text">Çooooook</span> hızlı<br />
                    npm gibi kurye
                </h2>
                <button className="order-btn-small">SİPARİŞ VER</button>
            </div>
            
            <img src="/images\iteration-2-images\cta\kart-3.png" alt="Kurye" className="card-img-kurye" />
        </div>

      </section>
      <section className="menu-products">
        <p className="menu-subtitle">en çok paketlenen menüler</p>
        <h2 className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="menu-grid">

            <div className="product-card">
                <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
                <div className="product-info">
                    <h3>Terminal Pizza</h3>
                    <div className="product-meta">
                        <span>4.9</span>
                        <span>(200)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute" />
                <div className="product-info">
                    <h3>Position Absolute Acı Pizza</h3>
                    <div className="product-meta">
                        <span>4.9</span>
                        <span>(928)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src="/images/iteration-2-images/pictures/food-3.png" alt="Burger" />
                <div className="product-info">
                    <h3>useEffect Tavuklu Burger</h3>
                    <div className="product-meta">
                        <span>4.9</span>
                        <span>(462)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
            </div>

        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-container">
            
            <div className="footer-contact">
                <h2>Teknolojik<br />Yemekler</h2>
                <div className="contact-item">
                    <img src="images\iteration-2-images\footer\icons\icon-1.png" alt="" />
                    <p>341 Londonderry Road, Istanbul Türkiye</p>
                </div>
                <div className="contact-item">
                    <img src="images\iteration-2-images\footer\icons\icon-2.png" alt="" />
                    <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div className="contact-item">
                    <img src="images\iteration-2-images\footer\icons\icon-3.png" alt="" />
                    <p>+90 216 123 45 67</p>
                </div>
            </div>
            <div className="footer-menu">
                <h3>Hot Menu</h3>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
            </div>
            <div className="footer-insta">
                <h3>Instagram</h3>
                <div className="insta-grid">
                    <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
                    <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2023 Teknolojik Yemekler.</p>
        </div>
      </footer>
    </div>
  );
}