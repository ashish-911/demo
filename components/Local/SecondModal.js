import { Modal, View, Text, Button, Pressable } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useState } from 'react'


const SecondModalScreen = ({ onPress }) => {
    const [date, setDate] = useState(new Date('2023-11-10'))
    const [open, setOpen] = useState(true)

    return (

        <View style={{ alignItems: 'center', backgroundColor: 'rgba(140, 133, 234,0.5)', flex: 1 }}>
            <View style={{ backgroundColor: 'white', borderRadius: 15, overflow: 'hidden', marginTop: 100 }}>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    androidVariant='nativeAndroid'
                    mode="date"
                    maximumDate={new Date()}
                    onConfirm={(date) =>
                        console.log(date)

                    }
                    onCancel={
                        setOpen(false)
                    }
                />
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 25 }}>
                    <Pressable onPress={onPress}>
                        <Text style={{ color: 'red' }}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={onPress}>
                        <Text style={{ color: 'green' }}>Confirm</Text>
                    </Pressable>
                </View> */}
            </View>
        </View>

    )
}
export default SecondModalScreen;