import { create } from 'zustand';
import axios from 'axios';
import { domainBE } from '../URL';


interface Options {
    infoUser: {
        
    },
    error: any, // Added error state for better error handling
    callUser: () => Promise<void>, // Added async function for making API call
}

const useCallInfoUser = create<Options>((set) => ({
    infoUser: [],
    error: null, // Added error state for better error handling

    callUser: async () => {
        try {

            await axios.get(domainBE + "/automatic-login".trim(), { withCredentials: true }).then(response => {
                return set(() => ({ infoUser: response.data, error: null })); // Update info and clear error

            })
        } catch (error) {
            console.error('Error fetching user info:', error); // Log the error
            set({ error: error }); // Update error state for handling
        }
    },
}));

export { useCallInfoUser };
