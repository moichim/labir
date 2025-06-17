import { expect, test } from 'vitest'

test('/zihle', async () => {

    const request = await fetch( "http://localhost:8080/zihle" );

    const json = await request.json();

    console.log( json );

    expect( request.status ).toBe( 200 );

    expect( json.success ).toBe( true );

    expect( json.data ).not.toBeUndefined();

    expect( json.data.folder ).not.toBeUndefined();

    expect( json.data.subfolders ).not.toBeUndefined();

})


