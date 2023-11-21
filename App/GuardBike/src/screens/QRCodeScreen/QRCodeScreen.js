import React, { useState, useEffect } from 'react'; 
import { Text, View, StyleSheet, Button } from 'react-native'; 
import { BarCodeScanner } from 'expo-barcode-scanner'; 


import CustomButton from '../../components/CustomButton/CustomButton';
 
const QRScannerScreen = ({ onScanned, route }) => {
    if(!route || !route.params)
    {
        console.log("No route params");
        return;
    } 

    const { id } = route.params;

    // console.log(id);

    const [hasPermission, setHasPermission] = useState(null); 
    const [scanned, setScanned] = useState(false);  
    const [text, setText] = useState('');

    const [reservedBy, setReservedBy] = useState(false);
    const [openby, setOpenBy] = useState(false);

    let dataQR = {};
    
    const askForCameraPermission = async () => { 
        const { status } = await BarCodeScanner.requestPermissionsAsync(); 
        setHasPermission(status === 'granted'); 
    }; 
    
    // Request Camera Permission 
    useEffect(() => { 
        askForCameraPermission();
    }, []); 
    
    // What happens when we scan the bar code 
    const handleBarCodeScanned = ({ type, data }) => { 
        setScanned(true); 
        setText(data); 
        onScanned && onScanned(data);

        let d = JSON.parse(data);
        process.env.QRCODEDATA = d;
        setUserToStorage(d);
    };

    const setUserToStorage = async (data) => {
        const apiUrl = 'http://145.93.176.201:3000/stalling/scanned/'+data.code;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: id }),
            });
            console.log('Response Status:', response.status);
            if (response.ok) {
                alert('Je hebt succesvol het slot gereserveerd!')
                setReservedBy(true);

            } else {
                alert('Er is een fout opgetreden bij het scannen!')
            }
        } catch (error) {
            console.error(error);
            alert('Er is een fout opgetreden bij het inloggen!' + error);
        }
    };

    const onOpenPressed = async () => {
        let qrcode = process.env.QRCODEDATA.code;

        const apiUrl = 'http://145.93.176.201:3000/stalling/open/'+qrcode;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: id }),
            });
            if(response.ok){
                alert("Je hebt succesvol het slot gesloten!")
            } else {
                alert("Er is een fout opgetreden bij het sluiten van het slot!")
            }
        } catch (error) {
            console.error(error);
            alert('Er is een fout opgetreden bij het inloggen!' + error);
        }
    }

    const onClosePressed = async () => {
        let qrcode = process.env.QRCODEDATA.code;

        const apiUrl = 'http://145.93.176.201:3000/stalling/close/'+qrcode;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: id }),
            });
            if(response.ok){
                alert("Je hebt succesvol het slot geopend!")
            } else {
                alert("Er is een fout opgetreden bij het open gaan van het slot!")
            }
        } catch (error) {
            console.error(error);
            alert('Er is een fout opgetreden bij het inloggen!' + error);
        }
    }

    // Check permissions and return the View 
    if (hasPermission === null) { 
        return ( 
        <View style={styles.container}> 
            <Text>Vraagt toegang voor de camera</Text> 
        </View> 
        ); 
    } 
    
    if (hasPermission === false) { 
        return ( 
        <View style={styles.container}> 
            <Text style={{ margin: 10 }}>Geen toegang tot de camera</Text> 
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} /> 
        </View> 
        ); 
    } 
    
    // Return the View 
    return (
        <View style={styles.root}>
            <View style={styles.buttonsContainer}>
                {!scanned && <View style={styles.barcodebox}> 
                    <BarCodeScanner 
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
                        style={{ height: 300, width: 300 }} 
                    /> 
                </View> }

                {reservedBy && <CustomButton
                    text="Lock"
                    type="OPEN"
                    onPress={onOpenPressed}
                /> }

                {reservedBy && <CustomButton
                    text="Open maken"
                    type="CLOSE"
                    onPress={onClosePressed}
                /> }
            </View>
            <View style={styles.logoutContainer}>
                {scanned && <CustomButton
                    text="Opnieuw scannen"
                    onPress={() => {
                        setScanned(false);
                        setText('');
                    }}
                /> } 
            </View>
        </View>
    ); 
}; 
 
const styles = StyleSheet.create({ 
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    buttonsContainer: {
        marginTop: -100,
        width: '70%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutContainer: {
        width: '70%',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
}); 
 
export default QRScannerScreen; 
