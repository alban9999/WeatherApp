import { 
  Platform,
  Dimensions,
  StyleSheet,
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
    padding: 16,
    gap: 10,
  },
  text: { fontSize: 40, color: '#ff002b', fontWeight: '700' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
