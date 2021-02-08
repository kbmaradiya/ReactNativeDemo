import { Platform } from 'react-native';
import {PERMISSIONS,check,RESULTS, request} from 'react-native-permissions';

const PLATEFORM_CAMERA_PERMISSIONS={
    ios:PERMISSIONS.IOS.CAMERA,
    android:PERMISSIONS.ANDROID.CAMERA
}

const REQUEST_PERMISSION_TYPE={
    camera:PLATEFORM_CAMERA_PERMISSIONS
}

const PERMISSION_TYPE={
    camera:'camera'
}

const checkPermission=async(type):Promise<Boolean>=>{
    const permissions=REQUEST_PERMISSION_TYPE[type][Platform.OS]
    if(!permissions){
        return true
    }
    try{
        const result=await check(permissions)
        if(result === RESULTS.GRANTED){
            return true
        }
        return requestPermission(permissions)
    }catch(error){
        return false
    }
}


const requestPermission = async(permissions):Promise<Boolean>=>{
    try{
        const result = await request(permissions)
        return result === RESULTS.GRANTED
    }catch{
        return false
    }
}

export {checkPermission,PERMISSION_TYPE}

