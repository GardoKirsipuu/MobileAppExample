import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 8,
        borderRadius: 8,
        paddingVertical: 20,
        width: '100%',
        flex: 1
    },
    title: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})