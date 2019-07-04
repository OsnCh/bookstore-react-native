import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import styles from '../shared/styles/login.style'
import globalStyles from '../shared/styles/global.style'
import colors from '../shared/constants/colors'
import { AuthService } from '../shared/services/auth.service';
import state from '../states/login.state'

export class LoginComponent extends React.Component<{ navigation: any }, state>{

  static navigationOptions = {
    header: null,
  };

  private authService: AuthService;

  constructor(props) {
    super(props);
    this.state = { isLoging: false, required: false };
    this.authService = new AuthService();
  }

  private email: string;
  private password: string;

  render() {
    return (
      <ScrollView style={{ height: '100%', flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          <View style={styles.formLogin}>
            <Text style={styles.title}>Login</Text>
            <TextInput onChangeText={(email) => { this.setEmail(email) }}
              editable={!this.state.isLoging} style={[styles.elform, globalStyles.inputs]} />
            <TextInput onChangeText={(password) => { this.setPassword(password) }}
              editable={!this.state.isLoging} secureTextEntry={true} style={[styles.elform, globalStyles.inputs]} />

            <TouchableOpacity disabled={this.state.isLoging || !this.state.required}
              style={[styles.elform, { height: 40, backgroundColor: colors.primary }]}
              activeOpacity={0.5} onPress={this.signIn.bind(this)}>
              {
                this.state.isLoging ?
                  <ActivityIndicator size="small" style={styles.loginButtonContent} color={colors.white} /> :
                  <Text style={styles.loginButtonContent}>Login</Text>}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this.registration.bind(this)}>
              <Text>Registration</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.socialButtons, styles.elform]}>
            <TouchableOpacity disabled={this.state.isLoging} style={[styles.socialButton]} activeOpacity={0.5}>
              <Image
                source={require('../assets/Images/oL5c2.png')}
                style={styles.socialButton}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.isLoging} style={[styles.socialButton]} activeOpacity={0.5}>
              <Image
                source={require('../assets/Images/images.png')}
                style={styles.socialButton}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>)
  };

  async signIn() {
    this.setState({ isLoging: true });
    try {
      let response = await this.authService.login({ email: this.email, password: this.password });
      console.log(response);
    } finally {
      this.setState({ isLoging: false });
    }
  }

  private setEmail(data: string) {
    this.email = data;
    this.checkRequired();
  }

  private setPassword(data: string) {
    this.password = data;
    this.checkRequired()
  }

  private checkRequired() {
    if (!this.email || !this.password) {
      this.setState({ required: false })
      return;
    }
    this.setState({ required: true });
  }

  private registration() {
    const { navigate } = this.props.navigation;
    navigate('Registration')
  }
}