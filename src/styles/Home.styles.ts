import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        display: 'flex',
        height: Dimensions.get('window').height,
      },
    }),
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  input: {
    flex: 1,
    minWidth: 300,
    borderRadius: 20,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  errorText: {
    color: '#dc3545',
    marginTop: 16,
    textAlign: 'center',
  },
  row: { flexDirection: 'row', gap: 5 },
  title: { fontSize: 30, color: '#007DB9', fontWeight: '700' },
  layout: { alignItems: 'center', gap: 10 },
});
