import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faEye, faHome, faInfoCircle, faUserCircle, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {
    DrawerContentScrollView, 
    DrawerItem
} from '@react-navigation/drawer'

export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                            source={{
                                uri: "https://static.wikia.nocookie.net/civilization/images/5/53/Genghis_Khan_%28Civ6%29.png/revision/latest/top-crop/width/360/height/360?cb=20200930125057"
                            }}
                            size={50}
                            />
                        </View>
                        <View style={{marginLeft:15,
                        flexDirection: 'column'}}>
                            <Title style={styles.title}>Genghis Khan</Title>
                            <Caption style={styles.caption}>@kgenhis</Caption>
                        </View>
                        <View style={styles.row}>  
                            {/* <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                                <Caption style={styles.caption}>Favorite Watches</Caption>
                            </View> */}
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                                <Caption style={styles.caption}>Favorite Watches</Caption>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faHome} color={color} size={20} />
                        )}
                        label="Home"
                        onPress={() => {}}
                    />
                      <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faUserCircle} color={color} size={20} />
                        )}
                        label="Profile"
                        onPress={() => {}}
                    />
                      <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faUserCog} color= '#5D576B' size={20} />
                        )}
                        label="Settings"
                        onPress={() => {}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem 
                    icon= {({ color, size }) => (
                    <FontAwesomeIcon icon={ faHome} color={color} size={20} />
                      )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create( {
    DrawerContent: {
        flex: 1,
    }, 
    userInfoSection: {
        paddingLeft: 20,
    }, 
    title: {
        fontSize: 16, 
        marginTop: 3, 
        fontWeight: 'bold',
    }, 
    caption: {
        fontSize: 14, 
        lineHeight: 14, 
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15, 
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12, 
        paddingHorizontal: 16,
    }
})
    