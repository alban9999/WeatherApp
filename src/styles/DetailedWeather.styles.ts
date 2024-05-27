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
    padding: 16,
    gap: 10,
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  centeredLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  temperature: { fontSize: 80 },
  city: {
    fontSize: 30,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  column: {
    flexDirection: 'column',
    gap: 10,
  },
  box: {
    ...Platform.select({
      web: { minWidth: 200, maxWidth: 400 },
    }),
    flex: 1,
    display: 'flex',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 15,
  },
});
