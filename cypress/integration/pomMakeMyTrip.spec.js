/// <reference types="cypress" />
import POM  from '.././support/POM/makemytrip'

describe('Verify the MakeMyTrip Flight Booking',()=>{
   
    it('Veriy the Booking date in makemytrip',()=>{
        POM.visit()
        POM.FromCity('pune','Pune')
        POM.ToCity('delhi','New Delhi')
        POM.DepartureDate('5')
        POM.ReturnDate('12')
        POM.SearchButton()

        //Assertions
        cy.get('.fontSize16.blackText.appendLR20.appendBottom20.paddingTop20 ').should('contain','Pune → New Delhi  Wed, 5 Jul')
        cy.get('.hsw_inputField.font16.whiteText.textOverflow').eq(2).should('have.value','Wed, Jul 5, 2023')
    })
})