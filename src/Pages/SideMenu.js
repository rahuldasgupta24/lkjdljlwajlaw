import React from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={require('../../assets/profile-pic.png')}
                            style={{borderColor:'#5954C8', borderWidth:2, borderRadius:35, height:70, width:70}}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>@Redcrix1</Title>
                            <Caption style={styles.caption}>Redcrix</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                            <Caption style={styles.caption}>Friends</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>3</Paragraph>
                            <Caption style={styles.caption}>Circles</Caption>
                        </View>
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section>

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Profile"
                        onPress={ ()=>{props.navigation.navigate('Profile')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="wallet-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Dashboard"
                        onPress={ ()=>{} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="settings-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Settings"
                        onPress={ ()=>{props.navigation.navigate('Settings')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="account-check-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Support"
                        onPress={ ()=>{} }
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:2.8*vh,color:'grey'}} /> ) }
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
      marginTop:15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });