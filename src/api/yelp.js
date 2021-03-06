import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer dl5qt8Hxs5b4YuRPqqIU3Gd9VPb0IQPfGXciFZmIc6ZcqShaZU8uQ1-NOq2Dy7g35diUUl_y1Dr2KNwgXKPsHeUcV-R7tdX8hHRpUf1igthcrDuj65b4colPuEsAYHYx'
    }
})