const backendDomin = "https://this-and-that-backend.onrender.com"
const SummaryApi = {
    signUp : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    fetchData : {
        url : `${backendDomin}/api/fetch`,
        method : "get"
    },
    fetchUser : {
        url : `${backendDomin}/api/fetchuser`,
        method : "get"
    },
    EventDetail : {
        url : `${backendDomin}/api/event-details`,
        method : 'get'
    },
    submit : {
            url : `${backendDomin}/api/submit`,
            method : 'post',
    },
    board : {
        url : `${backendDomin}/api/board`,
        method : 'get',
    },
    result : {
        url : `${backendDomin}/api/result`,
        method : 'post',
    },
    answer : {
        url : `${backendDomin}/api/answer`,
        method : 'post',
    },
    form : {
        url : `${backendDomin}/api/form`,
        method : 'post',
    }
}

export default SummaryApi