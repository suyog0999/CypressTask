/// <reference types="cypress" />

describe('Verify the MakeMyTrip Flight Booking',()=>{
    it('Veriy the Booking date in makemytrip',()=>{
        cy.visit('https://www.makemytrip.com/',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        
        // for Selecting first column
        cy.get('[class="makeFlex hrtlCenter column active"]').click()
        cy.get('[for="fromCity"]').click()
        cy.get('.react-autosuggest__input').type('pune')
        //cy.get('[class="fsw_inputBox searchCity inactiveWidget "]').type('pune')
        cy.get('#react-autowhatever-1-section-0-item-0 > .makeFlex > .calc60 >p').contains('Pune').click({force:true})

        // for selecting second column
        // cy.get('[class="fsw_inputBox searchToCity inactiveWidget "]').type('delhi')
        cy.get('[for="toCity"]').click({force:true})
        cy.get('.react-autosuggest__input').type('delhi')
        cy.get('.font14.appendBottom5.blackText').contains('New Delhi').click({force:true})

        // departure date
        cy.get('.fsw_inputBox.dates.inactiveWidget ').first().click({force:true})
        cy.get('.DayPicker-Body > .DayPicker-Week > .DayPicker-Day >.dateInnerCell > p').contains('5').click({force:true})
        cy.wait(3000)

        // return date 
        cy.get('.lbl_input.appendBottom10').last().click({force:true})
        cy.get('.DayPicker-Body > .DayPicker-Week > .DayPicker-Day >.dateInnerCell > p').contains('12').click({force:true})


        // Search Button
        cy.get('.makeFlex.vrtlCenter >a').click({force:true})

        // overlay
        cy.get('.commonOverlay  >.fareLockInfoContainer >.makeFlex.hrtlCenter.right >button').click({force:true})
        
        // Asseration
        cy.get('.fontSize16.blackText.appendLR20.appendBottom20.paddingTop20') .should ('contain','Pune → New Delhi Wed, 5 Jul')
        cy.get('.hsw_inputField.font16.whiteText.textOverflow').should('have.value','Wed, Jul 5, 2023')
    })
})