import axios from 'axios'
const url="http://b2b2.mtaijiu.com"
let http=axios.create({
  baseURL:'url',
  timeout:20000
})
export  default http