import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './Success.css'; 

export default function Success() {
  const location = useLocation();
  const orderData = location.state || {
      urunAdi: "Position Absolute Acı Pizza",
      boyut: "L",
      hamur: "Normal",
      malzemeler: [],
      fiyat: 0,
      secimlerTutari: 0,
      adet: 1,
      not: ""
  };

  return (
    <div className="success-container">
        
        <div className="success-content">
            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
            
            <p className="lezzet-text">lezzetin yolda</p>
            <h1 className="main-title">SİPARİŞ ALINDI</h1>
            
            <div className="divider"></div>
            <h2 className="product-name">{orderData.urunAdi}</h2>
            <div className="order-details">
                <p>Boyut: <strong>{orderData.boyut}</strong></p>
                <p>Hamur: <strong>{orderData.hamur}</strong></p>
                <p>Ek Malzemeler: <strong>{orderData.malzemeler && orderData.malzemeler.length > 0 ? orderData.malzemeler.join(', ') : 'Seçilmedi'}</strong></p>
            </div>
            {orderData.not && (
                <div className="order-note-box">
                    <h3>Sipariş Notu:</h3>
                    <p>"{orderData.not}"</p>
                </div>
            )}
            <div className="total-box">
                <h3>Sipariş Toplamı</h3>
                <div className="total-row">
                    <span>Seçimler</span>
                    <span>{orderData.secimlerTutari}₺</span>
                </div>
                <div className="total-row total-price">
                    <span>Toplam</span>
                    <span>{orderData.fiyat}₺</span>
                </div>
            </div>
        </div>
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