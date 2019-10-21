import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native'

class MainApp extends Component {
    constructor() {
        super()
        this.state = {
            value1: null,
            value2: null,
            value3: null,
            checked1: false,
            checked2: false,
            checked3: false,
            result: 0,
        }
    }

    sumValue = ()=> {
        if(this.state.checked1 && this.state.checked2 && this.state.checked3) {
            if(this.state.value1 && this.state.value2 && this.state.value3) {
                this.setState({
                    result : this.state.value1 + this.state.value2 +  this.state.value3
                })
                alert('Berhasil Menjumlahkan')
            } else {
                alert('Invalid, Please check the box minimal 2')
            } 
        } else if(this.state.checked1 && this.state.checked2){
            if(this.state.value1 && this.state.value2){
              this.setState({
                result: this.state.value1 + this.state.value2
              })
              alert('Berhasil Menjumlahkan')
            } else {
                alert('Invalid, Please check the box minimal 2')   
            }
        } else if(this.state.checked1 && this.state.checked3){
            if(this.state.value1 && this.state.value3){
              this.setState({
                result: this.state.value1 + this.state.value3
              })
              alert('Berhasil Menjumlahkan')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else if(this.state.checked2 && this.state.checked3){
            if(this.state.value2 && this.state.value3){
              this.setState({
                result: this.state.value2 + this.state.value3
              })
              alert('Berhasil Menjumlahkan')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else {
            alert('Invalid, Please check the box minimal 2')
        }
    }

    reduceValue = ()=> {
        if(this.state.checked1 && this.state.checked2 && this.state.checked3) {
            if(this.state.value1 && this.state.value2 && this.state.value3) {
                this.setState({
                    result : this.state.value1 - this.state.value2 -  this.state.value3
                })
                alert('Berhasil Mengurangi seluruhnya')
            } else {
                alert('Invalid, Please check the box minimal 2')
            } 
        } else if(this.state.checked1 && this.state.checked2){
            if(this.state.value1 && this.state.value2){
              this.setState({
                result: this.state.value1 - this.state.value2
              })
              alert('Berhasil Mengurangi')
            } else {
                alert('Invalid, Please check the box minimal 2')   
            }
        } else if(this.state.checked1 && this.state.checked3){
            if(this.state.value1 && this.state.value3){
              this.setState({
                result: this.state.value1 - this.state.value3
              })
              alert('Berhasil Mengurangi')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else if(this.state.checked2 && this.state.checked3){
            if(this.state.value2 && this.state.value3){
              this.setState({
                result: this.state.value2 - this.state.value3
              })
              alert('Berhasil Mengurangi')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else {
            alert('Invalid, Please check the box minimal 2')
        }
    }

    multiplyingValue = ()=> {
        if(this.state.checked1 && this.state.checked2 && this.state.checked3) {
            if(this.state.value1 && this.state.value2 && this.state.value3) {
                this.setState({
                    result : this.state.value1 * this.state.value2 *  this.state.value3
                })
                alert('Berhasil Mengalikan seluruhnya')
            } else {
                alert('Invalid, Please check the box minimal 2')
            } 
        } else if(this.state.checked1 && this.state.checked2){
            if(this.state.value1 && this.state.value2){
              this.setState({
                result: this.state.value1 * this.state.value2
              })
              alert('Berhasil Mengalikan')
            } else {
                alert('Invalid, Please check the box minimal 2')   
            }
        } else if(this.state.checked1 && this.state.checked3){
            if(this.state.value1 && this.state.value3){
              this.setState({
                result: this.state.value1 * this.state.value3
              })
              alert('Berhasil Mengalikan')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else if(this.state.checked2 && this.state.checked3){
            if(this.state.value2 && this.state.value3){
              this.setState({
                result: this.state.value2 * this.state.value3
              })
              alert('Berhasil Mengalikan')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else {
            alert('Invalid, Please check the box minimal 2')
        }
    }

    distibuteValue = ()=> {
        if(this.state.checked1 && this.state.checked2 && this.state.checked3) {
            if(this.state.value1 && this.state.value2 && this.state.value3) {
                this.setState({
                    result : this.state.value1 / this.state.value2 /  this.state.value3
                })
                alert('Berhasil Membagi seluruhnya')
            } else {
                alert('Invalid, Please check the box minimal 2')
            } 
        } else if(this.state.checked1 && this.state.checked2){
            if(this.state.value1 && this.state.value2){
              this.setState({
                result: this.state.value1 / this.state.value2
              })
              alert('Berhasil Membagi')
            } else {
                alert('Invalid, Please check the box minimal 2')   
            }
        } else if(this.state.checked1 && this.state.checked3){
            if(this.state.value1 && this.state.value3){
              this.setState({
                result: this.state.value1 / this.state.value3
              })
              alert('Berhasil Membagi')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else if(this.state.checked2 && this.state.checked3){
            if(this.state.value2 && this.state.value3){
              this.setState({
                result: this.state.value2 / this.state.value3
              })
              alert('Berhasil Membagi')
            } else {
                alert('Invalid, Please check the box minimal 2')
            }
        } else {
            alert('Invalid, Please check the box minimal 2')
        }
    }

    checkBox1 = () => {
        this.setState((prevState) => ({checked1: !prevState.checked1}));
      }
      checkBox2 = () => {
        this.setState((prevState) => ({checked2: !prevState.checked2}));
      }
      checkBox3 = () => {
        this.setState((prevState) => ({checked3: !prevState.checked3}));
      }

    render(){
        return(
           <View style = {styles.container}>
               <View style={styles.header}>
                    <Text style={styles.headerText}>Calculator App</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                    style={styles.formInput}
                    placeholder="Masukan Angka"
                    keyboardType={'numeric'}
                    onChangeText={input => this.setState({value1: parseInt(input)})}
                    />
                    <CheckBox
                    value={this.state.checked1} 
                    onChange={()=>this.checkBox1()}
                    style={styles.ckBox}
                    />
                </View>
                <View style={styles.input2}>
                    <TextInput
                    style={styles.formInput}
                    placeholder="Masukan Angka"
                    keyboardType={'numeric'}
                    onChangeText={input => this.setState({value2: parseInt(input)})}
                    />
                    <CheckBox
                    style={styles.ckBox}
                    value={this.state.checked2} 
                    onChange={()=>this.checkBox2()}/>
                </View>
                <View style={styles.input3}>
                    <TextInput
                    style={styles.formInput}
                    placeholder="Masukan Angka"
                    keyboardType={'numeric'}
                    onChangeText={input => this.setState({value3: parseInt(input)})}
                    />
                    <CheckBox
                    style={styles.ckBox}
                    value={this.state.checked3} 
                    onChange={()=>this.checkBox3()}/>
                </View>

                <View style={styles.line}/>

                <View style={styles.button}>
                <TouchableOpacity
                    onPress={ this.sumValue } 
                    style={styles.formBtn}>
                    <Text style={styles.txtBtn}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ this.reduceValue } 
                    style={styles.formBtn}>
                    <Text style={styles.txtBtn}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ this.multiplyingValue } 
                    style={styles.formBtn}>
                    <Text style={styles.txtBtn}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ this.distibuteValue } 
                    style={styles.formBtn}>
                    <Text style={styles.txtBtn}>/</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.area}>
                    <Text>HASIL : {this.state.result} </Text>
                </View>
           </View>
        )   
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#22a6b3',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
        height: 70,
        width: "100%"
    },  
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    area : {
        top: 150,
        backgroundColor: '#7ed6df',
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: "90%",
        borderRadius: 50 ,
        alignItems: 'center'
    },
    input : {
        flexDirection: 'row',
        marginTop: 5
    },
    input2 : {
        flexDirection: 'row',
        marginTop: 70
    },
    input3 : {
        flexDirection: 'row',
        marginTop: 70
    },
    formInput : {
        backgroundColor: '#7ed6df',
        height: 50,
        width: 300,
        padding: 18,
        borderRadius: 10,
        margin: 10,
    },
    ckBox : {
        alignItems: 'center',
        justifyContent: 'center',
        top: 15
    },
    button : {
        flexDirection: 'row',
        top: 80
    },
    formBtn : {
        backgroundColor: '#686de0',
        width: 70,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        margin : 5
    },
    txtBtn: {
        color: '#fff',
        fontSize: 24,
      },
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 20,
        width: '90%',
        top: 70
    },
})

export default MainApp
