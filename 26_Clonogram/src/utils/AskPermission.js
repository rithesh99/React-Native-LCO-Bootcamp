import  { PermissionAndroid, ToastAndroid} from 'react-native'


export const requestPermission = async () => {
    try {
        const granted = await PermissionAndroid.requestMultiple([
            PermissionAndroid.PERMISSIOn.READ_EXTERNAL_STORAGE,
            PermissionAndroid.PERMISSIOn.WRITE_EXTERNAL_STORAGE,
        ])
        console.log(granted);

        if (
            granted['PermissionAndroid.PERMISSIOn.READ_EXTERNAL_STORAGE'] === 'denied' || 
            granted['PermissionAndroid.PERMISSIOn.WRITE_EXTERNAL_STORAGE'] === 'denied'  
            ) {
            ToastAndroid.show('We cannot process without permissions',ToastAndroid.LONG)
            requestPermission()
        }
        
    } catch (error) {
        console.log(error);
    }
}