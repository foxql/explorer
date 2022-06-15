import io from 'socket.io-client'
import bridges from '../bridges'
import { writable, readable, get } from 'svelte/store'

export const lastPowSignall = writable(false)
export const listeningBridgeCount = readable(bridges.length)
export const signallNodeCount = writable(0)
export const webNodeCount = writable(0)
export const activeDappsCount = writable(0)

bridges.forEach(bridgeUrl => {
    const socket = io(bridgeUrl)

    socket.on('connect', ()=> {
        socket.emit('upgrade-explorer-connection', true)
        
        socket.on('pow-signall', (message)=> {
            lastPowSignall.set(message)
        })

        socket.on('registered-signall-node-count', (count)=>{
            signallNodeCount.set(get(signallNodeCount) + count)
        })

        socket.on('active-dapps-stats', (dapps)=>{
            const oneDimensionalArray = Object.values(dapps)
            if(oneDimensionalArray.length == 0) return false

            const nodeCount = get(webNodeCount)
            dapps.forEach(({webNodeCount})=>{
                nodeCount += webNodeCount
            })
            const currentActiveDapps = get(activeDappsCount)
            activeDappsCount.set(currentActiveDapps + oneDimensionalArray.length)
        })

        setTimeout(() => {
            socket.emit('registered-signall-node-count')
            socket.emit('active-dapps-stats')
        }, 150);
    }) 
});