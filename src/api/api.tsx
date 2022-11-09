import axios from "axios";
import { useState, useEffect } from "react";


/**
 * It's a function that returns a promise that resolves to an object.
 * @param {string} url - string - The url to fetch the data from
 * @returns The data object.
 */
export const useGetUserInfos = async (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);

     return data;
}

/**
 * It's a custom hook that uses the useState hook to set the data state to an empty object, and then
 * uses the useEffect hook to make an API call to the url passed in as an argument, and then sets the
 * data state to the response data.
 * @param {string} url - string - the url to fetch the data from
 * @returns An array of objects.
 */
export const useGetActivities = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data);
          })
     }, [url]);

     return data;
};

/**
 * It's a function that takes a url as a parameter and returns an array of objects.
 * @param {string} url - string - The url to fetch the data from
 * @returns An array of objects.
 */
export const UseGetDuration = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);

     return data;
}

/**
 * It's a custom hook that uses the useState hook to set the data state and the useEffect hook to fetch
 * data from an API.
 * @param {string} url - string - the url to fetch data from
 * @returns An object with a bunch of data.
 */
export const useGetPerformances = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.data);
          })
     }, [url]);

     return data;
};

/**
 * This function is a React hook that uses the axios library to make a GET request to the url passed in
 * as an argument, and returns the data from the response.
 * @param {string} url - string
 * @returns The data is being returned as an object.
 */
export const useGetPerformancesKind = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.kind);
          })
     }, [url]);

     return data;
};


export const useGetKeyData = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);

     return data;
};