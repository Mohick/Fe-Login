
const obEnv: {
    VITE_CONFIG_GG_KEY: string,
    VITE_OUTH_DOMAIN: string,
    VITE_PROJECT_ID: string,
    VITE_STORGAGE_BUCKET: string,
    VITE_MESSAGING_SENDERId: string,
    VITE_APP_ID: string,
    VITE_MEASUREMENT_ID: string  // Firebase Analytics Measurement ID,
    VITE_DOMAIN_BE: string
} = {
    VITE_CONFIG_GG_KEY: import.meta.env.VITE_CONFIG_GG_KEY,
    VITE_OUTH_DOMAIN: import.meta.env.VITE_OUTH_DOMAIN,
    VITE_PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
    VITE_STORGAGE_BUCKET: import.meta.env.VITE_STORGAGE_BUCKET,
    VITE_MESSAGING_SENDERId: import.meta.env.VITE_MESSAGING_SENDERId,
    VITE_APP_ID: import.meta.env.VITE_APP_ID,
    VITE_MEASUREMENT_ID: import.meta.env.VITE_MEASUREMENT_ID,
    VITE_DOMAIN_BE: import.meta.env.VITE_DOMAIN_BE
}

export {
    obEnv
}