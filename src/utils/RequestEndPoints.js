import request from "./Request";
import { useState } from "react";

//Fetch all personal mock tests
export const fetchMockTests = async() => {
    const requestUrl = 'https://localhost:8080/api/mocktests/get';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
};

//Fetch all personal mock tests
export const fetchMockTest = async(id) => {
    const requestUrl = 'https://localhost:8080/api/mocktests/get/'+id;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
};

//Fetch all public mock tests
export const fetchPublicMockTests = async() => {
    const requestUrl = 'https://localhost:8080/api/mocktests/getPublic';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}

//Update mock test
export const updateMockTest = async (body,id) => {
    const requestUrl = 'https://localhost:8080/api/mocktests/update/'+id;
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}

//Delete Mock Test
export const deleteMockTest = async (id) => {
    const requestUrl = 'https://localhost:8080/api/mocktests/delete/'+id;
    const options = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}

//Create mock test
export const createMockTest = async (body) => {
    const requestUrl = 'https://localhost:8080/api/mocktests/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body : body
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}

export const userSignJWTVerification = (user) => {
    const body = {
        "Name": user.displayName,
        "Email": user.email,
        "PhotoURL": user.photoURL,
        "id":user.uid
    }
    const requestUrl = 'http://localhost:8080/user';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
};

export const fetchUserProfile = async() => {
    const requestUrl = 'http://localhost:8080/user/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}

export const updateUserDetails = async (body) => {
    const requestUrl = 'http://localhost:8080/user/update';
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = await request(requestUrl, options).then(response => response.data);    
    return res;
}