// import { Text, View, StyleSheet , Image} from 'react-native'
//  import React, { useState } from "react";
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { api_production } from '../Service/APIservice';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SocialIcon } from 'react-native-elements';
import { User } from '../Classes/User';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";


// import { parse } from 'fast-xml-parser';



export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            AllUsers: [],
            users: []
        };
    }

    componentDidMount = () => {
        // this.getDataFromSql();

    }
    loginPushed = () => {

        this.getDataFromSql();
    }

    getDataFromSql = () => {
        const users = [];
        alert("in pushed");
        const url = `${api_production}/user/Get`
        fetch(url)
            // alert("in fetch")
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    users.push({ user: new User(item.Email, item.Fname, item.Lname, item.Age, item.Password) });
                });
                alert("hi")
                this.setState({ AllUsers: [...users] });
            });
        // console.log(this.state.AllUsers[0].email);
    }



    render() {

        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");

        return (

            <KeyboardAwareScrollView scrollEnabled={false}>

                <View style={styles.container}>
                    <Image style={styles.image} source={require("../assets/expa1.jpeg")} />
                    <View style={styles.logo}>
                        <Text style={styles.logo}>ExPa</Text>
                    </View>
                    <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            placeholderTextColor="#003f5c"
                            onChangeText={(email) => this.setState({ email: email })}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password: password })}
                        />
                    </View>
                    {/* <View><Text>{this.state.email}</Text></View>
                    <View><Text>{this.state.password}</Text></View> */}


                    <TouchableOpacity onPress={this.loginPushed} style={styles.loginBtn}>
                        <Text style={styles.loginText}>LOGIN now</Text>
                    </TouchableOpacity>

                    <View style={styles.TouchableOpacity}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                            <Text style={{ paddingTop: 20 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.forgot_button}>New User? Register Now!</Text>
                        </TouchableOpacity>

                        <View style={{ right: 25,top:10}}>
                            <SocialIcon style={styles.facebook} raised={false} type='facebook' />
                            <SocialIcon style={styles.google} raised={false} type='google' />
                            <SocialIcon style={styles.twitter} raised={false} type='twitter' />
                            <SocialIcon style={styles.linkedin} raised={false} type='linkedin' />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}


const styles = StyleSheet.create({


    container: {
        flex: 1,
        // backgroundColor: "gold",
         backgroundColor: "#daa520",
        // backgroundColor: "#fff",

        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:'black'
        marginTop: -150,
        // width:500
    },

    image: {

        marginBottom: -100,
        marginTop: 220
    },

    logo: {
        
        color: "black",
        fontSize: 75,
        fontWeight: "bold",
        marginBottom: 45
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: 200,
        // width: "100%",
        height: 55,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
    },

    forgot_button: {
        height: 20,
        marginTop: 5,
        marginBottom: 0,
    },

    loginBtn: {
        width: 200,

        // width: "80%",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#FF1493",
    },
    loginText: {
        fontWeight: "bold"
    },


    TouchableOpacity: {
        marginTop: 0,
        alignItems: "center",
    },

    facebook: {
        right: 70,
    },

    google: {
        right: 10,
        bottom: 65
    },

    twitter: {
        right: -50,
        bottom: 130
    },

    linkedin: {
        right: -110,
        bottom: 195
    },

});

