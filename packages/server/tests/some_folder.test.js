import { expect, test } from 'vitest'

test('/some_folder', async () => {

    const request = await fetch( "http://localhost:8080/some_folder" );

    const json = await request.json();

    expect( request.status ).toBe( 200 );

    expect( json.success ).not.toBe(true);

})


