import React from 'react';
import Grid from '@mui/material/Grid';
import SelectSymbolList from './SelectSymbolList';
import ShowSymbolBox from './ShowSymbolBox';
import SymbolSearchBox from './SymbolSearchBox';


export default function SelectSymbolBox() {
    return (
        <Grid container style={{width:'500px'}}>
            <Grid xs={6}>
                <SelectSymbolList />
                <SymbolSearchBox />
            </Grid>
            <Grid xs={6}>
                <ShowSymbolBox />
            </Grid>
            
        </Grid>
    );
}