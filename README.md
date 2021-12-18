## Dougie the Donut & Pizza Rat
### Overview
Dougie the Donut and Pizza Rat are now best buds taking New York City by storm. Now instead of causing trouble against each other, they've taken it upon themselves to cause trouble around the city! The catch is, they don't want to get caught by the police (in other words, they want to eat their cake and have it, too) so they've put their brains together to come up with a helpful app idea that will allow them to see what kind of trouble they can cause without getting thrown in jail. Let's help them build it!

### Live Preview
https://liudmylai.github.io/complaints_app/

### Features
- [x] Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
- [x] Users should also be able to see an input box where they can put in a number of how many complaints they want to see
- [x] When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
- [x] If the user doesn't input any number, make the default be 10
- [x] Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
- [x] When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
- [x] When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
- [x] Make sure it only toggles the response for that one complaint, not the entire list!
- [x] Make it so the complaints are listed in alphabetical order
- [x] Display somewhere on the page all the categories and how many times they show up for the current list of complaints, e.g. "No Access was complained about 4 times", "Banging/Pounding was complained about 10 times", "Loud Music/Party was complained about 20 times"
- [ ] The data provides latitude and longitude coordinates for where the complaints took place. Consider looking into geolocation and google maps so that you can display a map with a pin showing exactly where the complaint was made