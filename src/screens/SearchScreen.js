import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try{

        }
        catch(err){
            setErrorMessage('Something wrong!');
        }
        const response = await yelp.get('/search', {
            params: {
                term: term,
                limit: 50,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            oncTermSubmit={searchApi()}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
            <Text>{results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;