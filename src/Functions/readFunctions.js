import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const getAllEvents = async () => {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_QUERY_URL,
        cache: new InMemoryCache()
    });
    const GET_TRANSFER = gql`
      query{
        eventCreateds(first: 10) {
        id
        eventId
        eventName
        organizer
        }
      }`;

    try {
        const { data } = await client.query({ query: GET_TRANSFER })
        return data.eventCreateds
    } catch (error) {
        console.error("error fetching data", error)
    }
}


export const getQRLink = async () => {

}

export const getRegisteredEvents = async () => {

}

export const getTicket = async () => {

}

