const devSettings = {
    "TG_TOKEN": "615902998:AAHU0IZtPTq2HjxXTX1sfkG3mjwQ7s4icCg",
    "EL_API_URL": "http://localhost",
    "EL_API_PORT": "5000",
    "API_PREFIX": "/api/v1/es-link"
};

const prodSettings = {
    "TG_TOKEN": "615902998:AAHU0IZtPTq2HjxXTX1sfkG3mjwQ7s4icCg",
    "EL_API_URL": "http://209.97.137.33",
    "EL_API_PORT": "5000",
    "API_PREFIX": "/api/v1/es-link"
}

const settings = process.env.BOT_STAGE === 'production' ? prodSettings : devSettings;

export default settings;