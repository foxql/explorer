import io from 'socket.io-client'
import bridges from '../bridges'
import { writable, readable, get } from 'svelte/store'

export const lastPowSignall = writable(false)
export const listeningBridgeCount = readable(bridges.length)
export const signallNodeCount = writable(0)
export const webNodeCount = writable(0)
export const activeDappsCount = writable(0)
export const dappList = writable([])

bridges.forEach(bridgeUrl => {
    const socket = io(bridgeUrl, {
        reconnection: true,
        reconnectionDelay: 1000
    })

    socket.on('connect', ()=> {
        socket.emit('upgrade-explorer-connection', true)
        socket.emit('registered-signall-node-count')
        socket.emit('active-dapps-stats')

        socket.on('pow-signall', (message)=> {
            lastPowSignall.set(message)
        })

        socket.on('registered-signall-node-count', (count)=>{
            signallNodeCount.set(count)
        })

        socket.on('active-dapps-stats', (dapps)=>{
            
            let webNodes = 0, dappCount = 0, _dapps = []

            for(let key in dapps) {
                const dapp = dapps[key]
                webNodes +=  dapp.webNodeCount
                dappCount += 1
                _dapps.push(dapp)
            }

            webNodeCount.set(webNodes)
            activeDappsCount.set(dappCount)
            dappList.set(_dapps)
        })
    }) 
});