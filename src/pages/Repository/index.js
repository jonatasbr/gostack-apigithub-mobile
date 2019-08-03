import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  state = {
    htmlUrl: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;

    this.setState({
      htmlUrl: navigation.getParam('repository').html_url,
    });
  }

  render() {
    const { htmlUrl } = this.state;

    return (
      <WebView
        style={{ flex: 1 }}
        source={{ uri: htmlUrl }}
      />
    )
  }
}
