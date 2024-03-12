import React, { useState, useEffect } from 'react';
import BatteryGauge from 'react-battery-gauge';

export function Battery() {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [charging, setCharging] = useState(null);

    useEffect(() => {
       
        async function fetchBatteryInfo() {
            try {
                const battery = await navigator.getBattery();
                setBatteryLevel(Math.round(battery.level * 100));
                setCharging(battery.charging)
               

                
                battery.addEventListener('levelchange', handleBatteryLevelChange);

                battery.addEventListener('chargingchange', handleChargingChange);
             
            } catch (error) {
                console.error( error);
            }
        }

        fetchBatteryInfo();

      
        return () => {
            navigator.getBattery().then(battery => {
                battery.removeEventListener('levelchange', handleBatteryLevelChange);
                battery.removeEventListener('chargingchange', handleChargingChange);
            });
        };
    }, []); 

    function handleBatteryLevelChange(event) {
        setBatteryLevel(Math.round(event.target.level * 100));
    }

    // Обрабо
    function handleChargingChange(event) {
        setCharging(event.currentTarget.charging);
    }
console.log(charging);
    return (
        <BatteryGauge size={100} value={batteryLevel} charging={charging} />
    );
}