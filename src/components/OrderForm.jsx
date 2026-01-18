import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './OrderForm.css';

const ekMalzemelerListesi = [
  "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
  "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalepeno", "Kabak",
  "Soğan", "Sarımsak"
];

const OrderForm = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet: 1
  });
  const [errors, setErrors] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: ""
  });
  const [isValid, setIsValid] = useState(false);
  const [siparisVeriliyor, setSiparisVeriliyor] = useState(false);
  const [toplamFiyat, setToplamFiyat] = useState(85.50);
  const bazFiyat = 85.50;
  const malzemeBirimFiyat = 5.00;
  useEffect(() => {
    const ekMalzemeFiyati = form.malzemeler.length * malzemeBirimFiyat;
    const yeniToplam = (bazFiyat + ekMalzemeFiyati) * form.adet;
    setToplamFiyat(yeniToplam);
  }, [form]);
  useEffect(() => {
    const yeniHatalar = {};
    
    if (form.isim.length < 3) {
      yeniHatalar.isim = "İsim en az 3 karakter olmalıdır.";
    }
    if (form.boyut === "") {
      yeniHatalar.boyut = "Lütfen pizza boyutunu seçiniz.";
    }
    if (form.hamur === "") {
      yeniHatalar.hamur = "Lütfen hamur kalınlığını seçiniz.";
    }
    if (form.malzemeler.length < 4) {
      yeniHatalar.malzemeler = "En az 4 malzeme seçmelisiniz.";
    } else if (form.malzemeler.length > 10) {
      yeniHatalar.malzemeler = "En fazla 10 malzeme seçebilirsiniz.";
    }

    setErrors(yeniHatalar);
    setIsValid(Object.keys(yeniHatalar).length === 0);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm({ ...form, malzemeler: [...form.malzemeler, value] });
    } else {
      setForm({ ...form, malzemeler: form.malzemeler.filter(item => item !== value) });
    }
  };

  const arttir = () => setForm({ ...form, adet: form.adet + 1 });
  const azalt = () => setForm({ ...form, adet: form.adet > 1 ? form.adet - 1 : 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setSiparisVeriliyor(true);

    const ekMalzemeTutari = form.malzemeler.length * malzemeBirimFiyat;
    const toplamFiyatSon = (bazFiyat + ekMalzemeTutari) * form.adet;
    const yeniSiparis = {
      isim: form.isim,
      urunAdi: "Position Absolute Acı Pizza",
      boyut: form.boyut,
      hamur: form.hamur,
      malzemeler: form.malzemeler,
      not: form.not,
      adet: form.adet,
      fiyat: toplamFiyatSon,
      secimlerTutari: ekMalzemeTutari
    };

    const config = {
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    };

    axios.post("https://reqres.in/api/pizza", yeniSiparis, config)
      .then((response) => {
        console.log("Sipariş Başarılı:", response.data);
        history.push("/success", yeniSiparis);
      })
      .catch((error) => {
        console.error("Sipariş Hatası:", error);
        setSiparisVeriliyor(false);
        alert("Sipariş gönderilirken bir hata oluştu.");
      });
  };

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <img 
            src="/images/iteration-1-images/logo.svg" 
            alt="Teknolojik Yemekler" 
            className="header-logo"
          />
          <div className="breadcrumbs">
            <a href="/">Anasayfa</a> - <span className="active">Sipariş Oluştur</span>
          </div>
        </div>
      </header>
      <div className="order-page-container">
        <div className="content-wrapper">
            
            <img 
                src="/images/iteration-2-images/pictures/form-banner.png" 
                alt="Pizza Banner" 
                className="form-banner-img"
            />

            <div className="form-content-padding">
                <section className="product-info">
                  <h3>Position Absolute Acı Pizza</h3>
                  
                  <div className="fiyat-row">
                    <h2 className="fiyat">{bazFiyat}₺</h2>
                    <div className="rating-row">
                      <span className="rate">4.9</span>
                      <span className="count">(200)</span>
                    </div>
                  </div>

                  <p className="aciklama">
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
                    daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
                    genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli 
                    lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                  </p>
                </section>

                <form onSubmit={handleSubmit}>
                  <div className="form-row-group">
                    <div className="boyut-sec">
                      <h4>Boyut Seç <span className="zorunlu">*</span></h4>
                      <div className="size-options">
                        {["Küçük", "Orta", "Büyük"].map((size, index) => (
                           <label key={index} className="size-label">
                             <input 
                                type="radio" 
                                name="boyut" 
                                value={size} 
                                onChange={handleChange} 
                                checked={form.boyut === size} 
                             />
                             <span className="size-circle">{size === "Küçük" ? "S" : size === "Orta" ? "M" : "L"}</span>
                           </label>
                        ))}
                      </div>
                      {errors.boyut && <div className="error-message">{errors.boyut}</div>}
                    </div>

                    <div className="hamur-sec">
                      <h4>Hamur Seç <span className="zorunlu">*</span></h4>
                      <select name="hamur" value={form.hamur} onChange={handleChange}>
                        <option value="" disabled>Hamur Kalınlığı Seç</option>
                        <option value="İnce">İnce</option>
                        <option value="Normal">Normal</option>
                        <option value="Kalın">Kalın</option>
                      </select>
                      {errors.hamur && <div className="error-message">{errors.hamur}</div>}
                    </div>
                  </div>
                  <div className="malzemeler">
                    <h4>Ek Malzemeler</h4>
                    <p className="malzeme-info">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="checkbox-grid">
                      {ekMalzemelerListesi.map((malzeme, index) => (
                        <label key={index} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={malzeme}
                            onChange={handleCheckboxChange}
                            checked={form.malzemeler.includes(malzeme)}
                          />
                          <span className="checkmark"></span>
                          {malzeme}
                        </label>
                      ))}
                    </div>
                    {errors.malzemeler && <div className="error-message">{errors.malzemeler}</div>}
                  </div>

                  {/* İsim Alanı */}
                  <div className="isim-alani">
                    <h4>İsim Soyisim <span className="zorunlu">*</span></h4>
                    <input 
                      type="text" 
                      name="isim" 
                      onChange={handleChange} 
                      placeholder="Lütfen isminizi giriniz"
                      className="isim-input"
                    />
                    {errors.isim && <div className="error-message">{errors.isim}</div>}
                  </div>
                  <div className="siparis-notu">
                    <h4>Sipariş Notu</h4>
                    <textarea
                      name="not"
                      placeholder="Siparişine eklemek istediğin bir not var mı?"
                      onChange={handleChange}
                    />
                  </div>

                  <hr className="divider" />
                  <div className="summary-container">
                    <div className="counter-group">
                      <button type="button" onClick={azalt}>-</button>
                      <span>{form.adet}</span>
                      <button type="button" onClick={arttir}>+</button>
                    </div>

                    <div className="summary-card">
                      <h4>Sipariş Toplamı</h4>
                      <div className="summary-line">
                        <span>Seçimler</span>
                        <span>{form.malzemeler.length * malzemeBirimFiyat * form.adet}₺</span>
                      </div>
                      <div className="summary-line total">
                        <span>Toplam</span>
                        <span className="total-price">{toplamFiyat}₺</span>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="submit-btn" 
                        disabled={!isValid || siparisVeriliyor}
                      >
                        {siparisVeriliyor ? "SİPARİŞ VERİLİYOR..." : "SİPARİŞ VER"}
                      </button>
                    </div>
                  </div>

                </form>
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
    </>
  );
};

export default OrderForm;