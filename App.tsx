import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from './db';

const App = () => {
  const [GlobalLanguageData, setGlobalLanguageData] = useState([]);
  const [AayatData, setAayatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = await openDatabase();
      if (!db) {
        console.log('Database not opened');
        return;
      }
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM GlobalLanguage',
          [],
          (_txObj, resultSet) => {
            const rows = resultSet.rows;
            const data: Array<any> = [];
            for (let i = 0; i < rows.length; i++) {
              data.push(rows.item(i));
            }
            console.log('GlobalLanguage data fetched:', data);
            setGlobalLanguageData(data);
          },
          (_txObj, error) => {
            console.log('Error fetching GlobalLanguage:', error);
            return false;
          },
        );
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAayatData = async () => {
      const db = await openDatabase();
      if (!db) {
        console.log('Database not opened');
        return;
      }
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM LastSync',
          [],
          (_txObj, resultSet) => {
            const rows = resultSet.rows;
            const data = [];
            for (let i = 0; i < rows.length; i++) {
              data.push(rows.item(i));
            }
            console.log('Aayat data fetched:', data);
            setAayatData(data);
          },
          (_txObj, error) => {
            console.log('Error fetching Aayat:', error);
            return false;
          },
        );
      });
    };
    fetchAayatData();
  }, []);
  
  useEffect(() => {
    const checkTableExists = async () => {
      const db = await openDatabase();
      if (!db) {
        console.log('Database not opened');
        return;
      }
      db.transaction(tx => {
        tx.executeSql(
          'SELECT name FROM sqlite_master WHERE type="table" AND name="page_fts"',
          [],
          (_txObj, resultSet) => {
            if (resultSet.rows.length > 0) {
              console.log('page_fts table exists');
              // Table exists, you can perform further actions here
            } else {
              console.log('page_fts table does not exist');
              // Table doesn't exist
            }
          },
          (_txObj, error) => {
            console.log('Error checking for table:', error);
            return false;
          },
        );
      });
    };
    checkTableExists();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GlobalLanguage Table Contents</Text>
      <FlatList
        data={GlobalLanguageData}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{JSON.stringify(item)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  header: {fontSize: 20, fontWeight: 'bold', marginBottom: 12},
  item: {padding: 8, borderBottomWidth: 1, borderColor: '#eee'},
});
