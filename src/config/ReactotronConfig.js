import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
  .configure({
    enabled: true,
    host: '192.168.159.101',
    port: 9090,
  })
  .useReactNative()
  .connect();

  console.tron = tron;
}
