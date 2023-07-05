/// <reference types="cypress" />
import MakeMyTrip  from '../support/MakeMyTrip/makemytrip'

describe('Verify the MakeMyTrip Flight Booking',()=>{
   
    it('Veriy the Booking date in makemytrip',()=>{
        MakeMyTrip.visit()
        MakeMyTrip.FromCity('pune','Pune')
        MakeMyTrip.ToCity('delhi','New Delhi')
        MakeMyTrip.DepartureDate('5')
        MakeMyTrip.ReturnDate('12')
        MakeMyTrip.SearchButton()
        MakeMyTrip.ToAssert()
        
    })
})