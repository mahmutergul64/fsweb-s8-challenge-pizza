import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './Success.css'; 

export default function Success() {
  const location = useLocation();
  
  
  
  
  const orderData = location.state || {
      isim: "Position Absolute Acı Pizza",
      boyut: "L",
      hamur: "Süpper İnce",
      malzemeler: ["Pepperoni", "Sosis", "Mısır", "Ananas", "Jalepeno"],
      fiyat: 110.50,
      secimlerTutari: 25.00,
      adet: 1
  };

  return (
    <div className="success-container">
        
        <div className="success-content">
            <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
            
            <p className="lezzet-text">lezzetin yolda</p>
            <h1 className="main-title">SİPARİŞ ALINDI</h1>
            
            <div className="divider"></div>

            <h2 className="product-name">{orderData.isim}</h2>

            
            <div className="order-details">
                <p>Boyut: <strong>{orderData.boyut}</strong></p>
                <p>Hamur: <strong>{orderData.hamur}</strong></p>
                <p>Ek Malzemeler: <strong>{orderData.malzemeler ? orderData.malzemeler.join(', ') : '-'}</strong></p>
            </div>

            
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
            <div className="footer-inner">
                <div className="footer-col">
                    <h2>Teknolojik<br />Yemekler</h2>
                    <p>📍 341 Londonderry Road, Istanbul Türkiye</p>
                    <p>📧 aciktim@teknolojikyemekler.com</p>
                    <p>📞 +90 216 123 45 67</p>
                </div>
                <div className="footer-col">
                    <h3>Hot Menu</h3>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
                <div className="footer-col">
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
            <div className="copyright">
                <p>© 2023 Teknolojik Yemekler.</p>
            </div>
        </footer>
    </div>
  );
}