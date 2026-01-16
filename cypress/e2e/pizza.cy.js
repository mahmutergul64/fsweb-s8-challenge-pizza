

describe('Pizza Sipariş Formu Testleri', () => {
  
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/pizza'); 
  });

  it('İsim inputuna metin girilebilmeli', () => {
    
    cy.get('input[name="isim"]') 
      .type('Cypress Testçisi')
      .should('have.value', 'Cypress Testçisi'); 
  });

  it('Birden fazla malzeme seçilebilmeli', () => {
    
    cy.get('input[type="checkbox"]').first().check({force: true}).should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).check({force: true}).should('be.checked');
  });

  it('Formu doldurup siparişi başarıyla göndermeli', () => {
    
    cy.get('input[name="isim"]').type('Otomasyon Canavarı');

    cy.get('input[type="radio"]').first().check({force: true}); 

    cy.get('select').select(1); 

    cy.get('input[type="checkbox"]').eq(0).check({force: true});
    cy.get('input[type="checkbox"]').eq(1).check({force: true});
    cy.get('input[type="checkbox"]').eq(2).check({force: true});
    cy.get('input[type="checkbox"]').eq(3).check({force: true});
    
    
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/success');
  });
});