import { create } from 'zustand';
import axios from 'axios';
import { domainBE } from '../URL';


interface Options {
    infoUser: {
        length: number,
        login: boolean,
        verified: boolean,
        // Add other user properties here
        email: string,
        username: string,
        password: string
    },
    error: any, // Added error state for better error handling
    callUser: () => Promise<void>, // Added async function for making API call
}

const useCallInfoUser = create<Options>((set) => ({
    infoUser: {
        length: 0,
        login: false,
        verified: false,
        // Add other user properties here
        email: "",
        username: "",
        password: ""
    },
    error: null, // Added error state for better error handling

    callUser: async () => {
        try {

            await axios.get(domainBE + "/automatic-login".trim(), { withCredentials: true }).then((response: {
                data: {
                    login: boolean,
                    verified: boolean,
                    email: string,
                    username: string,
                    password: string
                }
            }) => {
                return set(() => ({
                    infoUser: {
                        length: 1,
                        login: response.data.login,
                        verified: response.data.verified,
                        email: response.data.email,
                        username: response.data.username,
                        password: response.data.password
                    }, error: null
                })); // Update info and clear error

            })
        } catch (error) {
            console.error('Error fetching user info:', error); // Log the error
            set({ error: error }); // Update error state for handling
        }
    },
}));

export { useCallInfoUser };
