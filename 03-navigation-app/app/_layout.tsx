import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

import './global.css';

const RootLayout = () => {

    SplashScreen.preventAutoHideAsync();

    const [fontLoaded, error] = useFonts({
        'WorkSans-Bold': require('../assets/fonts/WorkSans-Bold.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    });

    useEffect(()=>{
        if(error) throw error;
        if(fontLoaded) SplashScreen.hideAsync();
    },[fontLoaded, error]);

    if(!fontLoaded && !error) return null;

    return <Slot />
};

export default RootLayout;