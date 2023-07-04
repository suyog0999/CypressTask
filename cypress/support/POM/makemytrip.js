class MakeMyTrip{
    Elements ={
        FlightIcon:'[class="makeFlex hrtlCenter column active"]',
        FromTab:'[for="fromCity"]',
        FromInput1:'.react-autosuggest__input',
        DynamicDrop1:'#react-autowhatever-1-section-0-item-0 > .makeFlex > .calc60 >p',
        FromInput2:'.react-autosuggest__input',
        DynamicDrop2:'.font14.appendBottom5.blackText',
        ToCity:'[for="toCity"]',
        Departure:'.fsw_inputBox.dates.inactiveWidget',
        DepartureCalender:'.DayPicker-Body > .DayPicker-Week > .DayPicker-Day >.dateInnerCell > p',
        ReturnDate:'.lbl_input.appendBottom10',
        ReturnCalender:'.DayPicker-Body > .DayPicker-Week > .DayPicker-Day >.dateInnerCell > p',
        Searchbtn:'.makeFlex.vrtlCenter >a',
        PopUp:'.commonOverlay  >.fareLockInfoContainer >.makeFlex.hrtlCenter.right >button'
        
    }
    visit(){
        cy.visit('https://www.makemytrip.com/flights/',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        // cy.get(this.Elements.FlightIcon).click()
    }
    FromCity(value,value2){
        cy.get(this.Elements.FromTab).click()
        let from =cy.get(this.Elements.FromInput1)
        from.type(value)

        let dynamicDrop= cy.get(this.Elements.DynamicDrop1)
        dynamicDrop.contains(value2).click({force:true})
    }

    ToCity(value,value2){
        cy.get(this.Elements.ToCity).click({force:true})
        let tocity= cy.get(this.Elements.FromInput2)
        tocity.type(value)

        let dynamicDrop2= cy.get(this.Elements.DynamicDrop2)
        dynamicDrop2.contains(value2).click({force:true})
    }

    DepartureDate(value){
          cy.get(this.Elements.Departure).first().click({force:true})
          let departureCalender= cy.get(this.Elements.DepartureCalender)
          departureCalender.contains(value).click({force:true})
    }

    ReturnDate(value){
        cy.get(this.Elements.ReturnDate).last().click({force:true})
        let returnDate= cy.get(this.Elements.ReturnCalender)
        returnDate.contains(value).click({force:true})

    }
   
    SearchButton(){
        cy.get(this.Elements.Searchbtn).click({force:true})
        cy.wait(5000)
        cy.get(this.Elements.PopUp).click({force:true})
    }

    
}

module.exports = new MakeMyTrip()