import axios from 'axios'

const getMonitor = async (state) => {
    const peticion = await axios.get('http://192.168.0.250:8083/api/Monitor/erp')
    state(peticion.data)
}

const getVersion = async (state) => {
    const peticion = await axios.get('http://192.168.0.250:8083/api/Componente/version')
    state(peticion.data)
}

export {
    getMonitor,
    getVersion
}