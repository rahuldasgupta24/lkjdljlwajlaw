import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5, Entypo,  MaterialCommunityIcons, Feather} from "@expo/vector-icons";

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.titleBar}>
                    <TouchableOpacity>
                        <Feather name="more-vertical" size={24} color="black" color="#5954C9" onPress={() =>navigation.openDrawer('SideMenu')}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../../assets/profile-pic.png")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.dm}>
                    <TouchableOpacity>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8" onPress={() => this.props.navigation.navigate('HomeScreen')}></MaterialIcons>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <TouchableOpacity>
                            <FontAwesome5 name="user-edit" size={18} color="#DFD8C8" style={{ marginTop: -2, marginLeft: 4 }}  onPress={() => this.props.navigation.navigate('ProfileEditScreen')}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 25, color: "#5954C8",}]}>@Redcrix1</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 16 }]}>Redcrix</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Entypo name="location" size={24} color="#5954C8" style={{ marginBottom: 6 }} />
                        <Text style={[styles.text, styles.subText]}>India</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <FontAwesome5 name="user-friends" size={24} color="#5954C8" style={{ marginBottom: 6 }}/>
                        <Text style={[styles.text, styles.subText]}>20 Friends</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <MaterialCommunityIcons name="checkbox-multiple-blank-circle-outline" size={24} color="#5954C8" style={{ marginBottom: 6 }} />
                        <Text style={[styles.text, styles.subText]}>3 Social Circles</Text>
                    </View>
                </View>
            </View>
                <ScrollView horizontal={true}>
                <View style={styles.circles}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "200", fontSize: 14.5, color: "white", }}>Friends</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.circles}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "200", fontSize: 14.5, color: "white", }}>Family</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.circles}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "200", fontSize: 14.5, color: "white",}}>Private</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.circlesAdd}>
                    <TouchableOpacity>
                    <Feather name="plus" size={30} color="#5954C8" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 165,
        height: 165,
        borderRadius: 165/2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#5954C8"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 15,
        width: 35,
        height: 35,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 18,
        left: 19,
        padding: 4,
        height: 16,
        width: 16,
        borderRadius: 10
    },
    circlesAdd:{
        marginLeft:4,
        marginTop:35,
        width: 73,
        height: 73,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row", backgroundColor: "white", borderRadius: 40, borderColor: "#5954C8"
    },
    circles:{
        backgroundColor: "#5954C8",
        marginLeft:20,
        marginTop:35,
        width: 73,
        height: 73,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row"
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 5,
        right: 6,
        width: 40,
        height: 40,
        borderRadius: 40/2,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
});

export default ProfileScreen
