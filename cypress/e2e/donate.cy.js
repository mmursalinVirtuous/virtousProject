describe('Donate Form Tests', () => {
  beforeEach(() => {
    cy.visit('/Donate')
    cy.fixture("user.json").as("user")
  })
 it('Empty Form Submission', () => {
    cy.get("button[type='Submit']").click()
    cy.get("input[name='CVV']").siblings("div").find("span").should("contain.text", "CVV is required")
  })

 it('Partial Submission', () => {
    cy.get("@user").then(user => {
      cy.get("#react-select-2--value").click().type(user.employer)
      cy.get(".Select-menu-outer").contains(user.fullEmployer).click()
      cy.get("input[name='FirstName']").click().clear().type(user.firstName)
      cy.get("input[name='LastName']").click().clear().type(user.lastName)
      cy.get("input[name='Email']").click().clear().type(user.email)
      cy.get("input[name='PhoneNumber']").click().clear().type(user.phone)
      cy.get("input[name='Address1']").click().clear().type(user.address1)
      cy.get("input[name='Address2']").click().clear().type(user.address2)
      cy.get("input[name='City']").click().clear().type(user.city)
      cy.get("#react-select-3--value").click().type(user.state)
      cy.get(".Select-menu-outer").contains(user.state).click()
      cy.get("input[name='PostalCode']").click().clear().type("8020")
      cy.get("input[name='CreditCardNumber']").click().clear().type(user.cardNum)
      cy.get("input[name='Expiration']").click().clear().type(user.cardExp)
      cy.get("input[name='CVV']").click().clear().type(user.cardCVV)
      cy.get("button[type='submit']").click()
    })
    })
    
 it('Dropdown Search', () => {
    cy.get("@user").then(user => {
      cy.get("#react-select-2--value").click().type(user.employer)
      cy.get(".Select-menu-outer").contains(user.fullEmployer).click()
  })
  })
 it('Full Form Submission', () => {
    cy.get("@user").then(user => {
      cy.get("#react-select-2--value").click().type(user.employer)
      cy.get(".Select-menu-outer").contains(user.fullEmployer).click()
      cy.get("input[name='FirstName']").click().clear().type(user.firstName)
      cy.get("input[name='LastName']").click().clear().type(user.lastName)
      cy.get("input[name='Email']").click().clear().type(user.email)
      cy.get("input[name='PhoneNumber']").click().clear().type(user.phone)
      cy.get("input[name='Address1']").click().clear().type(user.address1)
      cy.get("input[name='Address2']").click().clear().type(user.address2)
      cy.get("input[name='City']").click().clear().type(user.city)
      cy.get("#react-select-3--value").click().type(user.state)
      cy.get(".Select-menu-outer").contains(user.state).click()
      cy.get("input[name='PostalCode']").click().clear().type(user.postal)
      cy.get("input[name='CreditCardNumber']").click().clear().type(user.cardNum)
      cy.get("input[name='Expiration']").click().clear().type(user.cardExp)
      cy.get("input[name='CVV']").click().clear().type(user.cardCVV)
      cy.get("button[type='submit']").click()
    })
    })
    


  })