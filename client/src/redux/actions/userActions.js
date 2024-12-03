import axios from "axios"
import { USER_URL } from "../../utils/urlProperties"

export const registerUser = async(data) => {

    const {username, email, password, firstName, lastName } = data;

    const finalUserObj = {
        email,
        username,
        password,
        name: {
            firstName,
            lastName
        },
        address:{
            city:'kilcoole',
            street:'7835 new road',
            number:3,
            zipcode:'12926-3874',
            geolocation:{
                lat:'-37.3159',
                long:'81.1496'
            }
        },
        phone:'1-570-236-7033'
    }

    const user = await axios.post(USER_URL, finalUserObj)
    return user;
}