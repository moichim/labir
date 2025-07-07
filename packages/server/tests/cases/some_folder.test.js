import { expect, test } from 'vitest'
import { apiCall } from './utils/apiCall';

test('/some_folder', async () => {

    const request = await apiCall( "http://localhost:8080/some_folder", "GET" )

    expect( request.response.status ).toBe( 200 );

    // console.log( request.json );

    expect( request.json.success ).not.toBe(true);

})


